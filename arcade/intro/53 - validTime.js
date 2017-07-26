function validTime(time) {
    var h = Number(time.substr(0, 2));
    var m = Number(time.substr(3));
    return (h >= 0 && h < 24) && (m >= 0 && m < 60);
}