const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('Shoul generate an unique ID of 8 caracters', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});