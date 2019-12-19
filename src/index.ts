
export default true;

declare global {
  interface Object {
    let<T, R>(this: T, func: (it: T) => R): R;
    also<T>(this: T, func: (it: T) => void): T;
  }
}

Object.prototype.let = function(this, func) {
  return func(this);
}

Object.prototype.also = function(this, func) {
  func(this);
  return this;
}
