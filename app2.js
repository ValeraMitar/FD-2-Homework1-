function abc(...array) {
    let result = [],
        i;
    for (i = 0; i <= array.length - 2; i++ ) {
     result[i] = array[array.length - 1](array[i])
    }
    return result;
}
