import { createData, getData } from "./manipulatedDB.service";

export const createSith = (data, uid) => createData("/jedi/", data, uid);
