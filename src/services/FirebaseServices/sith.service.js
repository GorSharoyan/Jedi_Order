import { createData, getAllData } from "./manipulatedDB.service";
import { getImageUrl } from "./manipulatedStorage.service";

export const createSith = (data, uid) => createData("/sith/", data, uid);

export const getAllJedis = () => getAllData("/sith/");

// export const getSithImage = (image) => getImageUrl("/DarkSide");
