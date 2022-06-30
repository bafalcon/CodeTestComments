import { Injectable } from '@angular/core';

/* models  */
import { UserModel } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UserData: UserModel[] = [];
  public CurrentUser: UserModel;

  constructor() {
    this.UserData.push(new UserModel(1, "leiaskywalker", "/assets/images/avatars/leiaskywalker.png"));
    this.UserData.push(new UserModel(2, "lukeskywalker", "/assets/images/avatars/lukeskywalker.png"));
    this.UserData.push(new UserModel(3, "vader", "/assets/images/avatars/vader.png"));
    this.UserData.push(new UserModel(4, "yoda", "/assets/images/avatars/yoda.png"));
  }

  public SetCurrentUser(userName:string):boolean{
    var output = false;

    this.CurrentUser = this.GetByName(userName);

    if(this.CurrentUser){
      output = true;
    }

    return output;
  }

  public GetByID(id: number): UserModel {
    var user: UserModel = new UserModel();

    var foundUser = this.UserData.find(x => x.id == id);
    if (foundUser) {
      user = foundUser;
    } else {
      // rather retun something undefined TODO
    }

    return user;
  }

  public GetByName(userName: string): UserModel {
    var user: UserModel = new UserModel();

    var foundUser = this.UserData.find(x => x.userName == userName);
    if (foundUser) {
      user = foundUser;
    } else {
      // rather retun something undefined TODO
    }

    return user;
  }

}
