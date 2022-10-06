import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './clients/client-details.component';
import { ClientRegisterComponent } from './clients/client-register.component';
import { ClientUpdateComponent } from './clients/client-update.component';
import { ClientsListComponent } from './clients/clients-list.component';
import { MessageCreateComponent } from './messages/message-create.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageUpdateComponent } from './messages/message-update.component';
import { PartyroomCreateComponent } from './partyrooms/partyroom-create.component';
import { PartyroomListComponent } from './partyrooms/partyroom-list.component';
import { PartyroomUpdateComponent } from './partyrooms/partyroom-update.component';

const routes: Routes = [
  {path : 'clients', component:ClientsListComponent},
  // {path: '',redirectTo:'clients',pathMatch:'full'},
  {path: 'clients-register',component:ClientRegisterComponent},
  {path: 'client-update/:id',component:ClientUpdateComponent},
  {path: 'client-details/:id',component:ClientDetailsComponent},
  {path : 'partyrooms', component:PartyroomListComponent},
  {path : 'partyrooms-create', component:PartyroomCreateComponent},
  {path : 'partyrooms-update/:id', component:PartyroomUpdateComponent},
  {path : 'messages', component:MessageListComponent},
  {path : 'messages-create', component:MessageCreateComponent},
  {path : 'messages-update/:id', component:MessageUpdateComponent},
  {path: '**',redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
