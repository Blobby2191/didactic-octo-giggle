var room = document.getElementById("roomname");
const firebaseConfig = {
    apiKey: "AIzaSyAf0LBOV9g5I3lBJZZC2KiSI8TjjRoi5l8",
    authDomain: "class-test-511cd.firebaseapp.com",
    databaseURL: "https://class-test-511cd-default-rtdb.firebaseio.com",
    projectId: "class-test-511cd",
    storageBucket: "class-test-511cd.appspot.com",
    messagingSenderId: "482624738143",
    appId: "1:482624738143:web:bd296eee1905f5622b5cea",
    measurementId: "G-Y38PCDWEX1"
  };

 function AddRoom() {
   localStorage.setItem("room_name", room); 
   window.location.replace("page.html");
 } 