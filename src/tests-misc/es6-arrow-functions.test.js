describe('ES6 arrow functions', () => {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

    it('Should understand that a function with no parameters requires parentheses', () => {
        const foo = () => { return 'bar' };
        const actual = foo();
        const expected = 'bar';

        expect(actual).toEqual(expected);
    });

    it('Should understand that a function with multiple parameters requires parentheses', () => {
        const foo = (a, b) => { return a + b };
        const actual = foo(1, 1);
        const expected = 2;

        expect(actual).toEqual(expected);
    });

    it('Should understand that a function with one parameter does not require parameters', () => {
        const foo = name => { return 'Hi ' + name };
        const actual = foo('Kalle');
        const expected = 'Hi Kalle';

        expect(actual).toEqual(expected);
    });

    it('Should understand that if a function has no curly braces then return statement is used automaticly', () => {
        const foo = num => num + 1;
        const actual = foo(2);
        const expected = 3;

        expect(actual).toEqual(expected);
    });

    it('Should understand that arrow functions are short and anonymous', () => {
        const names = ['Adam', 'Bertil', 'Ceasar'];
        const actual = names.map(name => name.length);
        const expected = [4, 6, 6];

        expect(actual).toEqual(expected);
    });

    describe('The this pointer', () => {

        it('Should first understand this pointer problem in the past (using var here, just because ...) -- Sample A', () => {
            var doSomeThing = function (cb) {
                cb();
            };

            var someObj = {
                name: 'Adam',
                getName: function (cb) {
                    var that = this;
                    doSomeThing(function () {
                        // cb(this.name);                                    -- Wont work since this points elsewhere
                        cb(that.name);                                   //  -- Will work
                    });
                }
            };

            var actual;
            var expected = 'Adam';

            someObj.getName(function (name) {
                actual = name;
            });

            expect(actual).toEqual(expected);
        });

        it('Should first understand this pointer problem in the past (using var here, just because ...) -- Sample B', () => {
            var doSomeThing = function (cb) {
                cb();
            };

            var someObj = {
                name: 'Adam',
                getName: function (cb) {
                    doSomeThing.bind(this)(cb.bind(this, this.name));       // -- Will work but messy
                }
            };

            var actual;
            var expected = 'Adam';

            someObj.getName(function (name) {
                actual = name;
            });

            expect(actual).toEqual(expected);
        });

        it('Should then understand that an arrow function does not create its own this context, so this has its original meaning from the enclosing context', () => {

            function doSomeThing(cb) {
                cb();
            };

            const someObj = {
                name: 'Adam',
                getName: function (cb) {
                    doSomeThing(() => { 
                        cb(this.name);                                      // -- Will work since we DO NOT loose this context, because of arrow function
                    });
                }
            };

            let actual;
            const expected = 'Adam';

            // This works as well (sending in a regular function as callback)
            // someObj.getName(function (name) {
            //     actual = name;
            // });

            someObj.getName(name => {
                actual = name;
            });

            expect(actual).toEqual(expected);

        });

    });

});
