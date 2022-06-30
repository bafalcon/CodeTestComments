import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { FrontierCommentComponent } from './shared/components/frontier-comment/frontier-comment.component';
import { FrontierCommentEditComponent } from './shared/components/frontier-comment-edit/frontier-comment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    FrontierCommentComponent,
    FrontierCommentEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
