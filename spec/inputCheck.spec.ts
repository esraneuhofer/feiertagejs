import { getHolidays } from '../src/feiertage';

describe('Wrong Inputs', () => {
  it('Year should be the same as integer and string', () => {
    var result = getHolidays(2018, 'BUND');
    var result2 = getHolidays('2018', 'BUND');
    expect(result.length).toEqual(result2.length);
  });

  it('Year should be the same as integer and string', () => {
    var result = getHolidays(2017, 'BUND');
    var result2 = getHolidays('2017', 'BUND');
    expect(result.length).toEqual(result2.length);
  });
});
