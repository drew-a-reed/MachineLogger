import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachinesComponent } from './components/machines/machines.component';
import { MachineComponent } from './components/machine/machine.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';


@NgModule({
  declarations: [
    AppComponent,
    MachinesComponent,
    MachineComponent,
    AddMachineComponent,
    EditMachineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
