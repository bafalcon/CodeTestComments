
import { Injectable } from "@angular/core";

class UserModel {
    public id: number;
    public userName: string;
    public png: string;

    constructor();
    constructor(id: number, userName: string, png: string);
    constructor(id?: number, userName?: string, png?: string) {
        if (id) { this.id = id; }
        if (userName) { this.userName = userName; }
        if (png) { this.png = png; }
    }
}

export { UserModel }
