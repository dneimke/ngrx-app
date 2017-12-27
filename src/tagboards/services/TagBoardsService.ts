import { TagBoard } from "../models/tagboard.model";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

export class TagBoardsService {
  public getTagBoards(): Observable<TagBoard[]> {
    return of([]);
  }
}
