describe('The Object.assign() method', () => {

    it('Should first get some understanding -- A', () => { 
        const obj01 = { name: 'Adam' };
        const obj02 = { name: 'Adam' };
        const expected = obj01 === obj02;

        expect(expected).toEqual(false);
    });

    it('Should first get some understanding -- B', () => { 
        const obj01 = { name: 'Adam' };
        const obj02 = obj01;
        const expected = obj01 === obj02;

        expect(expected).toEqual(true);
    });

    it('Should work with babel and this test environment', () => {
        const obj = { a: 1 };
        const copy = Object.assign({}, obj);

        expect(obj).toEqual(copy);
        expect(obj).not.toBe(copy);
    });

    it('Should be able to change property on the cloned object', () => {
        const obj = { name: 'Adam' };
        const copy = Object.assign({}, obj, { name: 'Bertil' });
        const expected = { name: 'Bertil' };

        expect(obj).not.toEqual(copy);
        expect(copy).toEqual(expected);
    });

});
