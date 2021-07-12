// Unique firebase Object
  var firebaseConfig = {
    apiKey: "AIzaSyCqxDw-Dc5Idf9vvVgxuwb6Yec1sGFZ9t4",
    authDomain: "contact-form-a00f8.firebaseapp.com",
    projectId: "contact-form-a00f8",
    storageBucket: "contact-form-a00f8.appspot.com",
    messagingSenderId: "302926676831",
    appId: "1:302926676831:web:1c784c3a103b7ed3d36cea",
    measurementId: "G-KKDKYYRSRJ"
  };
  
//Initalize firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("foemData")

//Get submit form
let submitButton = document.getElementById('send')

//Create Even Listener to allow form submission
submitButton.addEventListener("click", (e) => {
    //prevent Default form submission Behavior
    e.preventDefault()

    //Get form values
    let Name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let subject = document.getElementById('message').value

    //Save form Data to firebase
    db.doc().set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message 
    }).then( () => {
        console.log("Data saved")   
    }).catch((error) => {
        console.log(error)  
    })
})
