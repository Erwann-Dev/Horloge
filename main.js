var inc = 1000;
clock();
function clock() {
	const date = new Date();
	let j = date.getDay();
	console.log(j);
	var day = [
		'Dimanche',
		'Lundi',
		'Mardi',
		'Mercredi',
		'Jeudi',
		'Vendredi',
		'Samedi',
	];
	var month = [
		'Janvier',
		'Fevrier',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Aout',
		'Septembre',
		'Octobre',
		'Novembre',
		'Decembre',
	];
	const nm = date.getMonth();
	const years = date.getFullYear();
	const ndate = date.getDate();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const hour = hours * 30;
	const minute = minutes * 6;
	const second = seconds * 6;
	const h = hours < 10 ? '0' + hours : hours;
	const m = minutes < 10 ? '0' + minutes : minutes;
	document.querySelector('.hours').innerHTML = h;
	document.querySelector('.mins').innerHTML = m;
	document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
	document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
	document.querySelector('.second').style.transform = `rotate(${second}deg)`;
	document.querySelector('#day').innerHTML =
		day[j] + ' ' + ndate + ' ' + ' ' + month[nm] + ' ' + years;
	document.querySelector('#day2').innerHTML =
		day[j] + ' ' + ndate + ' ' + ' ' + month[nm] + ' ' + years;

	navigator.getBattery().then(function (battery) {
		document.querySelector('.battery_percent').innerHTML =
			battery.level.toFixed(2) * 100 + '%';
		document.querySelector('.bat2').style.width =
			battery.level.toFixed(2) * 100+"%";
			if (battery.level.toFixed(2) * 100 < 75){
				document.querySelector('.bat2').style.backgroundColor= "##ddff00";
			}
			else if (battery.level.toFixed(2) * 100 < 50){
				document.querySelector('.bat2').style.backgroundColor= "##ffb700";
			}
			else if (battery.level.toFixed(2) * 100 < 25){
				document.querySelector('.bat2').style.backgroundColor= "##ff2200";
			}
			if (battery.charging == true) {
				document.querySelector('#charge').style.visibility= 'visible';
			}
			else {
				document.querySelector('#charge').style.visibility= 'hidden';
			}

		battery.addEventListener('chargingchange', function () {
			console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'));
		});

		battery.addEventListener('levelchange', function () {
			document.querySelector('.battery_percent').innerHTML = battery.level;
			console.log('Battery level: ' + battery.level.toFixed(2) + '%');
		});
	});
}
function toHHMMSS(secs) {
	var sec_num = parseInt(secs, 10)
	var hours   = Math.floor(sec_num / 3600)
	var minutes = Math.floor(sec_num / 60) % 60
	var seconds = sec_num % 60
	return [hours,minutes,seconds]
			.map(v => v < 10 ? "0" + v : v)
			.filter((v,i) => v !== "00" || i > 0)
			.join(":")
}
toHHMMSS(3600) 
setInterval(clock, inc);
