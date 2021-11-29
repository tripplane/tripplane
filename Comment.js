function post(){
    var x = document.getElementById("comment").value;
    var y = document.getElementById("name").value;
    if(x!="" && y!=""){
    var d = new Date();
    document.getElementById("post").className="form-control";
    document.getElementById("post").innerHTML+= "<b>התגובה של </b>" +  y + ": " +x + "<br>" + d.toDateString();;
    document.getElementById("post").innerHTML+= "<br>";
    }
    return (0)
}

function post_test1(){   //test function except to get 0
    var x = "ofri"
    var y = "yovel"
    if(x!="" && y!=""){
    var d = new Date();
    return 0;
    }
    return 1;
}
module.exports = post_test1;