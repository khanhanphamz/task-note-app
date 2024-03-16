import { readDocuments } from "./db";
import { ITask } from "../types";

export const getTasks = async () => {
  const { documents } = await readDocuments();

  return documents as ITask[];
};
