describe('The Object.assign() method', () => {

    it('Should work with babel and this test environment', () => {
        var obj = { a: 1 };
        var copy = Object.assign({}, obj);

        expect(obj).toEqual(copy);
        expect(obj).not.toBe(copy);
    });

    it('Should be able to change property on the cloned object', () => {
        var obj = { name: 'Adam' };
        var copy = Object.assign({}, obj, { name: 'Bertil' });
        var expected = { name: 'Bertil' };

        expect(obj).not.toEqual(copy);
        expect(copy).toEqual(expected);
    });

});
