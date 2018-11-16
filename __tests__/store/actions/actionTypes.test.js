import { showError } from '../../../src/store/actions/actionTypes';

describe('actionTypes', () => {
  it('showError', () => {
    const err = {
      errMassege: '',
      errType: ''
    };
    const expectResult = {
      type: err.errType,
      payload: 'ERROR!! '.concat(err.errMassege)
    };
    expect(showError(err.errType, err.errMassege)).toEqual(expectResult);
  });
});
