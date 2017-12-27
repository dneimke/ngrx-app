import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs/Observable";
import { TagBoard } from "../../models/tagboard.model";

@Component({
  selector: "item",
  template: `
  <tagboard-item 
    [board]="(board$ | async)">
  </tagboard-item>
  <button (click)='onNavigate()'>Navigate to List</button>
  `,
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  board$: Observable<TagBoard>;

  constructor(private store: Store<fromStore.EntitiesState>) {}

  ngOnInit(): void {
    this.board$ = this.store.select(fromStore.getSelectedTagBoard);
  }

  onNavigate() {
    console.log("onNavigate::", this.store);
    this.store.dispatch(
      new fromRoot.Go({
        path: ["/boards"]
      })
    );
  }
}
