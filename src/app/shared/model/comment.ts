
import { Injectable } from "@angular/core";

class CommentModel {
    public id: number;
    public content: string;
    public createdAt: string;
    public timeStamp: Date;
    public score: number;
    public userId: number;
    public parentId?: number;

    constructor();
    constructor(id: number, content: string, createdAt: string, timeStamp: Date,
        score: number, userId: number, parentId?: number);
    constructor(id?: number, content?: string, createdAt?: string, timeStamp?: Date,
        score?: number, userId?: number, parentId?: number) {
            if(id) {this.id=id;}
            if(content) {this.content=content;}
            if(createdAt) {this.createdAt=createdAt;}
            if(timeStamp) {this.timeStamp=timeStamp;}
            if(score) {this.score=score;}
            if(userId) {this.userId=userId;}
        this.parentId = parentId;

    }
}

export { CommentModel }

