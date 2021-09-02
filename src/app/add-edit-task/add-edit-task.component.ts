import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ListToDo, LocalStorgeService} from "../local-storge.service";
import {ActivatedRoute, Router} from "@angular/router";

let ID = 0;
@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent implements OnInit {

  @Input() index!: number;
  @Input() addForm!:boolean;

  todo:ListToDo[] = [];
  indexx!:string;
  selectedPriority!:number;
  indexOfPriority!:number;
  userPriority = [
    {
      id: '1',
      value: 1,
    },
    {
      id: '2',
      value: 2,
    },
    {
      id: '3',
      value: 3,
    },
    {
      id: '4',
      value: 4,
    },
    {
      id: '5',
      value: 5,
    }
  ];

  UserTask:FormGroup= new FormGroup ({});
  isFormSubmitted = false;
  taskname!:string;
  prio!:number;
  tagg!:string;

  constructor(private localStorageService: LocalStorgeService,
              private formBuilder: FormBuilder, private route: ActivatedRoute, private router:Router) {
      this.index = this.route.snapshot.params['taskIndex'];

  }



  ngOnInit(): void {
    if(this.index != -1){
      this.todo = this.localStorageService.getData();
      this.selectedPriority = this.todo[this.index].priority;
      for(let i of this.userPriority){
        if(i.value === this.selectedPriority){
          this.indexOfPriority = +i.id;
          this.indexx = i.id;
          console.log(this.indexOfPriority);
        }
      }
      this.UserTask = this.formBuilder.group(
        {
          taskName:new FormControl(this.todo[this.index].nameOfTask, [Validators.required]),
          priority: new FormControl(this.todo[this.index].priority, [Validators.required]),
          tag:new FormControl(this.todo[this.index].tag)
        });
    }
    else{
      this.UserTask = this.formBuilder.group(
        {
          taskName:new FormControl(null, [Validators.required]),
          priority: new FormControl(null, [Validators.required]),
          tag:new FormControl(null)
        });
    }

  }


  submitTask(){
    this.isFormSubmitted= true;
    if(this.index != -1){
      this.taskname = this.UserTask.value.taskName;
      this.prio = this.UserTask.value.priority;
      console.log(this.prio);
      this.tagg = this.UserTask.value.tag;
      if(this.todo[this.index].checked){
        let today = new Date();
        this.todo[this.index].completedAt = today;
      }
      this.todo[this.index].nameOfTask = this.taskname;
      this.todo[this.index].priority = this.prio;
      this.todo[this.index].tag = this.tagg;
      localStorage.setItem("ListOfTasks", JSON.stringify(this.todo));
      this.UserTask.reset();
      this.router.navigateByUrl('/');
    }
    else{
      ID = ID+1;
      this.taskname = this.UserTask.value.taskName;
      console.log(this.UserTask.value.priority);
      this.prio = this.UserTask.value.priority;
      console.log(this.prio);
      this.tagg = this.UserTask.value.tag;
      let today = new Date();
      let todayN!: Date;
      this.localStorageService.storeOnLocalStorage(ID,this.taskname,today,todayN,this.prio,this.tagg);
      this.UserTask.reset();
      this.router.navigateByUrl('/');
    }
  }

}
