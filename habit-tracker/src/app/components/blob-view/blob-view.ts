import { Component } from '@angular/core';
import { Blob } from '../blob/blob';

@Component({
  selector: 'app-blob-view',
  imports: [Blob],
  templateUrl: './blob-view.html',
  styleUrl: './blob-view.scss'
})
export class BlobView {
  slots = [
    { complete: true, date: new Date() },
    { complete: false, date: new Date() },
    { complete: true, date: new Date() },
    { complete: false, date: new Date() },
    { date: new Date() },
  ];
}
