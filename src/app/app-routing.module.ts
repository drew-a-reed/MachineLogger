import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from './components/machines/machines.component';
import { MachineComponent } from './components/machine/machine.component';

const routes: Routes = [
  {
    path: '',
    component: MachinesComponent
  },
  {
    path: 'allMachines',
    component: MachinesComponent
  },
  {
    path: 'machine/:id',
    component: MachineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
