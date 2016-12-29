import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it("should be another passing test", () => {
  var expected = true;
  var actual = 1 + 1 == 2;

  expect(expected).toEqual(actual);
});

it("should work", () => {

  var x = 1;
  var y = 1;

  var obj01 = {
    name: "Henke"
  };

  var obj02 = {
    name: "Henke"
  };

  expect(x).toBe(y);
  expect(x).toEqual(y);

  expect(obj01).toEqual(obj02);     // has same properties and values
  expect(obj01).not.toBe(obj02);    // is not the same reference
  expect(obj01).toBe(obj01);        // is same reference
});

describe("describe block", () => {

  it("should succeed", () => {

    expect(1).toEqual(1);

  });

});
