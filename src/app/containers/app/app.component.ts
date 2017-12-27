import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <div style="text-align:center">
    <h1>
      Welcome to the {{appName}}!
    </h1>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  appName = "NGRX Sample App";
}
