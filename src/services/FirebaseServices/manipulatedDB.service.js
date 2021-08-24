import firebase, { database } from "../../Libraries/firebase";

//function for creating data and  sending to firebase
export function createData(path, data, uid) {
  return firebase
    .database()
    .ref(path + uid)
    .set(data);
}
//function for updating data and sending it to firebase
export function updateData(path, id, property, data) {
  return database
    .ref(`${path}/` + id)
    .child(property)
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
//ALL
export function getAllData(path) {
  return database
    .ref(path)
    .once("value")
    .then(function (response) {
      return response.val();
    });
}
