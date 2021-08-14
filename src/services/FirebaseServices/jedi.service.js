import { createData, getData } from "./manipulatedDB.service";

export const createJedi = (data, uid) => createData("/jedi/", data, uid);
