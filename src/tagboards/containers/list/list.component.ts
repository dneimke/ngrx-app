import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../../app/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs/Observable";
import { TagBoard } from "../../models/tagboard.model";

@Component({
  selector: "list",
  template: `
    <h2>List</h2>
    <div *ngIf="!((tagBoards$ | async)?.length)">
      No TagBoards, add one to get started.
    </div>
    <tagboard-list-item
      *ngFor="let tagBoard of (tagBoards$ | async)"
      [board]="tagBoard">
    </tagboard-list-item>
  `,
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  tagBoards$: Observable<TagBoard[]>;

  constructor(private store: Store<fromStore.EntitiesState>) {
    this.store.dispatch(new fromStore.LoadTagBoards());
  }

  ngOnInit(): void {
    this.tagBoards$ = this.store.select(fromStore.getAllTagBoards);
  }
}
