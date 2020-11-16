import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CheckEmailPipe } from './pipes/check-email.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [CheckEmailPipe],
  providers: [UserService],
  exports: [FormsModule, CommonModule, CheckEmailPipe]
})
export class SharedModule { }
