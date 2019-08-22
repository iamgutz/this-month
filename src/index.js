import {
  numberOfSpecificDay,
  getDaysOff,
  getHolidays,
} from './utils';

export default class ThisMonth {
  constructor(args) {
    const {
      year, month, daysOff, holidays,
    } = args;
    this.year = year;
    this.month = month;
    this.daysOff = getDaysOff(daysOff);
    this.holidays = getHolidays(holidays);
  }

  weeklyDaysOff() {
    return this.daysOff.join(',');
  }

  numberOfWeeks() {
    const firstOfMonth = new Date(this.year, this.month - 1, 1);
    const lastOfMonth = new Date(this.year, this.month, 0);
    const used = firstOfMonth.getDay() + lastOfMonth.getDate();
    const weeks = Math.ceil(used / 7); // 7 days
    return weeks;
  }

  numberOfNaturalDays() {
    return new Date(this.year, this.month, 0).getDate();
  }

  numberOfDaysOff() {
    let count = 0;

    for (let i = 0; i < this.daysOff.length; i += 1) {
      count += numberOfSpecificDay({
        month: this.month,
        year: this.year,
        day: this.daysOff[i],
      });
    }

    return count;
  }

  numberOfHolidays(excludeWhenDayOff = false) {
    let count = 0;

    for (let i = 0; i < this.holidays.length; i += 1) {
      const holiday = this.holidays[i];
      const hDate = holiday.split('-');
      const hYear = parseInt(hDate[0], 10);
      const hMonth = parseInt(hDate[1], 10);

      if (hYear === this.year && hMonth === this.month) {
        const dayNumber = new Date(holiday).getUTCDay();
        let isDayOff = false;

        if (excludeWhenDayOff) {
          for (let p = 0; p < this.daysOff.length; p += 1) {
            if (dayNumber === this.daysOff[p]) {
              isDayOff = true;
            }
          }
        }

        if (!isDayOff) {
          count += 1;
        }
      }
    }

    return count;
  }

  numberOfBusinessDays() {
    const naturalDays = this.numberOfNaturalDays();
    const totalDaysOff = this.numberOfDaysOff();
    const totalHolidaysExcludingDaysOff = this.numberOfHolidays(true);

    return naturalDays - totalDaysOff - totalHolidaysExcludingDaysOff;
  }

  numberOfSundays() {
    return numberOfSpecificDay({
      month: this.month,
      year: this.year,
      day: 0,
    });
  }

  numberOfMondays() {
    return numberOfSpecificDay({
      month: this.month,
      year: this.year,
      day: 1,
    });
  }

  numberOfTuesdays() {
    return numberOfSpecificDay({
      month: this.month,
      year: this.year,
      day: 2,
    });
  }

  numberOfWednesdays() {
    return numberOfSpecificDay({
      month: this.month,
      year: this.year,
      day: 3,
    });
  }

  numberOfThursdays() {
    return numberOfSpecificDay({
      month: this.month,
      year: this.year,
      day: 4,
    });
  }

  numberOfFridays() {
    return numberOfSpecificDay({
      month: this.month,
      year: this.year,
      day: 5,
    });
  }

  numberOfSaturdays() {
    return numberOfSpecificDay({
      month: this.month,
      year: this.year,
      day: 6,
    });
  }
}
