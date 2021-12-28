
function myFunction() {
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById("mySearch");
filter = input.value.toUpperCase();
ul = document.getElementById("myMenu");
li = ul.getElementsByTagName("li");


// If we've got more than 1 char in <input>, show it, otherwise, hide
const inputDisplay = input.value.length >=1  ? 'block' : 'none';
ul.style.display = inputDisplay;

for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
}
}
