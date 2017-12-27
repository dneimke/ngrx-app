import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

import * as tagBoardActions from "../actions";
import * as fromServices from "../../services";
import { of } from "rxjs/observable/of";
import { switchMap, map, catchError } from "rxjs/operators";

@Injectable()
export class TagBoardsEffects {
  constructor(
    private actions$: Actions,
    private tagBoardsService: fromServices.TagBoardsService
  ) {}

  @Effect()
  loadTagBoards$ = this.actions$.ofType(tagBoardActions.LOAD_TAGBOARDS).pipe(
    switchMap(() => {
      return this.tagBoardsService
        .getTagBoards()
        .pipe(
          map(tagBoards => new tagBoardActions.LoadTagBoardsSuccess(tagBoards)),
          catchError(error => of(new tagBoardActions.LoadTagBoardsFail(error)))
        );
    })
  );
}
