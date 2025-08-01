import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  imports: [],
  templateUrl: './grid-view.html',
  styleUrl: './grid-view.scss'
})
export class GridView {
  @Input() slotData: Slot[] = [];
}
