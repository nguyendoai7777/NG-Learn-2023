import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-general',
  template: `
    <nav class="d-flex">
      <div class="item{{selectedItem === i ? ' selected' : ''}}" *ngFor="let it of items; index as i" (click)="onSelect(i)">
        {{it}}
      </div>
    </nav>
  `,
  styles: [`
    .item {
      padding: 8px 20px;
      margin: 0 10px;
      width: fit-content;
      border-radius: 5px;
      border: 1px solid deeppink;
      user-select: none;
      cursor: pointer;
      transition: .25s;
    }

    .item:hover {
      box-shadow: 0 0 7px 0 rgb(166 139 43);
      -webkit-box-shadow: 0 0 7px 0 rgb(166 139 43);
      -moz-box-shadow: 0 0 7px 0 rgb(166 139 43);
    }
    .selected {
      background-color: deeppink;
    }
  `]
})
export class TabGeneralComponent {
  @Input() items: string[] = [];
  selectedItem = 0;
  onSelect(index: number): void {
    this.selectedItem = index;
  }
}
