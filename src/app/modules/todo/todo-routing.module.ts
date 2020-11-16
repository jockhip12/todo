import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component';

const routes: Routes = [
  {path:'todo/add', component:CreateToDoComponent},
  {path:'todo/list', component:ListToDoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
