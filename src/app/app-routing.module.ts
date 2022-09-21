import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

const routes: Routes = [
  {path : 'clients', component:ClientsListComponent},
  // {path: '',redirectTo:'clients',pathMatch:'full'},
  {path: 'clients-register',component:ClientRegisterComponent},
  {path: 'client-update/:id',component:ClientUpdateComponent},
  {path: 'client-details/:id',component:ClientDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
