import { Injectable,Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


// key that is used to access the data in local storageconst
let STORAGE_KEY:string = 'ListOfTasks';

export interface ListToDo{
  id:number;
  nameOfTask:string;
  checked:boolean;
  createdAt:Date;
  completedAt:Date;
  priority:number;
  tag:string
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorgeService {

  private todo!: ListToDo;
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  getData() {
    return this.storage.get(STORAGE_KEY);
  }

  public storeOnLocalStorage(id:number ,taskTitle: string,create:Date,complete:Date,priority:number,tag:string): void {
    // get array of tasks from local storage
    const currentTodoList = this.storage.get(STORAGE_KEY) || [];          // push new task to array
    currentTodoList.push({
      id:id,
      nameOfTask: taskTitle,
      checked: false,
      createdAt:create,
      completedAt:complete,
      priority:priority,
      tag:tag
    });
    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, currentTodoList);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }



}
