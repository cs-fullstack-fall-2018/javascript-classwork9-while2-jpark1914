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

/*

	KEY: This looks good, but where are your comments?!

	Also, get in the habit of using '===' to test for equality and '!==' to test for inequality.

*/