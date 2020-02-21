export const addStorageKeyMeta = (key = meta => ({
  ...meta,
  storageKey: key,
}));
