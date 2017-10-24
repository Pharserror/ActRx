import ActionCreator from 'ActN';
import ActX from '../src/plug';
import SETTINGS from '../src/settings';

describe('ActX plugin', () => {
  let subject;

  beforeEach(() => {
    subject = new ActionCreator(['my-action'], { plug: ActX })
  });

  test('it generates the right actions', () => {
    SETTINGS.DEFAULT_TYPES.forEach(type => {
      expect(subject['my-action'][type]().type).toEqual(`my-action/${type}`);
    });
  });
});
