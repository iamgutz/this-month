# ThisMonth
How many natural days does April has?
How many business days does February has?
How many Holidays are there in December?
How many Weeks does June has?
How many Sundays in September?

##### ThisMonth can help you with this details!

ThisMonth is an small utility class that provides useful methods to get calculations and details of an specific month.

## Installation
`npm install this-month --save`

## Usage
```
const ThisMonth = require('this-month');

// ES6

import ThisMonth from 'this-month';
```
```
const february = new ThisMonth({
    year: 2017,
    month: 2
})

const totalDays = february.numberOfNaturalDays(); // 28
const totalBusinessDays = february.numberOfBusinessDays(); // 19 (Using default days off - Sat, Sun)
```

## Initial settings
|Option  |Type |Description                |Required|
|--------|-----|---------------------------|--------|
|year    |int  |Year of the month          |yes     |
|month   |int  |Month of the year          |yes     |
|daysOff |array|Names of weekly days off   |No      |
|holidays|array|Holiday dates in the year  |No      |

#### Example

```
const december = ThisMonth({
    year: 2017,
    month: 12,
    daysOff: ['Monday'], // working days Tuesday - Sunday,
    holidays: ['2017-12-25', '2017-12-31'] // you can also list all the holiday dates of the year
})
december.numberOfNaturalDays(); // 31
december.numberOfBusinessDays(); // 26 (4 Mondays are off and 2 holidays, but the 25th is Monday so it's already off day)
```

## Methods
|Method              |Description                         |
|--------------------|------------------------------------|
|weeklyDaysOff       |Returns string of day numbers.      |
|numberOfWeeks       |Returns number of weeks in the month|
|numberOfNaturalDays |Returns number of days in the month |
|numberOfDaysOff     |Returns number of days in the month |
|numberOfHolidays    |Returns number of days in the month |
|numberOfBusinessDays|Returns number of days in the month |
|numberOfSundays     |Returns number of days in the month |
|numberOfMondays     |Returns number of days in the month |
|numberOfTuesdays    |Returns number of days in the month |
|numberOfWednesdays  |Returns number of days in the month |
|numberOfThursdays   |Returns number of days in the month |
|numberOfFridays     |Returns number of days in the month |
|numberOfSaturdays   |Returns number of days in the month |
