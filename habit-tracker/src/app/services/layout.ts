import { Injectable, signal } from '@angular/core';
import { LayoutType } from '../models/LayoutType';

@Injectable({
  providedIn: 'root'
})
export class Layout {
  private layout = signal<LayoutType>(LayoutType.BLOB);

  getLayout() {
    return this.layout();
  }

  setLayout(type: LayoutType) {
    this.layout.set(type);
  }

  updateLayout() {
    // in future we could have a dropdown and pass a param
    this.layout.update(value => value === LayoutType.BLOB ? LayoutType.GRID : LayoutType.BLOB );
  }
}
