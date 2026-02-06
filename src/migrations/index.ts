import * as migration_20260206_094109_initial from './20260206_094109_initial';

export const migrations = [
  {
    up: migration_20260206_094109_initial.up,
    down: migration_20260206_094109_initial.down,
    name: '20260206_094109_initial'
  },
];
