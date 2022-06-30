import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

/* models  */
import { UserModel } from '../../model/user';
import { CommentModel } from '../../model/comment';

/* services  */
import { UserService } from '../../services/user.service';
import { CommentService } from '../..//services/comment.service';

@Component({
  selector: 'app-frontier-comment-edit',
  templateUrl: './frontier-comment-edit.component.html',
  styleUrls: ['./frontier-comment-edit.component.scss']
})
export class FrontierCommentEditComponent implements OnInit {

  @Input() comment?: CommentModel;
  @ViewChild('confirmModal') confirmModal : any;

  public theComment: CommentModel;

  public currentUserID: number;

  constructor(
    private userService: UserService,
    private commentService: CommentService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    if(!this.comment){
      this.theComment = new CommentModel();
      this.theComment.userId = this.userService.CurrentUser.id;
      this.theComment.timeStamp = new Date();
      this.theComment.score=0;
    } else {
      this.theComment = this.comment;
    }
  }

  public getAvatar(): string {
    return this.userService.GetByID(this.userService.CurrentUser.id).png;
  }

  public saveComment(){
    var savedComment = this.commentService.save(this.theComment);
    this.theComment = new CommentModel();
  }

  public deleteComment(){
    this.modalService.open(this.confirmModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result){
        this.commentService.delete(this.theComment);
      }
    }, (reason) => {
      // equates to cancel
    });

  }
   
}
