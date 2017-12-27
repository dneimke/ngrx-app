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
  template: `
      <div class="tagboard-item">
        TagboardItem
      </div>
    `
})
export class TagBoardItemComponent {
  @Input() tagBoard: any;
}
