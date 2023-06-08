import { post, get, del, put } from "@/api";

export interface Task {
  id: number;
  duration: number;
  name: string;
  description: string;
  complete: boolean;
}

export interface TaskUpdate {
  id: number;
  duration?: number;
  name?: string;
  description?: string;
  complete?: boolean;
}

// create a new task given a name and description
export async function createTask(name: string, description: string) {
  return post("task/create", { name, description });
}

// return all tasks for users current session
export async function tasks(): Promise<Task[]> {
  return get("task/get-all");
}

// update whether a task has been completed
export async function updateTask(update: TaskUpdate) {
  return put("task/update", update);
}

// delete a task given its id
export async function deleteTask(id: number) {
  return del("task/delete", { id });
}
