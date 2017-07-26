function addBorder(picture) {

    var initEnd = '**';
    var lon = picture[0].length;
    while (lon--) {
        initEnd += '*';
    }

    for (var i = 0; i < picture.length; i++) {
        picture[i] = '*' + picture[i] + '*';
    }

    picture.splice(0, 0, initEnd);
    picture.splice(picture.length, 0, initEnd);
    return picture;
}