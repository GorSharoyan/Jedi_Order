import {
  createData,
  getAllData,
  updateData,
  getData,
} from "./manipulatedDB.service";
import { uploadImage, getImageUrl } from "./manipulatedStorage.service";

export const createSith = (data, uid) => createData("/sith/", data, uid);

export const getAllSiths = () => getAllData("/sith/");
export const getSithById = (id) => getData("/sith/", id);

export const uploadSithImage = (image) => uploadImage("Jedi_Profiles", image);

export const getSithUserImageUrl = (image) =>
  getImageUrl("/Sith_Profiles/", image);

export const updateSithProfileInfo = (id, property, data) =>
  updateData("sith", id, property, data);
