import genericAction from '../../actions/genericAction';

describe('genericAction', () => {
  it('returns an object with a type and payload key value pair', () => {
    const type = 'Yo';
    const payload = 'Sup';

    expect(genericAction(type, payload)).toEqual({
      type,
      payload,
    });
  });
});
