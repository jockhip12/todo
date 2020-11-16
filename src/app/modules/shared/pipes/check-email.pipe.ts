import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../models/User';

@Pipe({
  name: 'checkEmail',
  pure: false
})
export class CheckEmailPipe implements PipeTransform {

  transform(users: User[]): User[] {

    console.log("Check Email Pipe :) ");
    return users.filter(user => user.email && user.email.trim().length !== 0);
  }

}
