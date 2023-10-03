export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const parts = [...set.values()]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .filter((valueSubStr) => valueSubStr);
  return parts.join('-');
}
