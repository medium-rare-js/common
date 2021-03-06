import uniqid from 'uniqid';
import ICollection from '@/Collections/Collection/ICollection';

interface CollectionItems<T> {
  [key: string]: T;
}

export default class Collection<T> implements ICollection<T> {

  protected _items: CollectionItems<T>;

  protected _size: number = 0;

  constructor () {
    this._items = {};
  }

  /**
   * @param {T} value
   * @param {string} key
   * @returns {ICollection<T>}
   */
  add (value: T, key?: string): ICollection<T> {
    if (key === undefined) {
      key = uniqid.process();
    }

    if (!this.has(key)) {
      this._size++;
    }

    this._items[key] = value;
    return this;
  }

  /**
   * @param {string} key
   * @returns {boolean}
   */
  has (key: string): boolean {
    return key in this._items;
  }

  /**
   * @param {string} key
   * @returns {T}
   */
  get (key: string): T | undefined {
    return this._items[key];
  }

  /**
   * @returns {T | undefined}
   */
  first (): T | undefined {
    let result = undefined;
    Object.keys(this._items).every(key => {
      result = this._items[key];
      return false;
    });

    return result;
  }

  /**
   * @param {(item: T, key: string) => void} callback
   * @returns {ICollection<T>}
   */
  forEach (callback: (item: T, key: string) => void): ICollection<T> {
    Object.keys(this._items).forEach(key => {
      callback(this._items[key], key);
    });

    return this;
  }

  /**
   * @param {(item: T, key: string) => boolean} callback
   * @returns {ICollection<T>}
   */
  filter (callback: (item: T, key: string) => boolean): ICollection<T> {
    let items = new (this.constructor as any)();

    this.forEach((item: T, key: string) => {
      if (callback(item, key) === true) {
        items.add(item, key);
      }
    });

    return items;
  }

  /**
   * @param {string} key
   * @returns {ICollection<T>}
   */
  delete (key: string): ICollection<T> {
    if (this.has(key)) {
      this._size--;
    }
    delete this._items[key];
    return this;
  }

  /**
   * @returns {number}
   */
  size (): number {
    return this._size;
  }

  /**
   * @returns {boolean}
   */
  isEmpty (): boolean {
    return this._size === 0;
  }
}
