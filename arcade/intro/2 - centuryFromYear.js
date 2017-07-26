function centuryFromYear(year) {
    var century = parseInt(year/100, 10);
    if( year % 100 > 0){
        century = century + 1;
    }
    return century;
}
