import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { HttpClientModule} from '@angular/common/http';
import { ClientRegisterComponent } from './client-register/client-register.component';
import { FormsModule } from '@angular/forms';
import { ClientUpdateComponent } from './client-update/client-update.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientRegisterComponent,
    ClientUpdateComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
