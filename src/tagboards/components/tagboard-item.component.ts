import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "tagboard-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [],
  template: `<h2>{{board?.name}}</h2>`
})
export class TagBoardItemComponent {
  @Input() board: any;
}
