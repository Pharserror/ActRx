import ActionCreator from 'ActR';
import ActRx from '../src/plug';
import SETTINGS from '../src/settings';

describe('ActRx plugin', () => {
  let subject;

  beforeEach(() => {
    subject = new ActionCreator(['my-action'], { plug: ActRx })
  });

  test('it generates the right actions', () => {
    SETTINGS.DEFAULT_TYPES.forEach(type => {
      expect(subject['my-action'][type]().type).toEqual(`my-action/${type}`);
    });
  });
});
