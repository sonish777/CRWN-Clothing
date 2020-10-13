import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HbTlyImsJr5R3ftmnxZjiLgoHrbA5JUsWP3muyaojkpBvgJUdWR2rJCPDmojLxuaAd1x2mv8hUAhqVhAQEcoRWx00tPY210dm";

  const onToken = (token) => {
    axios({
      method: "POST",
      url: "payment",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment Successful");
      })
      .catch((err) => {
        console.log("Payment Error ", err);
        alert(
          "There was an issue with your payment. Please make sure you use the provided credentials"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default stripeCheckoutButton;
