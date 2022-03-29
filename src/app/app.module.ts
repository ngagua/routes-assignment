import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerDetailsModule } from './components/customer-details/customer-details.module';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerListModule } from './components/customer-list/customer-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerListModule,
    CustomerDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
