import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import { ListToDo } from '../../../models/list-to-do';

@Injectable()
export class ListToDoService {
  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

    listToDos():Observable<ListToDo[]>{
    return this._http.get<ListToDo[]>(this.baseUrl + '/listTodos');
  }
    addTodo(listToDo: ListToDo): Observable<ListToDo[]>{
      return this._http.post<ListToDo[]>(this.baseUrl + '/addTodo/', listToDo);
    }

}
