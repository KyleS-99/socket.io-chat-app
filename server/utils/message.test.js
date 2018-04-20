const expect = require('expect');

let { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let res = generateMessage('Kyle', 'hi');
        expect(res.from).toBe('Kyle');
        expect(res.text).toBe('hi');
        expect(res.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let res = generateLocationMessage('Admin', 15, 19);
        expect(res.createdAt).toBeA('number');
        expect(res.from).toBe('Admin');
        expect(res.url).toBe('https://www.google.com/maps?q=15,19');
    });
});