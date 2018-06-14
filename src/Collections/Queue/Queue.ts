import { IQueue } from '@/Collections/Queue/IQueue';

export default class Queue<T> implements IQueue<T> {

  protected _items: T[] = [];

  /**
   * @param {T} item
   */
  push (item: T) {
    this._items.push(item);
  }

  /**
   * @returns {(T | undefined)}
   */
  current (): T | undefined {
    return this._items[0];
  }

  /**
   * @returns {(T | undefined)}
   */
  pop (): T | undefined {
    return this._items.shift();
  }

  /**
   * @returns {boolean}
   */
  isEmpty (): boolean {
    return this._items.length === 0;
  }

  /**
   * @returns {number}
   */
  size (): number {
    return this._items.length;
  }
}
