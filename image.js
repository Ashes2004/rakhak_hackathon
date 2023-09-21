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
const img = document.getElementById("img");


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
                  
                    document.addEventListener('DOMContentLoaded', function () {
                        // Your JavaScript code here
                        const img = document.getElementById('img'); // Define the img variable
                       
                            let maindiv = document.createElement('div');
                            maindiv.classList.add('img1'); // Adding the 'img1' class
                          
                            let markups = `
                              <img src="${url}" alt="uploaded img">`;
                          
                            maindiv.innerHTML = markups;
                            img.appendChild(maindiv); // Append the image to the 'img' element
                          }
                    )
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

