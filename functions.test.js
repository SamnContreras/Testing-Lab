const { TestWatcher } = require('@jest/core')
const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./function.js')

test("Should return 2", () => {
    let answer = returnTwo();
    expect(answer).toEqual(2);
})

test("Should return name", () => {
    expect(greeting('James')).toBe("Hello, James.");
    expect(greeting('Jill')).toEqual("Hello, Jill.");
})

test("Should return both solutions added", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
})

test("Should return both nums mulitplied together", () => {
    expect(multiply(3, 6)).toEqual(18);
    expect(multiply(7, 4)).toEqual(28);
})

test("Should return both nums divided by eachother", () => {
    expect(divide(18, 6)).toEqual(3);
    expect(divide(28, 7)).toEqual(4);
})

test("Should return both nums subtracted by eachother", () => {
    expect(subtract(117, 7)).toEqual(110);
    expect(subtract(11, 8)).toEqual(3);
})

