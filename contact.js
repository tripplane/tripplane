function send_email(){
var x = document.getElementById("message").value;
var y = document.getElementById("name").value;
var z = document.getElementById("number").value;
window.open('mailto:Tripplane@gmail.com?subject=subject'+ "&body="+encodeURIComponent(x + "\n User name: " + y + "\n Phone number: " + z ));
}
