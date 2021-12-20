import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemsListComponent } from './components//items-list/items-list.component';
import { ItemNewComponent } from './components//item-new/item-new.component';
import { ItemComponent } from './components/item/item.component';
import { DeletetaskbuttonComponent } from './components/deletetaskbutton/deletetaskbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsListComponent,
    ItemNewComponent,
    ItemComponent,
    DeletetaskbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
