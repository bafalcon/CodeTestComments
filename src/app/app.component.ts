import { Component } from '@angular/core';

/* models  */
import { UserModel } from './shared/model/user';

/* services  */
import { UserService } from './shared/services/user.service';
import { CommentService } from './shared/services/comment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'frontier-test';
  public currentUser: UserModel;

  constructor(
    private userService: UserService,
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    if (!this.userService.SetCurrentUser("yoda")) {
      // todo: error
    };
  }

  public clearData(){
    this.commentService.clear();
  }
}
