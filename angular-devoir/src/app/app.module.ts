import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
