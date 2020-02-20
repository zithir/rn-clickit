export const Screens = {
  MAIN_MENU: 'Menu',
  GAME: 'Game',
  SETTINGS: 'Settings',
  ABOUT: 'About',
};

export interface ConfigItem {
  label: string;
  value: number;
}

// TODO define enums for values
export const GridSize: ConfigItem[] = [
  { label: 'Small', value: 2 },
  { label: 'Medium', value: 3 },
  { label: 'Big', value: 4 },
  { label: 'Huge', value: 5 },
  { label: 'Extreme', value: 6 },
];

export const GameSpeed: ConfigItem[] = [
  { label: 'Slow', value: 1000 },
  { label: 'Medium', value: 750 },
  { label: 'Fast', value: 500 },
];
