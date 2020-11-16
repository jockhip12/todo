import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { DetailUserComponent } from './components/detail-user/detail-user.component';
import { ConfirmDeleteUserComponent } from './components/confirm-delete-user/confirm-delete-user.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateUserParentComponent } from './components/samples/input/create-user-parent/create-user-parent.component';
import { ListUserChildComponent } from './components/samples/input/list-user-child/list-user-child.component';
import { CreateUserChildrenComponent } from './components/samples/output/create-user-children/create-user-children.component';
import { ListUserParentComponent } from './components/samples/output/list-user-parent/list-user-parent.component';
import { MyViewChildComponent } from './components/samples/view-child/my-view-child/my-view-child.component';
import { MyViewParentComponent } from './components/samples/view-child/my-view-parent/my-view-parent.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SharedModule } from './modules/shared/shared.module';
import { ListToDoService } from './modules/todo/services/list-to-do.service';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { AuthentificationService } from './components/authentification/services/authentication.service';
import { ActivatedGuardService } from './components/authentication/services/activated-guard.service';
import { TokenInterceptorService } from './components/authentication/services/token-interceptor.service';
import { NgzoneComponent } from './components/samples/ngzone/ngzone.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UpdateUserComponent,
    ListUserComponent,
    DetailUserComponent,
    ConfirmDeleteUserComponent,
    CreateUserParentComponent,
    ListUserChildComponent,
    CreateUserChildrenComponent,
    ListUserParentComponent,
    MyViewChildComponent,
    MyViewParentComponent,
    AuthentificationComponent,
    NgzoneComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, SharedModule,
  ],
  providers: [ListToDoService, AuthentificationService, ActivatedGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
