let name = '  Mallory Giles  '

console.log(name.length)
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let pw = 'abc123password098'

console.log(pw.includes('password'))

console.log(name.trim());

let isValidPassword = function(pw) {
    return pw.length > 8 && !pw.includes('password')
}

console.log(isValidPassword('abc123'));
console.log(isValidPassword('abcABC123'));
console.log(isValidPassword('abcpassword123'));
