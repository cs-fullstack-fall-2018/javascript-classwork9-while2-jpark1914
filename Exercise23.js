function main() {

    password();
}
function password(){
    var passcode = "DunderMiflin";
    var userInput = prompt("What is the password?");
    while(userInput != passcode){
        userInput = prompt("Sorry that is incorrect. Try again");
    }
    alert("That is correct");
}

main();