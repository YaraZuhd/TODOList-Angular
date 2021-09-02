import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTaskComponent} from "./add-task/add-task.component";
import {DisplayListComponent} from "./display-list/display-list.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {UpdateTaskComponent} from "./update-task/update-task.component";

const routes: Routes = [
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path: 'add-task', component:AddTaskComponent},
  {path:'home',component:DisplayListComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'update-task/:taskIndex',component:UpdateTaskComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
