import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentClient: object
  show: boolean

  dataForDetails(client): void{
    this.currentClient = client;
  }

  toShowAnotherDetails(show){
    this.show = show;
  }
}
