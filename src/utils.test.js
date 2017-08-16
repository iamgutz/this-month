import { expect } from 'chai';
import { getDaysOff, getHolidays } from './utils';

describe('utils', () => {
  describe('getDaysOff()', () => {
    it('Should be a function', () => {
      expect(typeof getDaysOff).to.eql('function');
    });

    it('Should return an array of numbers', () => {
      const daysOff = getDaysOff(['monday', 'tuesday']);

      expect(daysOff).to.be.an('array').to.have.members([1, 2]);
    });
  });

  describe('getHolidays()', () => {
    it('Should be a function', () => {
      expect(typeof getHolidays).to.eql('function');
    });

    it('Should throw Error', () => {
      const dates = ['2017-08-09', 'Not a date'];

      expect(() => getHolidays(dates)).to.throw(Error);
    });

    it('Should return an array equal to arg array', () => {
      const dates = ['2017-08-09', '2017-12-25'];
      const holidays = getHolidays(dates);

      expect(holidays).to.an('array').eql(dates);
    });
  });
});
