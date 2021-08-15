import firebase, { storage } from "../../Libraries/firebase";

export function getImageUrl(image) {
  return storage.ref("Assets/").child(image.name).getDownloadURL();
}
