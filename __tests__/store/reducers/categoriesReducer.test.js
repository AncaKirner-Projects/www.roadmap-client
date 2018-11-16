import categoriesReducer from '../../../src/store/reducers/categoriesReducer';
import ActionTypes from '../../../src/store/actions/actionTypes';

const categories = [
  { id: 1, name: 'Categ1' },
  { id: 2, name: 'Categ2' }
];

const props = checked => ({
  state: {
    selected: [3, 2]
  },
  state2: {
    selected: [1, 3, 2]
  },
  action: {
    payload: {
      checked,
      category: { id: 1 },
      products: []
    }
  }
});

describe('Products Reducer', () => {
  it('has a default state', () => {
    expect(categoriesReducer(undefined, { type: 'unexpected' })).toEqual([]);
  });

  it('can handle FETCH_CATEGORIES', () => {
    const expectResult = categories;

    expect(categoriesReducer(undefined, {
      type: ActionTypes.FETCH_CATEGORIES,
      payload: categories
    })).toEqual(expectResult);
  });

  it('can handle CATEGORY_SELECTED select category when are none selected', () => {
    const expectResult = {
      list: [],
      selected: [1],
      selectedProducts: []
    };

    expect(categoriesReducer(undefined, {
      type: ActionTypes.CATEGORY_SELECTED,
      payload: props(true).action.payload
    })).toEqual(expectResult);
  });

  it('can handle CATEGORY_SELECTED select category when are more selected', () => {
    const expectResult = {
      list: [],
      selected: [3, 2, 1],
      selectedProducts: []
    };

    expect(categoriesReducer(props(true).state, {
      type: ActionTypes.CATEGORY_SELECTED,
      payload: props(true).action.payload
    })).toEqual(expectResult);
  });

  it('can handle CATEGORY_SELECTED unselect category ', () => {
    const expectResult = {
      list: [],
      selected: [3, 2],
      selectedProducts: []
    };

    expect(categoriesReducer(props(true).state2, {
      type: ActionTypes.CATEGORY_SELECTED,
      payload: props(false).action.payload
    })).toEqual(expectResult);
  });

  it('can handle CATEGORY_SHOW_ERROR', () => {
    const callFunct = () => {
      categoriesReducer(undefined, {
        type: ActionTypes.CATEGORY_SHOW_ERROR,
        payload: 'Error'
      });
    };
    expect(callFunct).toThrow('ERROR: Error');
  });
});
