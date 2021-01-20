import {
  addTranslation,
  getHolidays,
  getLanguage,
  setLanguage,
} from '../src/feiertage';

describe('set Custom Translations', () => {
  it('dont allow missing language', () => {
    setLanguage('de');
    expect(getLanguage()).toEqual('de');
    expect(() => setLanguage('it')).toThrowError(TypeError);
    expect(getLanguage()).toEqual('de');
  });

  it('setAndGetLanguage', () => {
    expect(getLanguage()).toEqual('de');

    addTranslation('en', {});
    expect(getLanguage()).toEqual('de');

    setLanguage('en');
    expect(getLanguage()).toEqual('en');
  });

  it('setEnglish', () => {
    addTranslation('en', {
      NEUJAHRSTAG: 'New Years Eve',
      HEILIGEDREIKOENIGE: 'Holy Three Kings',
    });
    setLanguage('en');
    var holidays = getHolidays(2016, 'BUND');
    var newYearsEve = holidays[0];

    expect(newYearsEve.trans()).toEqual('New Years Eve');
    expect(newYearsEve.trans('en')).toEqual('New Years Eve');
    expect(newYearsEve.trans('de')).toEqual('Neujahrstag');
  });

  it('German Fallback for missing translations', () => {
    addTranslation('en', {
      NEUJAHRSTAG: 'New Years Eve',
    });
    setLanguage('en');
    var holidays = getHolidays(2016, 'BUND');

    var threeKings = holidays[3];

    // fallback
    expect(threeKings.trans()).toEqual('Tag der Arbeit');
  });
});
