import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../app/store";
import * as fromStore from "../store";

@Component({
  selector: "tagboard-list-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [],
  template: `
      <div class="tagboard-item" *ngIf="board">
        <a (click)='onNavigateToItem()'>{{board.name}}</a>
      </div>
    `
})
export class TagBoardListItemComponent {
  @Input() board: any;

  constructor(private store: Store<fromStore.EntitiesState>) {}

  onNavigateToItem() {
    const path = `/boards/${this.board.id}`;
    this.store.dispatch(
      new fromRoot.Go({
        path: [path]
      })
    );
  }
}
