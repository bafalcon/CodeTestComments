import { Injectable, EventEmitter } from '@angular/core';

/* models  */
import { CommentModel } from '../model/comment';

/* services  */
import { LocalStorageService } from '../services/local-storage.service';



@Injectable({
  providedIn: 'root'
})
export class CommentService {


  public dataChangeNotify: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private localStorageService: LocalStorageService,
  ) { }


  public delete(comment: CommentModel): CommentModel {
    // todo toast

    var data: CommentModel[] = this.localStorageService.getList("FRONTIERCOMMENTS");

    if (comment.id) {
      var theComment = data.find(x => x.id == comment.id);
      if (theComment) {

        const index = data.indexOf(theComment, 0);
        if (index > -1) {
          data.splice(index, 1);
        }
        this.localStorageService.set("FRONTIERCOMMENTS", data);
      }
    } else {
      // error toast/handle todo
    }

    this.dataChangeNotify.emit(comment.id);

    return comment;
  }

  public vote(comment: CommentModel): CommentModel {
    // todo toast

    var data: CommentModel[] = this.localStorageService.getList("FRONTIERCOMMENTS");

    if (comment.id) {
      var theComment = data.find(x => x.id == comment.id);
      if (theComment) {
        theComment.score = comment.score;
        this.localStorageService.set("FRONTIERCOMMENTS", data);
      }
    } else {
      // error toast/handle todo
    }

    this.dataChangeNotify.emit(comment.id);

    return comment;
  }

  public save(comment: CommentModel): CommentModel {
    // todo toast

    var data: CommentModel[] = this.localStorageService.getList("FRONTIERCOMMENTS");

    if (comment.id) {
      var theComment = data.find(x => x.id == comment.id);
      if (theComment) {
        theComment.content = comment.content;
        this.localStorageService.set("FRONTIERCOMMENTS", data);
      }
    } else {
      comment.id = Math.max(...data.map(o => o.id)) + 1;
      data.push(comment);
      this.localStorageService.set("FRONTIERCOMMENTS", data);
    }

    this.dataChangeNotify.emit(comment.id);

    return comment;
  }

  public list(page: number, pageSize: number): CommentModel[] {

    var data: CommentModel[] = [];
    var initialLoadRequired: boolean = true;

    var localData = this.localStorageService.getList("FRONTIERCOMMENTS");

    if (localData) {
      if (localData.length > 0) {
        initialLoadRequired = false;
      }
    }

    if (initialLoadRequired) {
      data = this._preLoad(); // if all comments are deleted it will restore the initial preload
      this.localStorageService.set("FRONTIERCOMMENTS", data);
    } else {
      data = localData;
    }

    return data;
  }

  private _preLoad(): CommentModel[] {
    var data: CommentModel[] = [];

    data.push(new CommentModel(1,
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "2022-04-10T13:49:51.141Z", new Date(2022, 3, 10, 13, 49, 51, 141),
      12, 1, undefined));
    data.push(new CommentModel(2,
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into Angular as well soon. Perhaps you can give me an insight on where I can learn Angular? Thanks!",
      "2022-05-14T13:49:51.141Z", new Date(2022, 4, 14, 13, 49, 51, 141),
      5, 2, undefined));
    data.push(new CommentModel(3,
      "If you're looking to kick start your career, search no further. React is all you need. Welcome to the Dark Side.",
      "2022-06-01T13:49:51.141Z", new Date(2022, 5, 1, 13, 49, 51, 141),
      4, 3, 2));
    data.push(new CommentModel(4,
      "Chillax, my Padawans. Much to learn, you have. The fundamentals of HTML, CSS, and JS,  I'd recommend focusing on. It's very tempting to jump ahead but lay a solid foundation first. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stays constant.",
      "2022-06-02T13:49:51.141Z", new Date(2022, 5, 2, 13, 49, 51, 141),
      2, 4, 2));

    return data;
  }

  public clear() {
    var data = this._preLoad(); // if all comments are deleted it will restore the initial preload
    this.localStorageService.set("FRONTIERCOMMENTS", data);
}

}

/****/ 