const firebaseConfig = {
    apiKey: "AIzaSyAdyvZiS8toiDDAv_EeyuByXMTwbZH92OA",
    authDomain: "newtest-74b01.firebaseapp.com",
    projectId: "newtest-74b01",
    storageBucket: "newtest-74b01.appspot.com",
    messagingSenderId: "276032892899",
    appId: "1:276032892899:web:59e3fe004f8c1b4733fad6",
    measurementId: "G-BDZ6541XHM"
  };

firebase.initializeApp(firebaseConfig);
var fileitem;


const btn = document.querySelector(".btn");
var database = firebase.database();



function getFile(event) {
    fileitem = event.target.files[0];
    uploadImage(); // Call uploadImage function here
}


 
  
function uploadImage() {
    if (fileitem) {
        let storageRef = firebase.storage().ref("image/" + fileitem.name);
        let uploadTask = storageRef.put(fileitem);
        uploadTask.on("state_changed", (snapshot) => {
            console.log(snapshot);
        }, (error) => {
            console.log("error is: ", error);
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                console.log("URL", url);
                alert("image uploaded");
              
                
                database.ref('images').push({
                    url: url,
                    name:user.displayName,
                    email:user.email
                });

                
            });
        });
    } 
     else {
        console.log("No file selected.");
    }
}

document.getElementsByClassName('btn').addEventListener('click', function () {
        document.getElementById('file').click();
    });

btn.addEventListener('click', getFile);
 // Attach getFi



        // Get a reference to the image element
        