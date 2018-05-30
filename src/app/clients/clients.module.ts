import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsService } from './clients.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [ClientsListComponent, ClientDetailsComponent],
  exports: [ClientsListComponent, ClientDetailsComponent],
  providers: [ClientsService]
})
export class ClientsModule { }
