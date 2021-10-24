import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
