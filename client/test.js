import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("Q71og4NxtVtIa2UA5jPf")
  .collection("cartitems")
  .doc("");
firestore.doc("/users/Q71og4NxtVtIa2UA5jPf/cartitems/JKDJ5152Pdg19829");
firestore.collection("/users/Q71og4NxtVtIa2UA5jPf/cartitems");
