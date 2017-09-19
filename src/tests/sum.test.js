const sum = require('../scripts/sum');

describe('addition', () => {
  describe('positive numbers', () => {
    it('should add up', () => {
      expect(1 + 3).toBe(3);
    });
  });
});