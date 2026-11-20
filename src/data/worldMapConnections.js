/**
 * Long-distance intercontinental connections across the globe
 * for the official WebberUI World Map component.
 * Distributes animated curved paths across major world regions
 * (North America, South America, Europe, Africa, Asia, Australia).
 */
export const LONG_DISTANCE_CONNECTIONS = [
  // Trans-Atlantic: San Francisco to London
  { from: { lat: 37.77, lng: -122.42 }, to: { lat: 51.51, lng: -0.13 } },
  // Trans-Eurasian: London to Tokyo
  { from: { lat: 51.51, lng: -0.13 }, to: { lat: 35.68, lng: 139.69 } },
  // Trans-Americas: New York to Buenos Aires
  { from: { lat: 40.71, lng: -74.01 }, to: { lat: -34.6, lng: -58.38 } },
  // Africa to Asia: Cape Town to Singapore
  { from: { lat: -33.92, lng: 18.42 }, to: { lat: 1.35, lng: 103.82 } },
  // East Asia to Australia: Shanghai to Sydney
  { from: { lat: 31.23, lng: 121.47 }, to: { lat: -33.87, lng: 151.21 } },
  // Europe to South Asia: Paris to Mumbai
  { from: { lat: 48.85, lng: 2.35 }, to: { lat: 19.08, lng: 72.88 } },
]
