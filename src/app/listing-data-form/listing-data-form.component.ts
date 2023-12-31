import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent {
  @Input() buttonText : any;
  @Input() currentName : any = ' ';
  @Input() currentDescription : any = ' ';
  @Input() currentPrice : any = ' ';


  id: string;
  name: string;
  description : string;
  price : string;

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  OnButtonClicked(): void {
    this.onSubmit.emit({
      id: this.id,
      name: this.name,
      description: this.description,
      price: Number(this.price),
    });
  }

}
