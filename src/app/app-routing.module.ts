import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './categories/category-create.component';
import { CategoryListComponent } from './categories/category-list.component';
import { CategoryUpdateComponent } from './categories/category-update.component';
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
import { ReservationCreateComponent } from './reservations/reservation-create.component';
import { ReservationListComponent } from './reservations/reservation-list.component';
import { ReservationUpdateComponent } from './reservations/reservation-update.component';

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
  {path : 'categories', component:CategoryListComponent},
  {path : 'categories-create', component:CategoryCreateComponent},
  {path : 'categories-update/:id', component:CategoryUpdateComponent},
  {path : 'reservations', component:ReservationListComponent},
  {path : 'reservations-create', component:ReservationCreateComponent},
  {path : 'reservations-update/:id', component:ReservationUpdateComponent},
  {path: '**',redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
