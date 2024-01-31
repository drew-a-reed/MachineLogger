import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from 'src/app/models/machine.model';
import { MachinesService } from 'src/app/services/machines.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  machines: Machine[] = [];

  constructor(private machinesService : MachinesService, private router: Router){}

  ngOnInit(): void {
    this.machinesService.getAllMachines()
      .subscribe({
        next: (machines) => {
          this.machines = machines;
        },
        error: (response) => {
          console.log(response);
        }
      });
  }

  deleteMachine(id: string) {
    this.machinesService.deleteMachine(id)
      .subscribe({
        next: (response) => {
          let currentUrl = this.router.url;
          this.router.navigateByUrl('/', {skipLocationChange: true})
          .then(() => {
            this.router.navigate([currentUrl]);
          });
        }
      });
  }

}
