import 'jest';
import TestItem from '../../stubs/TestItem';
import Collection from '@/Collections/Collection/Collection';

let item1 = new TestItem();
item1.name = 'Kate';
let item2 = new TestItem();
item2.name = 'Anastasia';

const testItems: { [key: string]: TestItem } = {
  user1: item1,
  user2: item2,
};

const testItem: TestItem = new TestItem();
testItem.name = 'Christina';

describe('Collection\\Collection', () => {
  it('is empty on create', () => {
    let collection = new Collection<TestItem>();
    expect(collection.isEmpty()).toBeTruthy();
  });

  it('can add items by key and value', () => {
    let collection = new Collection<TestItem>();
    Object.keys(testItems).forEach((key) => {
      collection.add(testItems[key], key);
      expect(collection.has(key)).toBeTruthy();
      expect(collection.get(key)).toMatchObject(testItems[key]);
    });
  });

  it('can generate key on item add', () => {
    let collection = new Collection<TestItem>();
    collection.add(testItem);
    expect(collection.isEmpty()).toBeFalsy();
  });

  it('can return first item', () => {
    let collection = new Collection<TestItem>();
    expect(collection.first()).toBeUndefined();

    collection.add(item1);
    expect(collection.first()).toMatchObject(item1);
  });

  it('can delete items', () => {
    let collection = new Collection<TestItem>();
    Object.keys(testItems).forEach((key) => {
      collection.add(testItems[key], key);
    });

    Object.keys(testItems).forEach((key) => {
      collection.delete(key);
      expect(collection.has(key)).toBeFalsy();
    });

    expect(collection.isEmpty()).toBeTruthy();
  });

  it('can return it\'s size', () => {
    let collection = new Collection<TestItem>();
    expect(collection.size()).toBe(0);
    let i = 0;
    Object.keys(testItems).forEach((key) => {
      i++;
      collection.add(testItems[key], key);
      expect(collection.size()).toBe(i);
    });
  });

  it('can be filtered using callback', () => {
    let collection = new Collection<TestItem>();
    Object.keys(testItems).forEach((key) => {
      collection.add(testItems[key], key);
    });

    let newCollection = collection.filter((item: TestItem, key: string): boolean => {
      return key !== 'user1';
    });

    expect(newCollection.size()).toBe(1);
    expect(newCollection.has('user1')).toBeFalsy();
    expect(newCollection.has('user2')).toBeTruthy();
  });
});
