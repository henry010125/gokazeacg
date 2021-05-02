// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAADyM0JY4YyrfkU6vXLvqJHeghsXQLbaU",
    authDomain: "plated-hash-310318.firebaseapp.com",
    projectId: "plated-hash-310318",
    storageBucket: "plated-hash-310318.appspot.com",
    messagingSenderId: "74697355571",
    appId: "1:74697355571:web:935838d4f3cf8b7e69ce46",
    measurementId: "G-W0BXBKDLHZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // 使用者已登入，可以取得資料
        var email = user.email;
        var uid = user.uid;
        console.log(email, uid);
        const displayName = user.displayName;
        document.getElementById('signin').style.display = "none";
        document.getElementById('logout').style.display = "unset";
        document.getElementById('displayName').style.display = "unset";
        document.getElementById('displayName').innerHTML = `${displayName}`;
    } else {
        document.getElementById('signin').style.display = "unset";
        document.getElementById('logout').style.display = "none";
        document.getElementById('displayName').style.display = "none";
    }
});

const btnLogOut = document.getElementById('logout');
btnLogOut.addEventListener('click', () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            window.location.reload();
        }).catch(error => {
            changeErrMessage(error.message)
        });
})
