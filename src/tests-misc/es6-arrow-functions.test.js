describe('ES6 arrow functions', () => {

    it('A function with no parameters requires parentheses', () => {
        const foo = () => { return 'bar' };
        const expected = 'bar';
        const actual = foo();

        expect(expected).toEqual(actual);
    });

    it('A function with multiple parameters requires parentheses', () => {
        const foo = (a, b) => { return a + b };
        const expected = 2;
        const actual = foo(1, 1);

        expect(expected).toEqual(actual);
    });

    it('A function with one parameter does not require parameters', () => {
        const foo = name => { return 'Hi ' + name };
        const expected = 'Hi Kalle';
        const actual = foo('Kalle');

        expect(expected).toEqual(actual);
    });

    it('If a function has no curly braces then return statement is used automaticly', () => {
        const foo = num => num + 1;
        const expected = 3;
        const actual = foo(2);

        expect(expected).toEqual(actual);
    });

    it('Arrow functions are short and anonymous', () => {
        const names = ['Adam', 'Bertil', 'Ceasar'];
        const expected = [4, 6, 6];
        const actual = names.map(name => name.length);

        expect(expected).toEqual(actual);
    });

    describe('The this pointer', () => {

        it('Should first understand this pointer problem in the past (using var here, just because ...) -- Sample A', () => {
            var someObj = {
                name: 'Adam',
                getName: function () {
                    return this.name; // This works
                }
            };

            var expected = 'Adam';
            var actual = someObj.getName();

            expect(expected).toEqual(actual);
        });

        it('Should first understand this pointer problem in the past (using var here, just because ...) -- Sample B', () => {
            var someObj = {
                name: 'Adam',
                getName: function () {
                    var that = this;
                    var someFunc = function () {
                        // return this.name; -- Wont work since this points elsewhere
                        return that.name;
                    };

                    return someFunc();
                }
            };

            var expected = 'Adam';
            var actual = someObj.getName();

            expect(expected).toEqual(actual);
        });

        it('Should first understand this pointer problem in the past (using var here, just because ...) -- Sample C', () => {
            var someObj = {
                name: 'Adam',
                getName: function () {
                    var someFunc = function () {
                        return this.name;
                    };

                    return someFunc.bind(this)(); // This also works
                }
            };

            var expected = 'Adam';
            var actual = someObj.getName();

            expect(expected).toEqual(actual);
        });

        it('Should then understand that an arrow function does not create its own this context, so this has its original meaning from the enclosing context ', () => {
            const someObj = {
                name: 'Adam',
                getName: () => {
                    //return this.name; -- Wont work since this points elsewhere (compare with Sample A)
                    return someObj.name;
                }
            };

            const expected = 'Adam';
            const actual = someObj.getName();

            expect(expected).toEqual(actual);
        });

        // However best practices seems to say that arrow functions should not be used like in the example above
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Arrow_functions_used_as_methods

    });

});
