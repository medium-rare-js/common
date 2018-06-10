export default interface ICollection<T> {
  /**
   * @param {T} value
   * @param {string} key
   * @returns {ICollection<T>}
   */
  add (value: T, key?: string): ICollection<T>;

  /**
   * @param {string} key
   * @returns {boolean}
   */
  has (key: string): boolean;

  /**
   * @param {string} key
   * @returns {(T | undefined)}
   */
  get (key: string): T | undefined;

  /**
   * @returns {(T | undefined)}
   */
  first (): T | undefined;

  /**
   * @param {string} key
   * @returns {ICollection<T>}
   * @memberof ICollection
   */
  delete (key: string): ICollection<T>;

  /**
   * @param {Function} callback
   * @returns {ICollection<T>}
   */
  forEach (callback: Function): ICollection<T>;

  /**
   * @param {(item: T, key: string) => boolean} callback
   * @returns {ICollection<T>}
   */
  filter (callback: (item: T, key: string) => boolean): ICollection<T>;

  /**
   * @returns {number}
   */
  size (): number;

  /**
   * @returns {boolean}
   */
  isEmpty (): boolean;
};
