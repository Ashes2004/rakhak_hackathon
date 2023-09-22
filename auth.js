
  
  
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
        import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
        // Add your own Firebase config here
       
      
        const firebaseConfig = {
          apiKey: "AIzaSyAdyvZiS8toiDDAv_EeyuByXMTwbZH92OA",
          authDomain: "newtest-74b01.firebaseapp.com",
          projectId: "newtest-74b01",
          storageBucket: "newtest-74b01.appspot.com",
          messagingSenderId: "276032892899",
          appId: "1:276032892899:web:59e3fe004f8c1b4733fad6",
          measurementId: "G-BDZ6541XHM"
        };
      
      
        const app = initializeApp(firebaseConfig);
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
       
      
        const signInButton = document.getElementById("google");
         const signOutButton = document.getElementById("signOutButton");
        // const message = document.getElementById("message");
        //  const userName = document.getElementById("userName");
        //  const userEmail = document.getElementById("userEmail");
      
         
        const userSignIn = async() => {
          signInWithPopup(auth, provider)
          .then((result) => {
              const user = result.user
              console.log(user);
          }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message
          })
        }
      
        const userSignOut = async() => {
          signOut(auth).then(() => {
              alert("You have signed out successfully!");
          }).catch((error) => {})
        }
      
        onAuthStateChanged(auth, (user) => {
          if(user) {
             
              
                
                window.location.href = 'language.html';
                
                
             
            
          } else {
            alert("please sign in!!!!")
          }

          
        }
         )


       
      
        signInButton.addEventListener('click', userSignIn);
        signOutButton.addEventListener('click', userSignOut);
      
      
        const user = firebase.auth().currentUser;

        if (user) {
            // User is signed in
            const displayName = user.displayName;
            const email = user.email;
            const uid = user.uid;
        
            // Display user information on the website
            console.log(`Display Name: ${displayName}`);
            console.log(`Email: ${email}`);
            console.log(`UID: ${uid}`);
        } else {
            // No user is signed in
            console.log('No user is signed in');
        }
        
      //storage

      