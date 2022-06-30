import { Component, OnInit, Input, Output, } from '@angular/core';


/* models  */
import { UserModel } from '../../model/user';
import { CommentModel } from '../../model/comment';

/* services  */
import { UserService } from '../../services/user.service';
import { CommentService } from '../..//services/comment.service';

@Component({
  selector: 'app-frontier-comment',
  templateUrl: './frontier-comment.component.html',
  styleUrls: ['./frontier-comment.component.scss']
})
export class FrontierCommentComponent implements OnInit {

  @Input() comment: CommentModel;
  @Input() commentParent: CommentModel;

  public currentUserID: number;
  public editMode: boolean=false;
  public replyMode: boolean=false;

  public newComment: CommentModel;

  constructor(
    private userService: UserService,
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.currentUserID = this.userService.CurrentUser.id;
  }

  public getAvatar(userID: number): string {
    return this.userService.GetByID(userID).png;
  }
  public getUserName(userID: number): string {
    return this.userService.GetByID(userID).userName;
  }

  public getTarget(): string {
    if (this.comment.parentId) {
      return "@" + this.userService.GetByID(this.commentParent.userId).userName;
    } else {
      return "";
    }
  }

  public toggleReply(){
    this.replyMode = !this.replyMode;
    this.editMode = false;
    if(this.replyMode){
      this.newComment = new CommentModel();
      if(this.commentParent){
        this.newComment.parentId = this.commentParent.id; //one level of replies
      } else {
        this.newComment.parentId = this.comment.id;  
      }
      this.newComment.userId = this.userService.CurrentUser.id;
      this.newComment.timeStamp = new Date();
      this.newComment.score=0;
    }
  }
  public toggleEdit(){
    this.editMode = !this.editMode;
    this.replyMode = false;
  }
  public isReply(): boolean {

    return (this.comment.parentId ? true : false);
  }
  public score(delta:number){
    if(this.comment.userId!=this.userService.CurrentUser.id){
      this.comment.score += delta;
      this.commentService.vote(this.comment);  
    } else {
      // cant upvote own comment
    }
  }

  public getAge(): string {

    var output = "";
    var dateNow = new Date();
    var diffTime = dateNow.valueOf() - new Date(this.comment.timeStamp).valueOf();
    var diffMins = Math.ceil(diffTime / (1000 * 60));
    var diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    var diffMonths = Math.ceil(diffDays / 30);

    if (diffMonths > 1) {
      if (diffMonths > 1.99) {
        output = diffMonths + " months ago";
      } else {
        output = diffMonths + " month ago";
      }
    } else if (diffDays > 1) {
      if (diffDays > 1.99) {
        output = diffDays + " days ago";
      } else {
        output = diffDays + " day ago";
      }
    } else if (diffHours > 1) {
      if (diffHours > 1.99) {
        output = diffHours + " hours ago";
      } else {
        output = diffHours + " hour ago";
      }
    } else if (diffMins > 1) {
      if (diffMins > 1.99) {
        output = diffMins + " mins ago";
      } else {
        output = diffMins + " min ago";
      }
    } else {
      output = "just now"
    }

    return output;

  }
}
