import selectCategoryList from '../../../src/store/helpers/categoriesHelper';

describe('categoriesHelper', () => {
  const props = {
    state: {
      list: [{
        id: 1,
        checked: false
      },
      {
        id: 2,
        checked: false
      }]
    },
    action: {
      payload: {
        category: { id: 1 }
      }
    }
  };

  it('change category checked in category list', () => {
    const expectedResult = [{
      id: 1,
      checked: true
    },
    {
      id: 2,
      checked: false
    }];

    const result = selectCategoryList(props.state, props.action, true);
    expect(result).toEqual(expectedResult);
  });
});
