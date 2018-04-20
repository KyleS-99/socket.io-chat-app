const expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let res = generateMessage('Kyle', 'hi');
        expect(res.from).toBe('Kyle');
        expect(res.text).toBe('hi');
        expect(res.createdAt).toBeA('number');
    });
});