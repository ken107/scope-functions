declare const _default: true;
export default _default;
declare global {
    interface Object {
        let<T, R>(this: T, func: (it: T) => R): R;
        also<T>(this: T, func: (it: T) => void): T;
    }
}
