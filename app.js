let time= document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const restart = document.querySelector(".reset");
const lap = document.querySelector(".lap");
const timer=document.querySelector('.el');
let  doyle=0 ,second=0 , minute=0 , hour=0;
// setTimeout clearTimeout -> 1 L udaa ashiglan
// setInterval clear Interval -> hyzgaargui ajilna
function watch(){
	doyle++;
	// 00:00:00:00
	// ternary operator/?/
	if(doyle==100){
		doyle=0;
		second++;
		if(second==60){
			second=0;
			minute++;
			if(minute==60){
				minute=0;
				hour++;
			}
		}
	}
	let d= doyle<10 ? "0"+doyle : doyle;
	let s=second<10 ? "0"+second : second;
	let m=minute<10 ? "0"+minute : minute;
	let h=hour<10 ? "0"+hour : hour;
	time.innerText= h+":"+m+":"+s+":"+d;
}
start.addEventListener('click',()=>{
	ehleh = setInterval(watch,10);
});
stop.addEventListener('click',()=>{
	clearInterval(ehleh);
});
restart.addEventListener('click',()=>{
	clearInterval(ehleh);
	hour=0;
	minute=0;
	second=0;
	doyle=0;
	time.innerText="00:00:00:00";
	timer.innerHTML="";
});
lap.addEventListener('click',()=>{
	let lapEl=document.createElement('p');
	let d= doyle<10 ? "0"+doyle : doyle;
	let s=second<10 ? "0"+second : second;
	let m=minute<10 ? "0"+minute : minute;
	let h=hour<10 ? "0"+hour : hour;
    lapEl.innerText= h+":"+m+":"+s+":"+d;
	timer.appendChild(lapEl);
	lapEl.style.color="white";
});