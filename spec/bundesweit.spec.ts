import { getHolidays, isHoliday } from '../src/feiertage';

describe('Holidays 2015 in Germany:', () => {
  it('should be an array', () => {
    expect(getHolidays(2015, 'BUND')).toHaveLength(9);
  });

  it('New Year should be a holiday', () => {
    var day = new Date(2015, 0, 1);
    expect(isHoliday(day, 'BUND')).toBe(true);
  });

  it('6th of january should not be a holiday', () => {
    var day = new Date(2015, 0, 6);
    expect(isHoliday(day, 'BUND')).toBe(false);
  });

  it('Simons Birthday is not a holiday', () => {
    var feiertag = new Date(2015, 4, 31);
    expect(isHoliday(feiertag, 'BUND')).toBe(false);
  });
  it('Eastermonday should be a holiday', () => {
    var ostermontag = new Date(2015, 3, 6); //6. april
    expect(isHoliday(ostermontag, 'BUND')).toBe(true);
  });

  it('First May to be a holiday', () => {
    var heiligeDreiKoenige = new Date(2015, 4, 1);
    expect(isHoliday(heiligeDreiKoenige, 'BUND')).toBe(true);
  });

  it('Christmas to be a holiday', () => {
    var christmas1 = new Date(2015, 11, 25);
    expect(isHoliday(christmas1, 'BUND')).toBe(true);

    var christmas2 = new Date(2015, 11, 26);
    expect(isHoliday(christmas2, 'BUND')).toBe(true);
  });

  it('Allerheiligen should not to be a holiday', () => {
    var day = new Date(2015, 10, 1);
    expect(isHoliday(day, 'BUND')).toBe(false);
  });

  it('in 2017 we have REFORMATIONSTAG in whole Germany', () => {
    var result = getHolidays(2017, 'BUND');
    expect(result).toHaveLength(10);

    var reftag = result.find(r => r.name === 'REFORMATIONSTAG');
    expect(reftag).toBeDefined();
  });
  it('in 2016 we do not have REFORMATIONSTAG in whole Germany', () => {
    var result = getHolidays(2016, 'BUND');
    expect(result).toHaveLength(9);
    var ref = result.find(r => r.name === 'REFORMATIONSTAG');
    expect(ref).toBeUndefined();
  });
});
