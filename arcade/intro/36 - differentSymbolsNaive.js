function differentSymbolsNaive(s) {
    return [...s].filter((e, i, a) => a.indexOf(e) === i).length;
}