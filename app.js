import TelegramBot from 'node-telegram-bot-api'
import { getDatabase, ref, set, child, get } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAilaispXrz2Xh6_KLigzqYIaMhUHH1WG0",
  authDomain: "tg-bots-b22e8.firebaseapp.com",
  databaseURL: "https://tg-bots-b22e8-default-rtdb.firebaseio.com",
  projectId: "tg-bots-b22e8",
  storageBucket: "tg-bots-b22e8.appspot.com",
  messagingSenderId: "335739215574",
  appId: "1:335739215574:web:9ba49a4b4a252f6a0f7377"
};

const app = initializeApp(firebaseConfig);

const token = '5683411563:AAFufIzOfYqK4Gq6lWq_38k4hCJs6vyHVSc'

const bot = new TelegramBot(token, { polling: true })

bot.onText(/\/start/, (msg, user) => {
    setInterval(() => {
        let her2 = 1
        const dbRef = ref(getDatabase());
        get(child(dbRef, 'state/state')).then((snapshot) => {
            let her = snapshot.val();
            console.log(her)
            if (her == true && her2 == 1) {
                her2 = 0
                const chatId = msg.chat.id;
                setTimeout(() => {
                 bot.sendMessage(chatId, '😜');
                 bot.sendMessage(chatId, 'Пора в бой');
                }, 1000);
                const db = getDatabase();
                set(ref(db, 'state/' ), {state: false});
            }
        })
    }, 2000);
});
