import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromStore from "../../store";

@Component({
  selector: "item",
  template: `
  <h2>Item</h2>
  <button (click)='onNavigate()'>Navigate to List</button>
  `,
  styleUrls: ["./item.component.css"]
})
export class ItemComponent {
  constructor(private store: Store<fromStore.EntitiesState>) {}

  onNavigate() {
    console.log("onNavigate::", this.store);
    this.store.dispatch(
      new fromRoot.Go({
        path: ["/boards"]
      })
    );
  }
}
