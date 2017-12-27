import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as fromTagBoards from "./tagboards.reducer";

export interface EntitiesState {
  boards: fromTagBoards.TagBoardsState;
}

export const reducers: ActionReducerMap<EntitiesState> = {
  boards: fromTagBoards.reducer
};

export const getEntitiesState = createFeatureSelector<EntitiesState>(
  "entities"
);
