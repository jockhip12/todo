import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateUserParentComponent } from './components/samples/input/create-user-parent/create-user-parent.component';
import { ListUserParentComponent } from './components/samples/output/list-user-parent/list-user-parent.component';
import { MyViewParentComponent } from './components/samples/view-child/my-view-parent/my-view-parent.component';
import { CreateToDoComponent } from './modules/todo/components/create-to-do/create-to-do.component';
import { ListToDoComponent } from './modules/todo/components/list-to-do/list-to-do.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ConfirmDeleteUserComponent } from './components/confirm-delete-user/confirm-delete-user.component';
import { ActivatedGuardService } from './components/authentication/services/activated-guard.service';

const routes: Routes = [

  { path: 'sample-input', component: CreateUserParentComponent },
  { path: 'sample-output', component: ListUserParentComponent },
  { path: 'sample-view-child', component: MyViewParentComponent },

  { path: 'list', component: ListUserComponent, /*canActivate: [ActivatedGuardService]*/ },
  { path: '', component: CreateUserComponent, /*canActivate: [ActivatedGuardService] */},
  {
    path: '',
    loadChildren: './modules/todo/todo.module#TodoModule',
    /*canActivate: [ActivatedGuardService]*/
  },
  { path: 'login', component: AuthentificationComponent },
  { path: 'update-user/:id', component: UpdateUserComponent, /*canActivate: [ActivatedGuardService] */},
  { path: 'delete-user/:id', component: ConfirmDeleteUserComponent, /*canActivate: [ActivatedGuardService]*/ },
  { path: '**', redirectTo: "login" }
  /*
  {
    path: 'm1', 
    loadChildren: () => import('./modules/todo/todo.module').
      then(module => module.TodoModule)
      
  }
  */
  /*
  {
    path: '',
    children:
      [
        {
          path: '',
          loadChildren: './modules/todo/todo.module#TodoModule'
        }
      ]
  }
  */
];

// localhost:4200/<les deux premières quotes>/<les deux deuxièmes quotes>

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
