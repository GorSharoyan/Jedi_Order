import firebase, { storage } from "../../Libraries/firebase";

export function getImageUrl(section) {
  return storage.ref("Assets/").child(section).getDownloadURL();
}
