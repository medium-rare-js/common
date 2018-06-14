import 'jest';
import TestItem from '../../stubs/TestItem';
import Queue from '@/Collections/Queue/Queue';

let item1 = new TestItem();
item1.name = 'Kate';
let item2 = new TestItem();
item2.name = 'Anastasia';

describe('Collection\\Queue', () => {
  it('is empty by default', () => {
    let queue = new Queue<TestItem>();
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.size()).toBe(0);
  });

  it('can push new items', () => {
    let queue = new Queue<TestItem>();
    queue.push(item1);
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.size()).toBe(1);

    queue.push(item2);
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.size()).toBe(2);
  });

  it('can pop items', () => {
    let queue = new Queue<TestItem>();
    queue.push(item1);
    queue.push(item2);

    queue.pop();
    expect(queue.size()).toBe(1);

    queue.pop();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('can return current item', () => {
    let queue = new Queue<TestItem>();
    expect(queue.current()).toBeUndefined();

    queue.push(item1);
    expect(queue.current()).toMatchObject(item1);

    queue.push(item2);
    expect(queue.current()).toMatchObject(item1);
  });

  it('should be FIFO', () => {
    let queue1 = new Queue<TestItem>();
    queue1.push(item1);
    queue1.push(item2);
    expect(queue1.pop()).toMatchObject(item1);

    expect(queue1.current()).toMatchObject(item2);
    expect(queue1.pop()).toMatchObject(item2);
    expect(queue1.isEmpty()).toBeTruthy();

    let queue2 = new Queue<TestItem>();
    queue2.push(item2);
    queue2.push(item1);
    expect(queue2.pop()).toMatchObject(item2);

    expect(queue2.current()).toMatchObject(item1);
    expect(queue2.pop()).toMatchObject(item1);
    expect(queue2.isEmpty()).toBeTruthy();
  });
});
