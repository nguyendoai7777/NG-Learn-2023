import { Component, Input } from '@angular/core';
import { TabGeneralComponent } from './tab-general.component';

@Component({
  selector: 'tab-boostrap',
  template: `
    <nav class="d-flex">
      <div class="btn btn-info{{selectedItem === i ? ' selected' : ''}}" *ngFor="let it of items; index as i" (click)="onSelect(i)">
        {{it}}
      </div>
    </nav>
  `,
  styles: [`
    .selected {
      background-color: deeppink;
    }
  `],
  providers: [
    {
      provide: TabGeneralComponent,
      useExisting: TabBoostrapComponent
    }
  ]
})
export class TabBoostrapComponent extends TabGeneralComponent{}
