//Named export - typically used when exporting multiple things.
//Default export - typically used when trying to export 1 big thing

const add = (a, b) => a + b

const name = 'Mallory Nicole'

const square = (x) => x * x

export {add, name, square as default}