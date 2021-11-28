function post(){
    var x = document.getElementById("comment").value;
    var y = document.getElementById("name").value;
    if(x!="" && y!=""){
    var d = new Date();
    document.getElementById("post").className="form-control";
    document.getElementById("post").innerHTML+= "<b>התגובה של </b>" +  y + ": " +x + "<br>" + d.toDateString();;
    document.getElementById("post").innerHTML+= "<br>";
    }
}