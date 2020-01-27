function Count() {
    let numofspaces = 0;
    let string = document.getElementById("input").value //reads the string entered in the input field
    let charslist = string.split(""); //splits the given string into array of characters
    console.log(charslist);
    let space_exists = charslist.includes(" ");
    console.log(space_exists);
    if (space_exists == false) { //checks if space exists in the given string
        let numofchars = charslist.length;
        let numofwords = 1;
        if (charslist == []) {
            numofchars = 0;
            numofwords = 0;
        }
        document.getElementById("Words-Count").innerHTML = numofwords;
        document.getElementById("Chars-Count").innerHTML = numofchars;
    } else { //if space exists
        for (var i = charslist.length - 1; i >= 0; i--) { //for counting the num of spaces
            if (charslist[i] == " ") {
                numofspaces = numofspaces + 1;
                console.log(numofspaces);
            }
        }
        numofchars = charslist.length - numofspaces;
        numofwords = numofspaces + 1;
        document.getElementById("Words-Count").innerHTML = numofwords;
        document.getElementById("Chars-Count").innerHTML = numofchars;
    }

}