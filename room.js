 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCdXW96rG9mvGbGhBTvxddGm-_2V4Pbpac",
    authDomain: "pro-a6a61.firebaseapp.com",
    databaseURL: "https://pro-a6a61-default-rtdb.firebaseio.com",
    projectId: "pro-a6a61",
    storageBucket: "pro-a6a61.appspot.com",
    messagingSenderId: "683553306464",
    appId: "1:683553306464:web:a75704971103effef75005"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";

function AddRoom(){
    var roomname=document.getElementById("room_name").value;
    firebase.database().ref("/").child(roomname).update({
          purpose:"adding roomname"
    });
    localStorage.setItem("room_name", roomname);
    window.location="room_index.html";
    
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("roomname- "+Room_names);
var row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(roomname){
    console.log(roomname);
    localStorage.setItem("room_name", roomname);
    window.location="room_index.html";
}