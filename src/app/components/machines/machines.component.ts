import { Component } from '@angular/core';
import { Machine } from 'src/app/models/machine.model';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent {
  machines: Machine[] = [
    {
      id: '1A',
      name: 'Machine1A',
      components: ['Component1', 'Component2', 'Component1A']
    },
    {
      id: '2A',
      name: 'Machine2A',
      components: ['Component1', 'Component2', 'Component2A']
    },
    {
      id: '1B',
      name: 'Machine1B',
      components: ['Component1', 'Component2', 'Component1B']
    },
    {
      id: '2B',
      name: 'Machine2B',
      components: ['Component1', 'Component2', 'Component2B']
    }
  ];
}
