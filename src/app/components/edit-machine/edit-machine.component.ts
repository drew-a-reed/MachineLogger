import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/models/machine.model';
import { MachinesService } from 'src/app/services/machines.service';

@Component({
  selector: 'app-edit-machine',
  templateUrl: './edit-machine.component.html',
  styleUrls: ['./edit-machine.component.scss']
})
export class EditMachineComponent implements OnInit{
  updatedMachine: Machine = {
    name: '',
    id: ''
  };

  constructor(private router: Router,
    private machineService: MachinesService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.machineService.getMachine(id)
          .subscribe({
            next: (response) => {
              this.updatedMachine = response;
            }
          });
        }
      }
    });
  }

  updateMachine() {
    this.machineService
      .updateMachine(this.updatedMachine.id, this.updatedMachine)
      .subscribe({
        next: (response) => {
          this.router.navigate(['machines']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
