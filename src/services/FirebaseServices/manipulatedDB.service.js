import firebase, { database } from "../Libraries/firebase";

//function for creating data nad sending to firebase

export function createData(path, data, uid) {
  return firebase
    .database()
    .ref(path + uid)
    .set(data);
}

//function for geting fetch requests from firebase

export function getData(path, id) {
  return database
    .ref(path + id)
    .once("value")
    .then((snapshot) => snapshot.val());
}
