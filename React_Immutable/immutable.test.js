import { Map, List } from 'immutable';
import getFromJS from './0-fromjs';
import getMap from './1-map';
import accessImmutableObject from './2-nested';
import { getListObject, addElementToList } from './3-list';
import { map, map2 } from './4-mutations';
import { concatElements, mergeElements } from './5-merge';
import mergeDeeplyElements from './6-deeply';
import areMapsEqual from './7-equality';
import printBestStudents from './8-seq';

describe('React Immutable assignment', () => {
  test('Task 0: converts nested objects with fromJS', () => {
    expect(getFromJS({ name: { first: 'Beni' } }).getIn(['name', 'first']))
      .toBe('Beni');
  });

  test('Task 1: converts an object to Map', () => {
    expect(Map.isMap(getMap({ name: 'Beni' }))).toBe(true);
  });

  test('Task 2: accesses nested elements', () => {
    expect(accessImmutableObject(
      { name: { first: 'Guillaume' } },
      ['name', 'first']
    )).toBe('Guillaume');
  });

  test('Task 3: creates and updates a List', () => {
    const list = getListObject(['one', 'two']);
    expect(List.isList(list)).toBe(true);
    expect(addElementToList(list, 'three').toJS())
      .toEqual(['one', 'two', 'three']);
    expect(list.size).toBe(2);
  });

  test('Task 4: performs chained mutations', () => {
    expect(map.get('2')).toBe('Noah');
    expect(map2.get('2')).toBe('Benjamin');
    expect(map2.get('4')).toBe('Oliver');
  });

  test('Task 5: concatenates and merges', () => {
    expect(concatElements([1, 2], [3, 4]).toJS())
      .toEqual([1, 2, 3, 4]);

    expect(mergeElements(
      { name: 'First', age: 20 },
      { name: 'Second' }
    ).toJS()).toEqual({ name: 'Second', age: 20 });
  });

  test('Task 6: deeply merges nested objects', () => {
    const first = {
      'user-1': {
        likes: { 1: { uid: 1234 } },
      },
    };

    const second = {
      'user-1': {
        likes: { 2: { uid: 134 } },
      },
    };

    expect(mergeDeeplyElements(first, second).toJS()).toEqual({
      'user-1': {
        likes: {
          1: { uid: 1234 },
          2: { uid: 134 },
        },
      },
    });
  });

  test('Task 7: compares Maps by value', () => {
    expect(areMapsEqual(Map({ name: 'Beni' }), Map({ name: 'Beni' })))
      .toBe(true);
  });

  test('Task 8: filters and capitalizes student names', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});

    printBestStudents({
      1: { score: 99, firstName: 'guillaume', lastName: 'salva' },
      2: { score: 60, firstName: 'john', lastName: 'doe' },
    });

    expect(spy).toHaveBeenCalledWith({
      1: {
        score: 99,
        firstName: 'Guillaume',
        lastName: 'Salva',
      },
    });

    spy.mockRestore();
  });
});
