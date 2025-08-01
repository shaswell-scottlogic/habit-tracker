import { Component, inject, Input, Signal } from '@angular/core';
import { Blob } from '../blob/blob';
import { HabitService } from '../../services/habit-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-blob-view',
  imports: [Blob],
  templateUrl: './blob-view.html',
  styleUrl: './blob-view.scss'
})
export class BlobView {
  // TOOD: consider making this dumber - have habit level own data
  habitService = inject(HabitService);

  @Input() slotData: Slot[] = [];

  // TODO:
  // get habit ID as input
  // get habit data from service
  // convert it to slot data
  // then bulk it out - computed?

  slots: Slot[] = [
    { complete: true, date: new Date() },
    { complete: false, date: new Date() },
    { complete: true, date: new Date() },
    { complete: false, date: new Date() },
    { complete: true, date: new Date() },
    { complete: true, date: new Date() },
    { complete: true, date: new Date() },
    { complete: true, date: new Date() },
    { complete: true, date: new Date() },
    { date: new Date() } as Slot,
    { date: new Date() } as Slot,
    { date: new Date() } as Slot,
    { date: new Date() } as Slot,
    { date: new Date() } as Slot,
  ];

  
}
