import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HeadOfPageComponent } from './head-of-page/head-of-page.component';
import { DisplayListComponent } from './display-list/display-list.component';
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableModule} from "primeng/table";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from '@angular/material/sort';
import { ContactComponent } from './contact/contact.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import {CdkTableModule} from "@angular/cdk/table";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {MatDialogModule} from "@angular/material/dialog";
import {ConfirmationService} from "primeng/api";
import { AboutComponent } from './about/about.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    HeadOfPageComponent,
    DisplayListComponent,
    ContactComponent,
    AboutComponent,
    UpdateTaskComponent,
    AddEditTaskComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        ReactiveFormsModule,
        TableModule,
        MatTableModule,
        MatSortModule,
        DragDropModule,
        CdkTableModule,
        MatIconModule,
        BrowserAnimationsModule,
        DropdownModule,
        MessagesModule,
        ConfirmDialogModule,
        MatDialogModule,
        FormsModule,


    ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
