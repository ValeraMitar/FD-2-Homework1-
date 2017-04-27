function palindromic(string) {
    var anotherString = '',
      newString = string.toLowerCase().split(' ').join('');
    for (var i = newString.length - 1; i >= 0; i--) {
        anotherString += newString[i];
    }
   return (newString === anotherString);
}