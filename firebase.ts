import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB6DzWWi0la7hoJXr5ebgJ2gC8WAEaMAvk",
  authDomain: "noti-finance.firebaseapp.com",
  projectId: "noti-finance",
  storageBucket: "noti-finance.appspot.com",
  messagingSenderId: "319807110866",
  appId: "1:319807110866:web:83d5a62aafd9fc364bf70b",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

const getFCMToken = async () =>
  new Promise(async (resolve, reject) => {
    try {
      const token = await getToken(messaging, {
        vapidKey:
          "BN3e5cdl9ViSq9O-T_yES6v6083Y21TIvAhv0JyyotM25AQsHiiI4Eu0f8x1a9Mt1DZpW8E6hTYFvttktjYchFs",
      });
      resolve(token);
    } catch (err) {
      reject(err);
    }
  });

export { getFCMToken };
