import {
  createData,
  getAllData,
  updateData,
  getData,
} from "./manipulatedDB.service";
import { uploadImage, getImageUrl } from "./manipulatedStorage.service";

export const createJedi = (data, uid) => createData("/jedi/", data, uid);

export const getAllJedis = () => getAllData("/jedi/");

export const getJediById = (id) => getData("/jedi/", id);

export const uploadJediImage = (image) => uploadImage("/Jedi_Profiles/", image);

export const getJediUserImageUrl = (image) =>
  getImageUrl("/Jedi_Profiles/", image);

export const updateJediProfileInfo = (id, property, data) =>
  updateData("jedi", id, property, data);

// export function updateData(path, id, data) {
//   return database.ref(`${path}/` + id).update(data);
// }
