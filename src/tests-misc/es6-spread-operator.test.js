describe('The spread operator', () => {

    it('Should understand what it does', () => {
        const arr = [
            { name: 'Adam' },
            { name: 'Bertil' }
        ]

        const obj = { name: 'Ceasar' };

        const actual = [...arr, obj];
        const expected = [{ name: 'Adam' }, { name: 'Bertil' }, { name: 'Ceasar' }];

        expect(actual).toEqual(expected);
    });


});
