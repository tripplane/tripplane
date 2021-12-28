// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3SCYZJcOXIFbehwLKeHs3ik12Ei3ydXI",
  authDomain: "tripplan-f57b9.firebaseapp.com",
  projectId: "tripplan-f57b9",
  storageBucket: "tripplan-f57b9.appspot.com",
  messagingSenderId: "831519765604",
  appId: "1:831519765604:web:5ce5b8b493ff215c239b71",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  const auth =  firebase.auth();
  var firebaseRef = firebase.database().ref("dan");



function sign_up(){
    var x =document.getElementById("usrr").value;
    var y =document.getElementById("psww").value;
    const promise = auth.createUserWithEmailAndPassword(x,y);
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
}


function  signIn(){
    var x = document.getElementById("usr").value;
    var y  = document.getElementById("psw").value;
    const promise = auth.signInWithEmailAndPassword(x,y).then(function(user) {
      localStorage.setItem("user",user.user.email);
      window.location = 'index.html';
    })
    promise.catch(e=>alert(e.message));
    //window.location = 'index.html';
  }


  function user(){
      supervisorread();
      if(localStorage.getItem("user")!=null){
        document.getElementById("logout").className = "nav-link active";
        var name = localStorage.getItem("user");
        document.getElementById("update").innerHTML= "אתה מחובר כ: " + name;
        if(localStorage.getItem("user")=="admin@gmail.com"){
          document.getElementById("admin").style.visibility = "visible";
        }
        if(localStorage.getItem("user")=="super@gmail.com"){
          document.getElementById("super").style.visibility = "visible";
        }
      }
  }


  function handicapped(){
    if(localStorage.getItem("user")=="handicapped@gmail.com"){
        window.location = 'handicap.html';
    }
  }

  function logout(){
   localStorage.clear();
   document.getElementById("logout").className = "nav-link";
}



function dan(name){
  if(localStorage.getItem("user")=="super@gmail.com"){
     document.getElementById("name").value = "פקח רשות הטבע והגנים";
  }
  var starCountRef = firebase.database().ref(name);
  starCountRef.on('value',function(snapshot){
    snapshot.forEach(function(userSnapshot){
      console.log(userSnapshot.val());
       document.getElementById("post").innerHTML += (userSnapshot.val().username + ": " + userSnapshot.val().post + "<br>");
    })
  });
}

function writeUserData(name) {
    if(document.getElementById("comment").value == "" && document.getElementById("name").value==""){
      alert("you have to fill the box");
      return;
    }
    var x = document.getElementById("name").value;
    var y = document.getElementById("comment").value;
    firebase.database().ref(name  + x ).set({
      username: x,
      post: y,
    });
    location.reload();
  }


  function writesuper(name) {
    if(document.getElementById("comment").value == "" && document.getElementById("name").value==""){
      alert("you have to fill the box");
      return;
    }
    var x = document.getElementById("name").value;
    var y = document.getElementById("comment").value;
    firebase.database().ref(name  + x ).set({
      username: x,
      post: y,
    });
    window.location="index.html";
  }
  

  function supervisorread(){
    var starCountRef = firebase.database().ref('Super/');
    starCountRef.on('value',function(snapshot){
      snapshot.forEach(function(userSnapshot){
        console.log(userSnapshot.val());
         document.getElementById("supervisor").innerHTML += ( "מבזקים : " + userSnapshot.val().post + "<br>");
      })
    });
  }
  
  function remove() {
    firebase.database().ref('Super/').remove();
    window.location="index.html";
  }