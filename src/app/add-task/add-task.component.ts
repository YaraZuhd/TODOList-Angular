import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorgeService} from "../local-storge.service"
import {Router} from '@angular/router';
import {ConfirmationService, Message} from "primeng/api";

let ID:number=0;
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {

  }

}
