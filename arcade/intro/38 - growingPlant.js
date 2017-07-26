function growingPlant(upSpeed, downSpeed, desiredHeight) {
    if (upSpeed > desiredHeight) return 1;
    return ~~(desiredHeight / (upSpeed - downSpeed));
}