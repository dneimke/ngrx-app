import * as fromTagBoards from "../actions/tagboards.action";
import { TagBoard } from "../../models/tagboard.model";
import { LoadTagBoardsSuccess } from "../actions";

export interface TagBoardsState {
  entities: { [id: number]: TagBoard };
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromTagBoards.TagBoardsAction
): TagBoardsState {
  switch (action.type) {
    case fromTagBoards.LOAD_TAGBOARDS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromTagBoards.LOAD_TAGBOARDS_SUCCESS: {
      const tagBoards = action.payload;

      const entities = tagBoards.reduce(
        (entities: { [id: number]: TagBoard }, tagBoard: TagBoard) => {
          return {
            ...entities,
            [tagBoard.id]: tagBoard
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: true,
        loaded: true,
        entities
      };
    }

    case fromTagBoards.LOAD_TAGBOARDS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getTagBoardsEntities = (state: TagBoardsState) => state.entities;
export const getTagBoardsLoading = (state: TagBoardsState) => state.loading;
export const getTagBoardsLoaded = (state: TagBoardsState) => state.loaded;
