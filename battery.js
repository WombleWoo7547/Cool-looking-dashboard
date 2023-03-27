let battery;
const batteryValue = document.querySelector('#battery-value');

let setBattery = async () => {
	battery = await navigator.getBattery();
	batteryValue.innerText = Math.floor(battery.level * 100)
}

setInterval(setBattery, 100);
