function send_email(){
var x = document.getElementById("message").value;
window.open('mailto:Tripplane@gmail.com?subject=subject'+ "&body="+encodeURIComponent(x));
}