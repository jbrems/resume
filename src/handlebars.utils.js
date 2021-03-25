export function ifEven (conditional, options) {
  if(conditional % 2 === 0) return options.fn(this);
  return options.inverse(this);
}

export function ifOdd (conditional, options) {
  if(conditional % 2 === 1) return options.fn(this);
  return options.inverse(this);
}
