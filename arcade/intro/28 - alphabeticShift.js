function alphabeticShift(s) {
    return [...s].map(c => c === 'z' ? 'a' : String.fromCharCode(c.charCodeAt(0) + 1)).join('');
}