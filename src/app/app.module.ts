import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './clients/clients-list.component';
import { HttpClientModule} from '@angular/common/http';
import { ClientRegisterComponent } from './clients/client-register.component';
import { FormsModule } from '@angular/forms';
import { ClientUpdateComponent } from './clients/client-update.component';
import { ClientDetailsComponent } from './clients/client-details.component';
import { PartyroomListComponent } from './partyrooms/partyroom-list.component';
import { PartyroomCreateComponent } from './partyrooms/partyroom-create.component';
import { PartyroomUpdateComponent } from './partyrooms/partyroom-update.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageCreateComponent } from './messages/message-create.component';
import { MessageUpdateComponent } from './messages/message-update.component';
import { CategoryListComponent } from './categories/category-list.component';
import { CategoryCreateComponent } from './categories/category-create.component';
import { CategoryUpdateComponent } from './categories/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientRegisterComponent,
    ClientUpdateComponent,
    ClientDetailsComponent,
    PartyroomListComponent,
    PartyroomCreateComponent,
    PartyroomUpdateComponent,
    MessageListComponent,
    MessageCreateComponent,
    MessageUpdateComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent
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
