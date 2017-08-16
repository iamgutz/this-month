import { expect } from 'chai';
import ThisMonth from './index';

const HOLIDAYS = [
  '2017-12-30', // New Year’s Day (Observed) SATURDAY
  '2017-02-20', // President’s Day
  '2017-05-29', // Memorial Day
  '2017-07-04', // Independence Day
  '2017-09-04', // Labor Day
  '2017-11-23', // Thanksgiving
  '2017-11-24', // Day After Thanksgiving
  '2017-12-25', // Christmas
  '2017-12-26', // Winter Holiday
];

describe('Class ThisMonth', () => {
  it('Should be a function', () => {
    expect(typeof ThisMonth).to.eql('function');
  });
});

describe('weeklyDaysOff()', () => {
  it('Should return 0,6', () => {
    const thisMonth = new ThisMonth({
      year: 2015,
      month: 1,
    });
    const daysOff = thisMonth.weeklyDaysOff();

    expect(daysOff).to.eql('0,6');
  });

  it('Should return 1,3,5', () => {
    const thisMonth = new ThisMonth({
      year: 2015,
      month: 1,
      daysOff: ['monday', 'wednesday', 'friday'],
    });
    const daysOff = thisMonth.weeklyDaysOff();

    expect(daysOff).to.eql('1,3,5');
  });
});

describe('numberOfNaturalDays()', () => {
  it('Should return 28 natural days on Feb of 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 2,
    });

    const naturalDays = thisMonth.numberOfNaturalDays();

    expect(naturalDays).to.eql(28);
  });

  it('Should return 29 natural days on Feb of 2016', () => {
    const thisMonth = new ThisMonth({
      year: 2016,
      month: 2,
    });

    const naturalDays = thisMonth.numberOfNaturalDays();

    expect(naturalDays).to.eql(29);
  });
});

describe('numberOfWeeks()', () => {
  it('Should return 5 weeks on Mar, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 3,
    });

    const totalWeeks = thisMonth.numberOfWeeks();

    expect(totalWeeks).to.eql(5);
  });

  it('Should return 6 weeks on Jul, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 7,
    });

    const totalWeeks = thisMonth.numberOfWeeks();

    expect(totalWeeks).to.eql(6);
  });
});

describe('numberOfDaysOff()', () => {
  it('Should return 8 days off on Aug, 2017, (Sat, Sun)', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 8,
    });

    const totalDaysOff = thisMonth.numberOfDaysOff();

    expect(totalDaysOff).to.eql(8);
  });

  it('Should return 9 days off on Sep, 2017, (Sat, Sun)', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 9,
    });

    const totalDaysOff = thisMonth.numberOfDaysOff();

    expect(totalDaysOff).to.eql(9);
  });

  it('Should return 10 days off on Dec, 2017, (Sat, Sun)', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 12,
    });

    const totalDaysOff = thisMonth.numberOfDaysOff();

    expect(totalDaysOff).to.eql(10);
  });

  it('Should return 13 days off on Nov, 2017, (Mon, Wed, Fri)', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 12,
      daysOff: ['monday', 'wednesday', 'friday'],
    });

    const totalDaysOff = thisMonth.numberOfDaysOff();

    expect(totalDaysOff).to.eql(13);
  });
});

describe('numberOfHolidays()', () => {
  it('Should return 3 holidays on Dec, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 12,
      holidays: HOLIDAYS,
    });

    const totalHoliDays = thisMonth.numberOfHolidays();

    expect(totalHoliDays).to.eql(3);
  });

  it('Should return 2 holidays on Dec, 2017 (exc 1 holiday Saturday)', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 12,
      holidays: HOLIDAYS,
    });

    const totalHoliDays = thisMonth.numberOfHolidays(true);

    expect(totalHoliDays).to.eql(2);
  });

  it('Should return 2 holidays on Nov, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 11,
      holidays: HOLIDAYS,
    });

    const totalHoliDays = thisMonth.numberOfHolidays();

    expect(totalHoliDays).to.eql(2);
  });

  it('Should return 1 holiday on Sep, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 9,
      holidays: HOLIDAYS,
    });

    const totalHoliDays = thisMonth.numberOfHolidays();

    expect(totalHoliDays).to.eql(1);
  });
});

describe('numberOfBusinessDays()', () => {
  it('Should return 19 business days on Dec, 2017 (exc 1 holiday Saturday)', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 12,
      holidays: HOLIDAYS,
    });

    const totalBusinessDays = thisMonth.numberOfBusinessDays();

    expect(totalBusinessDays).to.eql(19);
  });

  it('Should return 22 business days on Oct, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 10,
      holidays: HOLIDAYS,
    });

    const totalBusinessDays = thisMonth.numberOfBusinessDays();

    expect(totalBusinessDays).to.eql(22);
  });

  it('Should return 19 business days on Feb, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 2,
      holidays: HOLIDAYS,
    });

    const totalBusinessDays = thisMonth.numberOfBusinessDays();

    expect(totalBusinessDays).to.eql(19);
  });
});

describe('numberOfSundays()', () => {
  it('Should return 4 sundays on Aug, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 8,
    });

    const totalSundays = thisMonth.numberOfSundays();

    expect(totalSundays).to.eql(4);
  });

  it('Should return 5 sundays on Oct, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 10,
    });

    const totalSundays = thisMonth.numberOfSundays();

    expect(totalSundays).to.eql(5);
  });
});

describe('numberOfSaturdays()', () => {
  it('Should return 4 saturdays on Oct, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 10,
    });

    const totalSaturdays = thisMonth.numberOfSaturdays();

    expect(totalSaturdays).to.eql(4);
  });

  it('Should return 5 Saturdays on Dec, 2017', () => {
    const thisMonth = new ThisMonth({
      year: 2017,
      month: 12,
    });

    const totalSaturdays = thisMonth.numberOfSaturdays();

    expect(totalSaturdays).to.eql(5);
  });
});
