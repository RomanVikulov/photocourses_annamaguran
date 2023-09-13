!function(){// import axios from 'axios';
let e=document.getElementById("success");document.getElementById("tg-form").addEventListener("submit",function(t){t.preventDefault();let n=this.name.value,l=this.tel.value,s=this.comment.value;axios.post("/send-message",{name:n,tel:l,comment:s}).then(t=>{console.log("Статус ответа:",t.status),console.log("Данные ответа:",t.data),this.name.value="",this.tel.value="",this.comment.value="",e.innerHTML="Сообщение отправлено!",e.style.display="block"}).catch(e=>{console.warn(e)}).finally(()=>{console.log("Отправили!")})})}();//# sourceMappingURL=index.0d11555e.js.map

//# sourceMappingURL=index.0d11555e.js.map
