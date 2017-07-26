function arrayReplace(i, e, s) {
    return i.map(item => item === e ? s : item);
}