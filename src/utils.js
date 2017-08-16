export const daysMap = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

export function numberOfSpecificDay(options) {
  const month = options.month - 1;
  let daysCounter = 0;
  let day = 1;
  let date = new Date(options.year, month, day); // day 1

  while (date.getMonth() === month) {
    if (date.getDay() === options.day) { // 0 = sunday, 1 = monday, 2 = tuesday, etc
      daysCounter += 1;
    }
    day += 1;
    date = new Date(options.year, month, day);
  }
  return daysCounter;
}

export function getDaysOff(daysOff = []) {
  if (daysOff.length < 1) {
    return [0, 6]; // sunday and saturday
  }

  const definedDaysOff = [];
  for (let i = 0; i < daysOff.length; i += 1) {
    const dayName = daysOff[i].toLowerCase();

    const dayNumber = daysMap[dayName];

    if (!dayNumber) throw new Error('Invalid day name.');

    definedDaysOff.push(dayNumber);
  }

  return definedDaysOff;
}

export function isValidHolidayFormat(dateString) {
  const regEx = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateString.match(regEx)) return false; // Invalid format

  const d = new Date(dateString);

  if (!d.getTime() > 0) {
    // Invalid Date (or this could be epoch)
    // d.getTime() === NaN
    // the date object returns Invalid Date
    return false;
  }

  return d.toISOString().slice(0, 10) === dateString;
}

export function getHolidays(holidays = []) {
  const validatedDates = [];
  for (let i = 0; i < holidays.length; i += 1) {
    const isValid = isValidHolidayFormat(holidays[i]);

    if (!isValid) {
      throw new Error(`${holidays[i]} is not in the correct format`);
    }

    validatedDates[i] = holidays[i];
  }

  return validatedDates;
}
