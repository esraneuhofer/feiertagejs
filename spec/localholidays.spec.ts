
import { getHolidays,isHoliday } from '../src/feiertage';

describe('localholiday', () => {
  it('find some days from AUGSBURG', () => {
    var augsburgsHolidays = getHolidays(2020, 'AUGSBURG');
    var friedensfest = augsburgsHolidays.find(holiday => holiday.name === 'AUGSBURGER_FRIEDENSFEST');
    expect(friedensfest).not.toBeNull();
  });
  it('find Friedensfest by Date', () => {
    var date = new Date('2020-08-08');
    var friedensfest = isHoliday(date, 'AUGSBURG');
    expect(friedensfest).toEqual(true);
  });
});
