import { User } from "./User";

export class ListToDo {
    id: number;
    text: string;
    completed = false;
    priority?:string;
    id_user: number;
    user?: User
}