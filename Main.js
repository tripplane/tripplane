var connected;
var connected1;

function submit(){
    const xhttp = new XMLHttpRequest(); //create new object of Ajax
    xhttp.onload = function() {
    console.log(this.responseText);  //get the respone from the server
    const respone = JSON.parse(this.responseText);
    console.log(respone);
    var x = document.getElementById("usr").value; //get elements from user
    var y = document.getElementById("psw").value;
    console.log(x,y)
    for(let i = 0;i<respone.length;i++){   //verifying the inputs agaunst the server respone
      if(respone[i].user == x && respone[i].password==y){
         document.getElementById("connected").innerHTML = "Welcome: " + x;
         document.getElementById("connected_1").innerHTML = "Now you can get information and leave a comments";
         document.getElementById("1").style.visibility="hidden";
         document.getElementById("2").style.visibility="hidden";
         document.getElementById("3").style.visibility="hidden";
         document.getElementById("submit").innerHTML = "<p>You are connected</p>"
         connected=x;
         connected1=true;
      }
    }
    if(connected1!=true){ //if the arguments dont match there will display message
        document.getElementById("submit").innerHTML = "<p>Wrong password or username try again</p>"
    }
    }
    xhttp.open("GET", "http://localhost:3000/login", true);  //Ajax GET request send
    xhttp.send(); //send
  }


