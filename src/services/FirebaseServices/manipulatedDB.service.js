import firebase, { database } from "../../Libraries/firebase";

//function for creating data nad sending to firebase
export function createData(path, data, uid) {
  return firebase
    .database()
    .ref(path + uid)
    .set(data);
}

//function for getting fetch requests from firebase
//By ID
export function getData(path, id) {
  return database
    .ref(path + id)
    .once("value")
    .then((snapshot) => snapshot.val());
}
//ALl
export function getAllData(path) {
  return database
    .ref(path)
    .once("value")
    .then(function (response) {
      return response.val();
    });
}
