import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MachinesComponent } from './components/machines/machines.component';
import { MachineComponent } from './components/machine/machine.component';
import { AddMachineComponent } from './components/add-machine/add-machine.component';
import { EditMachineComponent } from './components/edit-machine/edit-machine.component';

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
  },
  {
    path: 'machines/edit/:id',
    component: EditMachineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
