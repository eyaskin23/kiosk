// Assuming firebaseConfig is already set with your app's config
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();

// Add a new document with a generated ID
db.collection("users").add({
    name: "Tokyo",
    country: "Japan"
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
