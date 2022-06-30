import { Component, OnInit } from '@angular/core';


/* models  */
import { UserModel } from '../shared/model/user';
import { CommentModel } from '../shared/model/comment';

/* services  */
import { UserService } from '../shared/services/user.service';
import { CommentService } from '../shared/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public Comments: CommentModel[] = []
  public TopLevelComments: CommentModel[] = []

  public page: number;
  public pageSize: number;


  /* event subscriptions */
  private _commentCreatedNotifcation: any;

  constructor(
    private userService: UserService,
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 20;

    this._reload();

    this._commentCreatedNotifcation = this.commentService.dataChangeNotify.subscribe({
      next: (commentId: number) => {

        this._reload();
      
      }
    });
  }

 private _reload(){
  this.Comments = this.commentService.list(this.page, this.pageSize);
  this.TopLevelComments = this.Comments.filter(x => x.parentId == undefined);
  this.TopLevelComments = this.TopLevelComments.sort((a, b) => a.score > b.score ? -1 : a.score < b.score ? 1 : 0);
 }

  public hasReplies(commentId: number): boolean {
    var output = false;
    var replies = this.Comments.filter(x => x.parentId == commentId);

    if (replies) {
      if (replies.length > 0) {
        output = true;
      }
    }
    return output;
  }

 getReplies(commentId: number): CommentModel[] {
  var output:CommentModel[]=[];
  var replies = this.Comments.filter(x => x.parentId == commentId);

  if (replies) {
    if (replies.length > 0) {
      output = replies;
    }
  }
  return output;
}

}
