import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})

export class EditListingPageComponent implements OnInit {
  listing: Listing;

  @Input() buttonText : any;
  constructor(
    private route: ActivatedRoute,
    private router : Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const fakeListing = fakeMyListings.find(listing => listing.id === id);
   
    if (fakeListing !== undefined){
      this.listing = fakeListing;
    }
  }

  onSubmit(): void {
    alert('Saving changes to the listing ...');
    this.router.navigateByUrl('/my-listings');
  }

}
