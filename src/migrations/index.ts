import * as migration_20260206_084704_initial from './20260206_084704_initial';

export const migrations = [
  {
    up: migration_20260206_084704_initial.up,
    down: migration_20260206_084704_initial.down,
    name: '20260206_084704_initial'
  },
];
