import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ListToDo, LocalStorgeService} from "../local-storge.service";
import {ConfirmationService, Message, PrimeNGConfig} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss']
})
export class DisplayListComponent implements OnInit,AfterViewInit {
  public todo:ListToDo[];

  cols!: any[];

  msgs: Message[] = [];



  constructor(private localStorageService: LocalStorgeService,
              private confirmationService: ConfirmationService, private router:Router) {
    this.todo = this.localStorageService.getData();
    console.log(this.todo);
  }
  ngOnInit(): void {

    this.cols = [
      { field: 'checked', header: 'Checked' },
      { field: 'nameOfTask', header: 'Name' },
      { field: 'createdAt', header: 'CreatedAt' },
      { field: 'completedAt', header: 'CompletedAt' },
      { field: 'priority', header: 'Priority' },
      { field: 'tag', header: 'Tag' },
      { field: 'controls', header: 'Controls' }

    ];

  }

  ngAfterViewInit(): void {
  }

  Checked(index:number){
    if (this.todo[index].checked) {
      this.todo[index].checked = false;
      this.todo[index].completedAt;
      console.log('Thing was marked as not done.');
    } else {
      let today = new Date()
      this.todo[index].checked = true;
      this.todo[index].completedAt = today;
      console.log('Thing was marked as done.');
    }
    localStorage.setItem("ListOfTasks", JSON.stringify(this.todo));
  }


  confirm(index:number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.todo.splice(index, 1);
        localStorage.setItem("ListOfTasks", JSON.stringify(this.todo));
        this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }

  edit(index:number){
    this.router.navigate(['update-task/' + index]);

  }


}
