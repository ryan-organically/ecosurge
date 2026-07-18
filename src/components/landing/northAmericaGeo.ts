/**
 * northAmericaGeo — hand-authored basemap geometry for the Fire Watch
 * 2D North America map. Coarse but recognizable coastlines, country
 * borders and the Great Lakes, expressed as GeoJSON-shaped objects that
 * feed straight into d3-geo's geoPath.
 *
 * All coordinates are [lon, lat] (GeoJSON order). Polylines are densified
 * before export because d3 projections resample along great circles —
 * without intermediate points, straight-line borders (e.g. the 49th
 * parallel) would not follow their parallels under a conic projection.
 */

type Pt = [number, number]

export interface MultiLineStringGeom {
  type: 'MultiLineString'
  coordinates: number[][][]
}

export interface MultiPolygonGeom {
  type: 'MultiPolygon'
  coordinates: number[][][][]
}

export interface PolygonGeom {
  type: 'Polygon'
  coordinates: number[][][]
}

/** Insert interpolated points so no segment spans more than `step` degrees. */
function densify(points: Pt[], step = 1.5): number[][] {
  const out: number[][] = []
  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i]
    const [x2, y2] = points[i + 1]
    const span = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1))
    const n = Math.max(1, Math.ceil(span / step))
    for (let j = 0; j < n; j++) {
      const t = j / n
      out.push([x1 + (x2 - x1) * t, y1 + (y2 - y1) * t])
    }
  }
  out.push([...points[points.length - 1]])
  return out
}

/* ------------------------------------------------------------------ */
/*  Coastlines (closed rings)                                          */
/* ------------------------------------------------------------------ */

/** Continental mainland: Arctic Alaska → Hudson Bay → Atlantic →
 *  Gulf → Central America → Pacific → back to Alaska. */
const MAINLAND: Pt[] = [
  // Arctic coast, west to east
  [-166.0, 68.9], [-161.5, 70.3], [-156.5, 71.3], [-152.0, 70.9],
  [-146.0, 70.1], [-141.0, 69.6], [-136.5, 69.0], [-133.0, 69.4],
  [-128.0, 69.9], [-125.0, 69.4], [-121.0, 69.7], [-115.5, 68.2],
  [-108.5, 68.5], [-104.0, 68.2], [-97.5, 68.2], [-94.0, 66.4],
  [-90.0, 65.9],
  // Hudson Bay
  [-87.0, 65.2], [-91.0, 62.6], [-94.0, 60.0], [-94.3, 58.8],
  [-92.5, 57.1], [-90.2, 57.2], [-87.8, 56.4], [-85.2, 55.3],
  // James Bay
  [-82.3, 55.1], [-82.4, 53.0], [-80.6, 51.3], [-79.1, 51.2],
  [-79.5, 52.6], [-78.6, 55.2],
  // Hudson Bay east shore + Ungava
  [-76.6, 56.2], [-76.7, 58.5], [-78.1, 60.0], [-77.4, 62.4],
  [-72.2, 61.6], [-69.9, 61.0], [-69.6, 59.1], [-65.6, 59.7],
  // Labrador
  [-63.1, 58.5], [-61.4, 56.5], [-60.0, 55.0], [-57.6, 53.6],
  [-55.9, 52.1], [-58.6, 51.2], [-60.5, 50.2], [-64.2, 49.8],
  [-66.8, 49.2],
  // Gaspé, Maritimes, US east coast
  [-64.8, 48.1], [-64.5, 45.9], [-66.1, 45.1], [-67.1, 44.8],
  [-68.6, 44.3], [-70.1, 43.7], [-70.8, 42.7], [-70.0, 41.7],
  [-71.5, 41.4], [-74.0, 40.5], [-75.1, 38.9], [-76.0, 37.2],
  [-75.7, 35.2], [-77.9, 34.0], [-79.2, 33.2], [-81.0, 31.9],
  [-81.4, 30.5], [-80.6, 28.5], [-80.1, 26.8],
  // Florida tip + Gulf coast
  [-80.4, 25.2], [-81.2, 25.2], [-81.8, 26.5], [-82.7, 27.9],
  [-82.8, 29.2], [-84.0, 30.1], [-85.4, 29.9], [-86.5, 30.4],
  [-88.0, 30.3], [-89.1, 30.3], [-89.4, 29.1], [-90.2, 29.1],
  [-91.8, 29.6], [-93.8, 29.7], [-95.1, 29.1], [-96.6, 28.3],
  [-97.4, 26.5],
  // Mexico Gulf coast + Yucatán
  [-97.7, 24.0], [-97.8, 22.3], [-96.2, 19.5], [-94.8, 18.5],
  [-93.5, 18.4], [-91.5, 18.7], [-90.5, 19.9], [-90.3, 21.0],
  [-88.5, 21.5], [-87.0, 21.5], [-86.8, 20.4], [-87.5, 19.6],
  [-87.7, 18.5], [-88.3, 17.5], [-88.3, 15.9],
  // Honduras → Panama (Caribbean side)
  [-85.9, 15.9], [-84.5, 15.3], [-83.2, 14.9], [-83.7, 12.5],
  [-83.6, 10.9], [-82.6, 9.5], [-81.2, 8.9], [-79.9, 9.3],
  [-78.2, 9.4], [-77.3, 8.7],
  // Pacific side back north
  [-78.2, 8.3], [-79.6, 8.2], [-80.9, 7.7], [-82.9, 8.3],
  [-84.7, 9.6], [-85.7, 10.9], [-87.2, 12.5], [-89.3, 13.4],
  [-90.8, 13.8], [-92.2, 14.5], [-93.9, 16.0], [-96.5, 15.7],
  [-99.0, 16.6], [-102.0, 17.9], [-104.0, 19.0], [-105.3, 20.4],
  [-105.7, 22.0], [-106.4, 23.2], [-108.0, 25.0], [-109.5, 26.8],
  [-110.9, 27.9], [-112.8, 29.8], [-114.7, 31.8],
  // Baja California (east shore down, west shore up)
  [-114.2, 29.8], [-112.9, 28.4], [-111.5, 26.7], [-110.3, 24.2],
  [-109.8, 22.9], [-112.1, 24.8], [-114.0, 27.5], [-115.7, 29.6],
  [-116.6, 31.5],
  // US/Canada Pacific coast
  [-117.1, 32.5], [-118.4, 33.7], [-120.6, 34.6], [-121.9, 36.6],
  [-122.5, 37.8], [-124.1, 40.3], [-124.2, 43.4], [-124.0, 46.3],
  [-124.7, 48.4], [-123.1, 49.3], [-124.6, 50.3], [-127.5, 52.0],
  [-129.0, 53.5], [-130.5, 54.5], [-132.0, 56.5], [-133.5, 57.5],
  // Alaska panhandle + Gulf of Alaska
  [-135.5, 59.2], [-137.5, 58.9], [-139.5, 59.8], [-142.0, 60.0],
  [-145.0, 60.4], [-148.0, 60.8], [-150.0, 59.5], [-151.7, 59.1],
  [-153.0, 58.2], [-155.0, 57.0], [-158.0, 56.0], [-161.0, 55.5],
  [-163.0, 54.8],
  // Bering Sea coast north
  [-161.5, 55.9], [-158.5, 58.0], [-158.8, 58.9], [-162.0, 59.8],
  [-165.0, 60.8], [-166.0, 61.6], [-164.5, 63.0], [-161.0, 63.5],
  [-166.0, 64.6], [-168.1, 65.6], [-166.5, 66.3], [-162.5, 66.4],
  [-166.0, 68.9],
]

const GREENLAND: Pt[] = [
  [-61.1, 81.8], [-45.0, 82.9], [-33.0, 83.5], [-21.0, 82.0],
  [-19.0, 79.0], [-21.5, 76.0], [-19.5, 73.5], [-22.0, 70.5],
  [-25.5, 68.5], [-33.0, 67.5], [-37.6, 65.6], [-40.5, 63.5],
  [-43.6, 59.9], [-48.0, 61.0], [-50.5, 64.2], [-52.5, 66.5],
  [-53.7, 68.7], [-55.5, 70.5], [-54.5, 72.5], [-56.5, 74.5],
  [-58.5, 76.0], [-68.0, 76.5], [-69.5, 77.5], [-61.1, 81.8],
]

const BAFFIN: Pt[] = [
  [-81.5, 73.7], [-75.0, 72.5], [-71.0, 71.0], [-64.0, 67.5],
  [-61.5, 66.5], [-66.0, 62.5], [-70.0, 62.5], [-74.0, 64.5],
  [-78.0, 65.5], [-76.0, 68.5], [-81.0, 70.0], [-85.0, 71.5],
  [-81.5, 73.7],
]

const VICTORIA_ISLAND: Pt[] = [
  [-117.0, 70.5], [-113.0, 68.5], [-105.0, 68.7], [-101.0, 69.5],
  [-102.0, 71.5], [-107.0, 72.0], [-115.0, 71.5], [-117.0, 70.5],
]

const VANCOUVER_ISLAND: Pt[] = [
  [-128.4, 50.8], [-126.5, 49.8], [-124.8, 48.6], [-123.4, 48.4],
  [-124.2, 49.3], [-126.0, 50.2], [-128.4, 50.8],
]

const NEWFOUNDLAND: Pt[] = [
  [-55.4, 51.6], [-53.5, 49.2], [-52.7, 47.6], [-53.6, 46.7],
  [-56.0, 47.6], [-59.4, 47.6], [-58.3, 49.1], [-56.8, 50.1],
  [-55.4, 51.6],
]

const CUBA: Pt[] = [
  [-84.9, 21.9], [-82.0, 23.2], [-79.5, 22.9], [-77.0, 20.7],
  [-74.1, 20.2], [-75.2, 19.9], [-77.7, 19.9], [-79.6, 21.6],
  [-84.9, 21.9],
]

const HISPANIOLA: Pt[] = [
  [-74.4, 18.4], [-71.6, 19.9], [-68.7, 18.4], [-71.4, 17.6],
  [-74.4, 18.4],
]

/* ------------------------------------------------------------------ */
/*  Great Lakes (closed rings, drawn as water)                         */
/* ------------------------------------------------------------------ */

const LAKE_SUPERIOR: Pt[] = [
  [-92.1, 46.8], [-90.4, 46.6], [-87.6, 46.6], [-84.6, 46.5],
  [-84.9, 47.4], [-86.5, 48.8], [-88.4, 48.7], [-89.3, 48.5],
  [-91.0, 48.1], [-92.1, 46.8],
]

const LAKE_MICHIGAN: Pt[] = [
  [-85.6, 45.9], [-87.1, 45.7], [-87.8, 44.5], [-87.9, 43.2],
  [-87.5, 41.7], [-86.5, 41.8], [-86.2, 42.8], [-86.4, 44.0],
  [-85.5, 45.0], [-85.6, 45.9],
]

const LAKE_HURON: Pt[] = [
  [-84.7, 46.1], [-82.9, 46.1], [-80.1, 45.6], [-79.9, 44.9],
  [-81.6, 44.6], [-81.8, 43.3], [-82.5, 43.0], [-83.5, 43.9],
  [-84.7, 46.1],
]

const LAKE_ERIE: Pt[] = [
  [-83.4, 41.9], [-80.9, 41.6], [-78.9, 42.8], [-80.1, 42.8],
  [-82.4, 42.1], [-83.4, 41.9],
]

const LAKE_ONTARIO: Pt[] = [
  [-79.8, 43.3], [-76.2, 43.3], [-76.5, 44.2], [-79.5, 43.6],
  [-79.8, 43.3],
]

/* ------------------------------------------------------------------ */
/*  Country borders (open polylines)                                   */
/* ------------------------------------------------------------------ */

/** US–Canada: 49th parallel → Lake of the Woods → through the Great
 *  Lakes → St. Lawrence → 45th parallel → Maine bump → Atlantic. */
const BORDER_US_CANADA: Pt[] = [
  [-123.0, 49.0], [-95.15, 49.0], [-95.15, 49.38], [-94.6, 48.7],
  [-92.5, 48.45], [-90.0, 48.1], [-88.4, 48.2], [-86.5, 47.6],
  [-84.8, 46.9], [-84.4, 46.5], [-83.6, 45.8], [-82.5, 45.3],
  [-82.4, 42.9], [-83.1, 42.1], [-81.0, 42.4], [-79.0, 42.9],
  [-79.1, 43.3], [-77.0, 43.6], [-76.4, 44.1], [-74.7, 45.0],
  [-71.5, 45.0], [-70.3, 45.9], [-69.2, 47.46], [-68.3, 47.36],
  [-67.8, 45.9], [-67.1, 45.1], [-67.0, 44.8],
]

/** Alaska–Yukon (141°W meridian) plus a coarse panhandle border. */
const BORDER_ALASKA: Pt[] = [
  [-141.0, 69.6], [-141.0, 60.3], [-139.0, 60.0], [-135.5, 59.8],
  [-133.0, 57.8], [-130.0, 56.0], [-130.0, 55.0],
]

/** US–Mexico: Pacific → Colorado River → New Mexico line → Rio Grande. */
const BORDER_US_MEXICO: Pt[] = [
  [-117.1, 32.5], [-114.7, 32.7], [-111.0, 31.3], [-108.2, 31.3],
  [-108.2, 31.78], [-106.5, 31.78], [-104.9, 30.6], [-103.1, 29.0],
  [-102.3, 29.9], [-101.4, 29.8], [-99.5, 27.6], [-97.4, 25.9],
]

/** Mexico–Guatemala–Belize (very coarse). */
const BORDER_MEX_GUAT: Pt[] = [
  [-92.2, 14.5], [-92.2, 15.3], [-91.0, 16.1], [-90.5, 16.1],
  [-90.5, 17.8], [-89.1, 17.8], [-89.1, 15.9], [-88.3, 15.9],
]

/* ------------------------------------------------------------------ */
/*  Exported GeoJSON-shaped geometry (densified)                       */
/* ------------------------------------------------------------------ */

export const NA_LAND: MultiPolygonGeom = {
  type: 'MultiPolygon',
  coordinates: [
    [densify(MAINLAND)],
    [densify(GREENLAND)],
    [densify(BAFFIN)],
    [densify(VICTORIA_ISLAND)],
    [densify(VANCOUVER_ISLAND)],
    [densify(NEWFOUNDLAND)],
    [densify(CUBA)],
    [densify(HISPANIOLA)],
  ],
}

export const NA_LAKES: MultiPolygonGeom = {
  type: 'MultiPolygon',
  coordinates: [
    [densify(LAKE_SUPERIOR, 1)],
    [densify(LAKE_MICHIGAN, 1)],
    [densify(LAKE_HURON, 1)],
    [densify(LAKE_ERIE, 1)],
    [densify(LAKE_ONTARIO, 1)],
  ],
}

export const NA_BORDERS: MultiLineStringGeom = {
  type: 'MultiLineString',
  coordinates: [
    densify(BORDER_US_CANADA, 1),
    densify(BORDER_ALASKA, 1),
    densify(BORDER_US_MEXICO, 1),
    densify(BORDER_MEX_GUAT, 1),
  ],
}

/* ------------------------------------------------------------------ */
/*  View frame + labels                                                */
/* ------------------------------------------------------------------ */

/** North America view bounding box: [west, south, east, north]. */
export const NA_BBOX: [number, number, number, number] = [-170, 12, -50, 75]

/** Densified frame polygon used to fit the projection to the canvas. */
export const NA_FRAME: PolygonGeom = {
  type: 'Polygon',
  coordinates: [
    densify(
      [
        [NA_BBOX[0], NA_BBOX[1]],
        [NA_BBOX[2], NA_BBOX[1]],
        [NA_BBOX[2], NA_BBOX[3]],
        [NA_BBOX[0], NA_BBOX[3]],
        [NA_BBOX[0], NA_BBOX[1]],
      ],
      2,
    ),
  ],
}

export function inNorthAmerica(lat: number, lon: number): boolean {
  return (
    lat >= NA_BBOX[1] && lat <= NA_BBOX[3] && lon >= NA_BBOX[0] && lon <= NA_BBOX[2]
  )
}

/** Light region labels: [text, lon, lat]. */
export const NA_LABELS: [string, number, number][] = [
  ['CANADA', -108, 58],
  ['UNITED STATES', -98, 39.5],
  ['MEXICO', -103, 24.5],
  ['ALASKA', -152, 64.5],
  ['GREENLAND', -42, 71],
  ['PACIFIC OCEAN', -136, 34],
  ['ATLANTIC OCEAN', -62, 33],
]
