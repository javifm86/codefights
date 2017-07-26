function longestWord(text) {
    return text.replace(/[^A-Za-z]/g, ' ').split(' ').reduce(search);

    function search(prev, curr) {
        if (curr.length > prev.length) {
            return curr;
        }
        return prev;
    }
}