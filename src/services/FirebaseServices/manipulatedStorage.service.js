import firebase, { storage } from "../../Libraries/firebase";

export function getImageUrl(section) {
  return storage.ref("Assets").child(section).getDownloadURL();
}

export const getAssetUrl = (section, image) => {
  return storage.ref("Assets").child(section).child(image).getDownloadURL();
};

export const uploadImage = (section, image) => {
  return storage.ref(`${section}${image.name}`).put(image);
};
