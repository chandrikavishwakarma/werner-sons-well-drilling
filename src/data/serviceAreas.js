/**
 * 5 exact Pennsylvania service-area names rotated individually one at a time,
 * positioned at different suitable locations around the world map.
 */
export const ROTATING_SERVICE_AREAS = [
  {
    name: 'Northampton',
    // Position 1: Upper-left area (North Pacific)
    position: 'top-6 left-6 sm:top-10 sm:left-12',
  },
  {
    name: 'Lehigh',
    // Position 2: Lower-left area (South Pacific)
    position: 'bottom-8 left-6 sm:bottom-12 sm:left-14',
  },
  {
    name: 'Monroe',
    // Position 3: Top-center area (North Atlantic)
    position: 'top-6 left-1/2 -translate-x-1/2 sm:top-8',
  },
  {
    name: 'Carbon',
    // Position 4: Lower-center area (South Atlantic)
    position: 'bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12',
  },
  {
    name: 'Poconos',
    // Position 5: Upper-right area (North Pacific / East Asia)
    position: 'top-6 right-6 sm:top-10 sm:right-12',
  },
]
