import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRoot from "../../store";

@Component({
  selector: "list",
  template: `
    <h2>List</h2>
    <button (click)='onNavigate()'>Navigate</button>
  `,
  styleUrls: ["./list.component.css"]
})
export class ListComponent {
  constructor(private store: Store<{}>) {}

  onNavigate() {
    console.log("onNavigate::", this.store);
    this.store.dispatch(
      new fromRoot.Go({
        path: ["/item"]
      })
    );
  }
}
