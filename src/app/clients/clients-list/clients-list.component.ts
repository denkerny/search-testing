import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: [ './clients-list.component.css' ]
})
export class ClientsListComponent implements OnInit {
  @Output() details = new EventEmitter<object>()
  subscription: Subscription
  clients: object[]
  newClients: object[]
  selectedIndex: number = null;

  constructor(private clientsService: ClientsService){}

  ngOnInit(): void{
    this.getClientsList();
  }
  getClientsList(): void{
    this.subscription = this.clientsService.getList()
        .subscribe((clients) => this.clients = clients )
  }

  onClientClick(client): void{
    this.details.emit(client)
  }

  get(){
    let arr = [];
    this.clients.map(function (el){
      let obj = {};
      for(let key in el){
        Object.assign(obj, el[key])
      }
      arr.push(obj);
    })
    return this.newClients = arr;
  }

   setIndex(index: number) {
      this.selectedIndex = index;
   }
}

