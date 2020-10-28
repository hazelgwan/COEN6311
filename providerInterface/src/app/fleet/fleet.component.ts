import { Component, OnInit } from '@angular/core';
import { car } from '../../car';
import { CarService } from '../car.service';


@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.css']
})
export class FleetComponent implements OnInit {
  
  cars: car[];
  selectedcar: car;
  
  onSelect(car: car): void{
    this.selectedcar = car;
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => this.cars=cars)
  }

  constructor( private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  
}
