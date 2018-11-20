// contains properties and their values for type mapping
export type Keyify<T> = {
  //[P in keyof T]: T[P]
  [P in keyof T]: P
};

// creates new object from an original object with properties
// of the same name and values using the property names as well
export function getKeysFromObject<T>(obj: T): Keyify<T> {
  const keysArray = Object.keys(obj);

  const stringifyObject = keysArray.reduce((p, c, i, a) => {
    return {...p, [c]: c};
  }, {});
  return stringifyObject as Keyify<T>;
}

// get value of property by key
export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
