import { Component, OnInit } from '@angular/core';
import { car } from '../../car';
import { CARS } from '../../mockData';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {
  
  cars = CARS;
  selectedcar: car;
  removedcar: car;
  removeCar(car: car): void{
    //there should be a better way to do this
    this.removedcar = car;
    delete this.cars[this.removedcar.carID];
  }

  onSelect(car: car): void{
    this.selectedcar = car;
  }
  constructor() { }

  ngOnInit(): void {
  }

  
}
