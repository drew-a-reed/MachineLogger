import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from 'src/app/models/machine.model';
import { MachinesService } from 'src/app/services/machines.service';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent {
  newMachine: Machine = {
    name: '',
    id: ''
  };

  constructor(private machineService: MachinesService, private router: Router) {}

  addMachine(){
    this.machineService.addMachine(this.newMachine)
    .subscribe({
      next: (machine) => {
        this.router.navigate(['machines']);
      },
      error: (response) => {
        console.log("Error!", response);
        console.log("Name", this.newMachine.name);
        console.log("id", this.newMachine.id);
      }
    });
  }
}
