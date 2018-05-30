import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  @Input() client: object
  @Output() close = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }

  closeDetails(){
    event.preventDefault();
    event.stopPropagation();
    this.close.emit()
  }

}
