/* Add your JavaScript to this file */

window.onload = () => {
    var message = document.getElementsByClassName("message")[0];
    var input = document.getElementsByTagName("input")[0];
    var submit = document.getElementsByTagName("button")[0];

    submit.setAttribute("type","button");
    submit.addEventListener("click", () => {
        if (input.value.length != 0 && input.value.includes("@") && input.value.includes(".")) {
            message.innerHTML = `Thank you! Your email address ${input.value} has been added to our mailing list!`;
        }
        else {
            message.innerHTML = "Please enter a valid email address";
        } 
})
    
}
