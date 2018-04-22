const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        let notString = 1;
        expect(isRealString(notString)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        let spaceString = '       ';
        expect(isRealString(spaceString)).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        let goodString = 'This will work';
        expect(isRealString(goodString)).toBe(true);
    });
});