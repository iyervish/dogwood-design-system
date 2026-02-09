export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface ColorFamily {
  name: string;
  description: string;
  inspiration: string;
  scale: ColorScale;
}

export const blueRidge: ColorFamily = {
  name: 'Blue Ridge',
  description: 'Deep navy — primary brand color',
  inspiration: 'Inspired by the Blue Ridge Mountains',
  scale: {
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#486581',
    700: '#334e68',
    800: '#243b53',
    900: '#1b365d',
    950: '#102a43',
  },
};

export const chesapeake: ColorFamily = {
  name: 'Chesapeake',
  description: 'Teal — informational & interactive',
  inspiration: 'Inspired by the Chesapeake Bay',
  scale: {
    50: '#effcf6',
    100: '#c6f7e2',
    200: '#8eedc7',
    300: '#65d6ad',
    400: '#3ebd93',
    500: '#27ab83',
    600: '#0e7c7b',
    700: '#0c6b6a',
    800: '#0a5a59',
    900: '#084948',
    950: '#053837',
  },
};

export const piedmont: ColorFamily = {
  name: 'Piedmont',
  description: 'Warm brown — earthy neutral',
  inspiration: 'Inspired by Piedmont clay and earth',
  scale: {
    50: '#fdf8f3',
    100: '#faeadb',
    200: '#f3d5b5',
    300: '#e6b98a',
    400: '#d49a6a',
    500: '#8b4513',
    600: '#7a3c11',
    700: '#6a340f',
    800: '#592b0d',
    900: '#49230b',
    950: '#381b08',
  },
};

export const shenandoah: ColorFamily = {
  name: 'Shenandoah',
  description: 'Forest green — success states',
  inspiration: 'Inspired by the Shenandoah Valley',
  scale: {
    50: '#f0faf4',
    100: '#d4edda',
    200: '#a8d8b9',
    300: '#7bc49a',
    400: '#5cb57e',
    500: '#4a7c59',
    600: '#3d6b4a',
    700: '#305a3c',
    800: '#24492f',
    900: '#1a3823',
    950: '#112718',
  },
};

export const cardinal: ColorFamily = {
  name: 'Cardinal',
  description: 'Vibrant red — error and emphasis',
  inspiration: 'Named after the Virginia state bird',
  scale: {
    50: '#fef2f4',
    100: '#fde3e8',
    200: '#fbc8d3',
    300: '#f89daf',
    400: '#f26b84',
    500: '#c41e3a',
    600: '#b01a34',
    700: '#93162c',
    800: '#7a1325',
    900: '#68111f',
    950: '#3b0912',
  },
};

export const dogwood: ColorFamily = {
  name: 'Dogwood',
  description: 'Gold — accent & attention',
  inspiration: 'Named after the Virginia state flower',
  scale: {
    50: '#fefdf4',
    100: '#fdf9e3',
    200: '#faf0c0',
    300: '#f5e08e',
    400: '#eecb55',
    500: '#d4a832',
    600: '#b8892a',
    700: '#996c22',
    800: '#7a5520',
    900: '#66461f',
    950: '#3b270e',
  },
};

export const slate: ColorFamily = {
  name: 'Slate',
  description: 'Neutral blue-gray',
  inspiration: 'Clean neutral for backgrounds and text',
  scale: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
};

export const colorFamilies: ColorFamily[] = [
  blueRidge,
  chesapeake,
  dogwood,
  piedmont,
  shenandoah,
  cardinal,
  slate,
];
