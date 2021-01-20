import { getHolidays, isSpecificHoliday } from '../src/feiertage';
import { Holiday } from '../src/holiday';

describe('Check Feiertage by Name', () => {
  it('check ChristiHimmelfahrt 2016: check wrong dates', () => {
    // source: http://www.schulferien.org/Feiertage/2016/feiertage_2016.html
    expect(
      isSpecificHoliday(new Date(2016, 9, 15), 'CHRISTIHIMMELFAHRT'),
    ).toEqual(false);
    expect(
      isSpecificHoliday(new Date(2016, 12, 24), 'CHRISTIHIMMELFAHRT'),
    ).toEqual(false);
  });
  it('check ChristiHimmelfahrt 2016: check right date', () => {
    // 5.5.2016
    var somedate = new Date(2016, 4, 5);
    expect(isSpecificHoliday(somedate, 'CHRISTIHIMMELFAHRT')).toEqual(true); // und Vatertag
  });

  it('check Erster Weihnachtsfeiertag 2016: check right date', () => {
    // 25.12.2016
    var somedate = new Date(2016, 11, 25);
    expect(isSpecificHoliday(somedate, 'ERSTERWEIHNACHTSFEIERTAG')).toEqual(
      true,
    );
  });

  it('check Erster Weihnachtsfeiertag 2016: check wrong date', () => {
    // 5.5.2016
    var somedate = new Date(2016, 11, 29);
    expect(isSpecificHoliday(somedate, 'ERSTERWEIHNACHTSFEIERTAG')).toEqual(
      false,
    );
  });
  it('every holiday should have a translation', () => {
    var somedate = new Date(2016, 5, 5);
    var holidays: Holiday[] = getHolidays(somedate.getFullYear(), 'ALL');

    for (var holiday of holidays) {
      var translation = holiday.trans();
      expect(translation).toBeTruthy();
    }
  });
});
