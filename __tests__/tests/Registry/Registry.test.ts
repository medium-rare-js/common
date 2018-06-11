import 'jest';
import TestItem from '../../stubs/TestItem';
import Registry from '@/Registry/Registry';

let item1 = new TestItem();
item1.name = 'Kate';
let item2 = new TestItem();
item2.name = 'Anastasia';

describe('Collection\\Registry', () => {
  it('can register new item', () => {
    let registry = new Registry<TestItem>();
    expect(registry.register('Kate', item1) instanceof Registry).toBeTruthy();
  });

  it('can check if item is registered', () => {
    let registry = new Registry<TestItem>();
    registry.register('Kate', item1);

    expect(registry.has('Kate')).toBeTruthy();
    expect(registry.contains(item1)).toBeTruthy();

    expect(registry.has('Anastasia')).toBeFalsy();
    expect(registry.contains(item2)).toBeFalsy();
  });

  it('can return registered item', () => {
    let registry = new Registry<TestItem>();
    registry.register('Kate', item1);

    expect(registry.get('Kate')).toMatchObject(item1);
  });

  it('cannot return unregistered item', () => {
    let registry = new Registry<TestItem>();
    registry.register('Kate', item1);

    let found = false;
    let error = false;
    try {
      registry.get('Anastasia');
      found = true;
    } catch (e) {
      error = true;
    }

    expect(found).toBeFalsy();
    expect(error).toBeTruthy();
  });

  it('can unregister item', () => {
    let registry = new Registry<TestItem>();
    registry.register('Kate', item1);

    registry.unregister('Kate');
    expect(registry.has('Kate')).toBeFalsy();
    expect(registry.contains(item1)).toBeFalsy();
  });
});
