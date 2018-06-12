export interface IRegistry<T> {
  /**
   * @param {string} key
   * @param {T} item
   * @returns {IRegistry<T>}
   */
  register (key: string, item: T): IRegistry<T>;

  /**
   * @param {string} key
   * @returns {IRegistry<T>}
   */
  unregister (key: string): IRegistry<T>;

  /**
   * @param {T} item
   * @returns {boolean}
   */
  contains (item: T): boolean;

  /**
   * @param {string} key
   * @returns {boolean}
   */
  has (key: string): boolean;

  /**
   * @param {string} key
   * @returns {T}
   */
  get (key: string): T;
}
