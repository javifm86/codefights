function evenDigitsOnly(n) {
    return String(n).split('').filter((e) => ~~e % 2 === 0).length === String(n).length;
}