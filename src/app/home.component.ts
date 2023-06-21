import { Housinglocation } from './housinglocation';

export class HouseComponent {
    housingLocation: Housinglocation = {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: 'assets/example-house.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    };
  }