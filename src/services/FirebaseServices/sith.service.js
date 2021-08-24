import { createData, getAllData } from "./manipulatedDB.service";
import { getImageUrl } from "./manipulatedStorage.service";
import { uploadImage } from "./manipulatedStorage.service";

export const createSith = (data, uid) => createData("/sith/", data, uid);

export const getAllSiths = () => getAllData("/sith/");

// export const getSithImage = (image) => getImageUrl("/DarkSide");

export const uploadSithImage = (image) => uploadImage("Jedi_Profiles", image);

export const getSithUserImageUrl = (image) =>
  getImageUrl("/Sith_Profiles/", image);

export const updateSithProfileInfo = (id, property, data) =>
  updateData("sith", id, property, data);
