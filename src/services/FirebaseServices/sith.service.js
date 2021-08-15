import { createData, getData } from "./manipulatedDB.service";
import { getImageUrl } from "./manipulatedStorage.service";

export const createSith = (data, uid) => createData("/sith/", data, uid);
