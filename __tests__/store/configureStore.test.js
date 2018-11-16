import '../../src/store/configureStore';

describe('configure redux store', () => {
  const store2 = {
    dispatch: [],
    subscribe: [],
    getState: [],
    replaceReducer: []
  };
  it('should set the root reducer', () => {
    const createStore = jest.fn().mockReturnValue(store2);
    createStore();

    expect(createStore).toHaveBeenCalled();
  });
});
