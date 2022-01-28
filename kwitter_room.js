
//ADD YOUR FIREBACE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDp9fRIOFEQDC5yURNEj-c0vmvstP9npf8",
      authDomain: "class93-2ec4a.firebaseapp.com",
      databaseURL: "https://class93-2ec4a-default-rtdb.firebaseio.com",
      projectId: "class93-2ec4a",
      storageBucket: "class93-2ec4a.appspot.com",
      messagingSenderId: "986165209512",
      appId: "1:986165209512:web:d453f086c8f572fd2a959d"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
