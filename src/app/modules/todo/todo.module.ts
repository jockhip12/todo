import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { ListToDoComponent } from './components/list-to-do/list-to-do.component'
import { SharedModule } from '../shared/shared.module';
import { ListToDoService } from './services/list-to-do.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    TodoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CreateToDoComponent,
    ListToDoComponent
  ],
  providers: [ListToDoService],
})
export class TodoModule {

  constructor()
  {
    console.log('Module Todo is loaded !');
  }

 }
