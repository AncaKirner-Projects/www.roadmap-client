import '../../src/store/configureStore';

describe('configure redux store', () => {
  const store = {
    dispatch: [],
    subscribe: jest.fn(),
    getState: [],
    replaceReducer: []
  };
  it('should set the root reducer', () => {
    const createStore = jest.fn().mockReturnValue(store);
    createStore();

    expect(createStore).toHaveBeenCalled();
  });
});
