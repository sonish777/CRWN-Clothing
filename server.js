const express = require("express");
const cors = require("cors");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  console.log(req.body);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    console.log(stripeRes);
    if (stripeErr) {
      res.status(500).json({
        error: stripeErr,
      });
    } else
      res.status(200).json({
        success: stripeRes,
      });
  });
});

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  console.log("STARTING");
  if (!err) console.log(`Listening on port: ${port}`);
});
