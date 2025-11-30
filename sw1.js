importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCayorpYQsuq1u4JqdpBOBx2XGazIR7k4Q",
  authDomain: "webpenting.firebaseapp.com",
  projectId: "webpenting",
  storageBucket: "webpenting.firebasestorage.app",
  messagingSenderId: "777238003480",
  appId: "1:777238003480:web:c8418c2cdc0f54fb4a286d",
  measurementId: "G-67M980QN2S"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});