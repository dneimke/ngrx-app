import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromTagBoards from "../reducers/tagboards.reducer";

import { TagBoard } from "../../models/tagboard.model";

export const getTagBoardsState = createSelector(
  fromFeature.getEntitiesState,
  (state: fromFeature.EntitiesState) => state.boards
);

export const getTagBoardsEntities = createSelector(
  getTagBoardsState,
  fromTagBoards.getTagBoardsEntities
);

export const getAllTagBoards = createSelector(
  getTagBoardsEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getSelectedTagBoard = createSelector(
  getTagBoardsEntities,
  fromRoot.getRouterState,
  (entities, router): TagBoard => {
    return router.state && entities[router.state.params.boardId];
  }
);

export const getLoadingState = createSelector(
  getTagBoardsState,
  fromTagBoards.getTagBoardsLoading
);

export const getLoadedState = createSelector(
  getTagBoardsState,
  fromTagBoards.getTagBoardsLoaded
);
