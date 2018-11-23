import { loadState, saveState } from '../../src/store/localStorage';

describe('localStorage', () => {
  const state = {
    cart: {
      products: [
        { id: 1, prod_name: 'Prod1' }
      ]
    }
  };

  it('saveState', () => {
    saveState(state);
    const result = localStorage.getItem('state');
    const expectedResult = JSON.stringify({
      cart: {
        products: [
          { id: 1, prod_name: 'Prod1' }
        ]
      }
    });
    expect(result).toEqual(expectedResult);
  });

  it('loadState', () => {
    const result = loadState();
    const expectedResult = {
      cart: {
        products: [
          { id: 1, prod_name: 'Prod1' }
        ]
      }
    };
    expect(result).toEqual(expectedResult);
    localStorage.removeItem('state');
  });
});
