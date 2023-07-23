import axios from 'axios';

const TOKEN = '6019793883:AAFu_71vQnhBfr7VZBdY7CnfiYS7f7juKvM';
const CHAT_ID = '-1001933429777';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отправитель: </b> ${this.name.value}\n`;
  message += `<b>Телефон: </b> ${this.tel.value}\n`;
  message += `<b>Имя пользователя: </b> ${this.comment.value}`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(res => {
      this.name.value = '';
      this.tel.value = '';
      this.comment.value = '';
      success.innerHTML = 'Сообщение отправлено!';
      success.style.display = 'block';
    })
    .catch(err => {
      console.warn(err);
    })
    .finally(() => {
      console.log('Отправили!');
    });
});