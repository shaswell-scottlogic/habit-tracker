import { Component, computed, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blob',
  imports: [MatIconModule],
  templateUrl: './blob.html',
  styleUrl: './blob.scss'
})
export class Blob {
  @Input() complete: boolean | undefined;
  icon = computed(() => {
    if(this.complete) return 'circle';
    if(this.complete === false) return 'close';
    else return 'radio_button_unchecked'
  });
}
