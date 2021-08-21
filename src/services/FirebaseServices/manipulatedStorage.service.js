import firebase, { storage } from "../../Libraries/firebase";

export const getAssetUrl = (section, image) => {
  return storage.ref("Assets").child(section).child(image).getDownloadURL();
};

export const uploadImage = (section, image) => {
  return storage.ref(section).child(image.name).put(image);
};

export function getImageUrl(section, child) {
  return storage.ref(section).child();
}
