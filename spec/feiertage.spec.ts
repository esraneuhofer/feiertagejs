import { getHolidays, isHoliday, isSunOrHoliday } from '../src/feiertage';
import { Holiday } from '../src/holiday';

describe('Holidays 2015 in Bavaria:', () => {
  it('should be an array', () => {
    expect(getHolidays(2015, 'BY')).toHaveLength(13);
  });

  it('Maria Himmelfahrt not be a holiday', () => {
    var mariaHimemlfahrt = new Date(2015, 9, 15);
    expect(isHoliday(mariaHimemlfahrt, 'BY')).toBe(false);
  });

  it('Simons Birthday is not a holiday', () => {
    var feiertag = new Date(2015, 4, 31);
    expect(isHoliday(feiertag, 'BY')).toBe(false);
  });
  it('Maria HeiligeDreiKönige  be a holiday', () => {
    var heiligeDreiKoenige = new Date(2015, 0, 6);
    expect(isHoliday(heiligeDreiKoenige, 'BY')).toBe(true);
  });

  it('First May to be a holiday', () => {
    var heiligeDreiKoenige = new Date(2015, 0, 6);
    expect(isHoliday(heiligeDreiKoenige, 'BY')).toBe(true);
  });

  it('check is Sun Or Holiday Method', () => {
    var sunday = new Date(2015, 0, 6);
    sunday.setDate(sunday.getDate() + ((7 - sunday.getDay()) % 7));

    expect(isSunOrHoliday(sunday, 'BY')).toBe(true);

    sunday.setDate(sunday.getDate() + ((1 + 7 - sunday.getDay()) % 7));
    expect(isSunOrHoliday(sunday, 'BY')).toBe(false);
  });

  it('Christmas to be a holiday', () => {
    var christmas1 = new Date(2015, 11, 25);
    expect(isHoliday(christmas1, 'BY')).toEqual(true);

    var christmas2 = new Date(2015, 11, 26);
    expect(isHoliday(christmas2, 'BY')).toBe(true);
  });
});

describe('Holidays 2016 in BW:', () => {
  it('BW should have 12 holidays', () => {
    expect(getHolidays(2016, 'BW')).toHaveLength(12);
  });
});

describe('Holidays 2016 in NW:', () => {
  it('Heilige Drei Könige should not be available', () => {
    var result = getHolidays(2016, 'NW');
    var hkoenige = result.find(f => f.name === 'HEILIGEDREIKOENIGE');
    expect(hkoenige).toBeUndefined();
  });
  it('Tag der Arbeit should be on first may', () => {
    var result = getHolidays(2016, 'NW');
    var firstMay: Holiday | void = result.find(
      f => f.name === 'TAG_DER_ARBEIT',
    );

    if (firstMay !== undefined) {
      var realDate = new Date(2016, 4, 1);
      expect(firstMay.equals(realDate)).toBe(true);
    } else {
      throw new Error('firstMay must not be null');
    }
  });
});
