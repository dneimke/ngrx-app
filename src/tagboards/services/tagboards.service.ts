import { TagBoard } from "../models/tagboard.model";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

const BOARDS_API: string = "http://localhost:3000/boards";

@Injectable()
export class TagBoardsService {
  constructor(private http: HttpClient) {}

  public getTagBoards(): Observable<TagBoard[]> {
    return this.http
      .get<TagBoard[]>(BOARDS_API)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
