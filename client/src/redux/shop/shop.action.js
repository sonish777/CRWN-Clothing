import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  // console.log("INSIDE FETCH COLLECTION ST")
  return async (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    try {
      const collectionsSnapshot = await collectionRef.get();
      const collectionsMap = convertCollectionsSnapshotToMap(
        collectionsSnapshot
      );
      dispatch(fetchCollectionSuccess(collectionsMap));
    } catch (error) {
      console.log(error);
      dispatch(fetchCollectionFailure(error.message));
    }
  };
};
