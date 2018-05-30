import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit, OnDestroy {
  @Output() showDetails = new EventEmitter<object>()

  clients: object[]
  subscription: Subscription
  sortedClients

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.getClientsList();
  }

  getClientsList(): void{
    this.subscription = this.clientsService.getList().subscribe((clients) => this.clients = clients);
  }

  onClientTrClick(client): void{
    this.showDetails.emit(client)
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  getSortedClients(){
    this.sortedClients = [];
    this.clients.map((clients) => {
      let obj = {};
      for(let key in clients){
        Object.assign(obj, clients[key]) 
      }
      this.sortedClients.push(obj)
    })
    return(this.sortedClients)
  }
}
