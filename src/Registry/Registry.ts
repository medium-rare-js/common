import { IRegistry } from '@/Registry/IRegistry';
import UnregisteredItemError from '@/Registry/Error/UnregisteredItemError';

export default class Registry<T> implements IRegistry<T> {

  protected _items: { [key: string]: T };

  public constructor () {
    this._items = {};
  }

  /**
   * @param {string} key
   * @param {T} item
   * @returns {IRegistry<T>}
   */
  public register (key: string, item: T): IRegistry<T> {
    this._items[key] = item;

    return this;
  }

  /**
   * @param {string} key
   * @returns {IRegistry<T>}
   */
  public unregister (key: string): IRegistry<T> {
    delete this._items[key];

    return this;
  }

  /**
   * @param {string} key
   * @returns {boolean}
   */
  public has (key: string): boolean {
    return key in this._items;
  }

  /**
   * @param {T} item
   * @returns {boolean}
   */
  public contains (item: T): boolean {
    for (let key in this._items) {
      if ({}.hasOwnProperty.call(this._items, key)) {
        if (this._items[key] === item) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * @param {string} key
   * @returns {T}
   */
  public get (key: string): T {
    if (!this.has(key)) {
      throw new UnregisteredItemError(`Item with key ${key} is not registered`);
    }

    return this._items[key];
  }
}
