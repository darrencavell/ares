export default (type) => {
  return {
    FETCH: `FETCH/${type}`,
    SUCCESS: `SUCCESS/${type}`,
    ERROR: `ERROR/${type}`,
  }
}