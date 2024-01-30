import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachinesComponent } from './components/machines/machines.component';
import { MachineComponent } from './components/machine/machine.component';


@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    MachineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
