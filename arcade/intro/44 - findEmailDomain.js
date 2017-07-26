function findEmailDomain(address) {
    return address.substr(address.lastIndexOf("@") + 1);
}