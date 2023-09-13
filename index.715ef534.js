document.addEventListener("DOMContentLoaded",function(){// конечная дата
let t=new Date("2023, 09, 25"),e=null;// склонение числительных
function n(t,e){return e[t%100>4&&t%100<20?2:[2,0,1,1,1,2][t%10<5?t%10:5]]}// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
function o(){let o=t-new Date;o<=0&&clearInterval(e);let d=o>0?Math.floor(o/1e3/60/60/24):0,c=o>0?Math.floor(o/1e3/60/60)%24:0,i=o>0?Math.floor(o/1e3/60)%60:0,s=o>0?Math.floor(o/1e3)%60:0;r.textContent=d<10?"0"+d:d,l.textContent=c<10?"0"+c:c,a.textContent=i<10?"0"+i:i,u.textContent=s<10?"0"+s:s,r.dataset.title=n(d,["день","дня","дней"]),l.dataset.title=n(c,["час","часа","часов"]),a.dataset.title=n(i,["минута","минуты","минут"]),u.dataset.title=n(s,["секунда","секунды","секунд"])}// получаем элементы, содержащие компоненты даты
let r=document.querySelector(".timer__days"),l=document.querySelector(".timer__hours"),a=document.querySelector(".timer__minutes"),u=document.querySelector(".timer__seconds");// вызываем функцию countdownTimer
o(),// вызываем функцию countdownTimer каждую секунду
e=setInterval(o,1e3)});//# sourceMappingURL=index.715ef534.js.map

//# sourceMappingURL=index.715ef534.js.map
