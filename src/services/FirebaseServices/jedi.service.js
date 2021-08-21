import { createData, getAllData } from "./manipulatedDB.service";
import { uploadImage, getImageUrl } from "./manipulatedStorage.service";

export const createJedi = (data, uid) => createData("/jedi/", data, uid);

export const getAllJedis = () => getAllData("/jedi/");

export const uploadJediImage = (image) => uploadImage("/Jedi_Profiles/", image);

export const getJediUserImageUrl = (userName) =>
  getImageUrl("Jedi_Profiles", userName);
