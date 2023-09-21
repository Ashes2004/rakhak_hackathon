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
                alert("image uploaded")
                if (url !== "") {
                    document.addEventListener("DOMContentLoaded", function () {
                        // Your code here
                      
                        // For example:
                        let img = document.getElementById("uploadedImage");
                        if (img) {
                          img.src = url;
                          img.style.display = "block";
                        }
                      });
                      
                }
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

