interface Location {
  latitude: number,
  longitude: number,
  readonly numberLocation: number

  getLocation(): string;
}

const getLocation = (location: Location): string => {
  return `${location.latitude} - ${location.longitude}`
}

// const location = {
//   latitude: 12312,
//   longitude2: 321
// }
// getLocation(location)

// const location: Location = {
//   latitude: 123,
//   longitude: 321,
//   numberLocation: 123
// }
// location.numberLocation = 32132 // error
// getLocation(location)

class LocationMap implements Location {
  latitude: number;
  longitude: number;
  numberLocation: number = 0;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude
    this.longitude = longitude
  }

  getLocation(): string {
    return 'any';
  }
}
class LocationMapBR implements Location {
  latitude: number;
  longitude: number;
  numberLocation: number = 0;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude
    this.longitude = longitude
  }

  getLocation(): string {
    return 'any';
  }
}
getLocation(new LocationMapBR(123, 321))

export {}
