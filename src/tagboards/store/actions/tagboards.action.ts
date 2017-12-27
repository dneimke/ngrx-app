import { Action } from "@ngrx/store";
import { TagBoard } from "../../models/tagboard.model";

// Load actions
export const LOAD_TAGBOARDS = "[TagBoard] Load TagBoards";
export const LOAD_TAGBOARDS_SUCCESS = "[TagBoard] Load TagBoards Success";
export const LOAD_TAGBOARDS_FAIL = "[TagBoard] Load TagBoards Fail";

export class LoadTagBoards implements Action {
  readonly type = LOAD_TAGBOARDS;
}

export class LoadTagBoardsSuccess implements Action {
  readonly type = LOAD_TAGBOARDS_SUCCESS;
  constructor(public payload: TagBoard[]) {}
}

export class LoadTagBoardsFail implements Action {
  readonly type = LOAD_TAGBOARDS_FAIL;
  constructor(public payload: any) {}
}

// action types
export type TagBoardsAction =
  | LoadTagBoards
  | LoadTagBoardsSuccess
  | LoadTagBoardsFail;
