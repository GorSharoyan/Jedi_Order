import { createData, getAllData } from "./manipulatedDB.service";

export const createJedi = (data, uid) => createData("/jedi/", data, uid);

export const getAllJedis = () => getAllData("/jedi/");
