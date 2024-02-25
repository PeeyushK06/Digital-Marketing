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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// script.js
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const fullname = registrationForm['fullname'].value;
  const usn = registrationForm['usn'].value;
  const email = registrationForm['email'].value;
  const phone = registrationForm['phone'].value;
  const university = registrationForm['university'].value;
  
  firebase.database().ref('students').push({
    fullname: fullname,
    email: email,
    usn: usn,
    phone: phone,
    university: university
  });

  registrationForm.reset();
});

firebase.database().ref('students').on('value', (snapshot) => {
  const students = snapshot.val();
  for (let student in students) {
    console.log(students[student].fullname);
    console.log(students[student].usn);
    console.log(students[student].email);
    console.log(students[student].phone);
    console.log(students[student].university);
  }
});