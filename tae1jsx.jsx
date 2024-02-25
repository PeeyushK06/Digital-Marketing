var firebaseConfig = {
    apiKey: "AIzaSyDlfJ4KcXZsViAfsOLfudrRHPW_fV2a-K8",
authDomain: "digital-marketing-269c4.firebaseapp.com",
databaseURL: "https://digital-marketing-269c4-default-rtdb.firebaseio.com",
projectId: "digital-marketing-269c4",
storageBucket: "digital-marketing-269c4.appspot.com",
messagingSenderId: "948651807785",
appId: "1:948651807785:web:556f32a2621bdf3a3b7838",
measurementId: "G-759PM2PX2N"
};

var nameVV, lastV, emailV, phoneV, addressV, userV, passwrdV, repasswrdV;

function readFom() {
nameVV = document.getElementById("text").value;
lastV = document.getElementById("name").value;
emailV = document.getElementById("email").value;
phoneV = document.getElementById("tel").value;
addressV = document.getElementById("address").value;
userv = document.getElementById("user").value;
passwrdV = document.getElementById("password").value;
repasswrdV = document.getElementById("password").value;
console.log(nameV, lastV, emailV, phoneV, addressV, userV, passwrdV, repasswrdV);
}

document.getElementById("Submit").onclick = function () {
readFom();

firebase
.database()
.ref("student/" + nameV)
.set({
textNo: nameV,
password: last,

});
alert("Data Inserted");
document.getElementById("text").value = "";
document.getElementById("password").value = "";

database.ref("students").push().set({
    fullname: fullname,
    email: email,
    phone: phone,
    university: university
});

alert("Registration successful!");
document.getElementById("Sing Up").reset();
};