function variableName(name) {
    return /(^(?![0-9]))(^[a-zA-Z0-9\_]+$)/.test(name);
}