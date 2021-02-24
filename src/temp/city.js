export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};


export const getCity = (city) => ({
  [City.PARIS]: {name: City.PARIS, lat: 48.85341, lng: 2.3488},
  [City.COLOGNE]: {name: City.COLOGNE, lat: 50.9381, lng: 6.95694},
  [City.BRUSSELS]: {name: City.BRUSSELS, lat: 50.84671, lng: 4.35162},
  [City.AMSTERDAM]: {name: City.AMSTERDAM, lat: 52.38333, lng: 4.9},
  [City.HAMBURG]: {name: City.HAMBURG, lat: 53.5200, lng: 10.0},
  [City.DUSSELDORF]: {name: City.DUSSELDORF, lat: 51.278328, lng: 6.76558}
}[city]);

