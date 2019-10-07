//import axios from "axios";

export const addNotification = (notification) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {

    // AXIOS
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then(response => {
    //   console.log("RESPONSE:", response);
    // })
    // .catch(error => {
    //   console.log("ERROR", console.error());
    // })


    //make async call to DB
    const firestore = getFirestore();
    firestore.collection("notifications").add({
      ...notification,
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: "CREATE_NOTIFICATION", notification});
    }).catch((error) => {
      dispatch({ type: "CREATE_NOTIFICATION_ERROR", error});
    })
  }
};