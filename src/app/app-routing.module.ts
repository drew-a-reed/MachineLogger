import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from './components/machines/machines.component';
import { MachineComponent } from './components/machine/machine.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';

const routes: Routes = [
  {
    path: '',
    component: MachinesComponent
  },
  {
    path: 'machines',
    component: MachinesComponent
  },
  {
    path: 'machines/add',
    component: AddMachineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
