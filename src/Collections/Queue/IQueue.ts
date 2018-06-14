export interface IQueue<T> {
  /**
   * @param {T} item
   */
  push (item: T): void;

  /**
   * @returns {(T | undefined)}
   */
  current (): T | undefined;

  /**
   * @returns {(T | undefined)}
   */
  pop (): T | undefined;

  /**
   * @returns {boolean}
   */
  isEmpty (): boolean;

  /**
   * @returns {number}
   */
  size (): number;
}
