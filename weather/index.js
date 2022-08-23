'use strict';
(function () {
	const param = {
		url: "https://api.openweathermap.org/data/2.5/",
		appid: 'd2aacc676a0c959132ecc0328b47e43a'
	}
	function getWeather() {
		let citi = document.querySelector('#citi').value;
		fetch(`${param.url}weather?q=${citi},ua&appid=${param.appid}`)
			.then(weather => {
				return weather.json();
			}).then(showWeather);
	}


	function showWeather(data) {
		const temp = Math.round(data.main.temp - 273);
		const main = data.weather[0].main;
		const icon = data.weather[0].icon;
		const feels_like = Math.round(data.main.feels_like - 273);
		document.querySelector('.weather__temp').innerHTML = temp + '&#8451';
		document.querySelector('.weather__status').innerHTML = main;
		document.querySelector('.weather__feels_like').innerHTML = `Feels like ${feels_like} &#8451`;
		document.querySelector('.weather__icon').innerHTML =
			`<img src="https://openweathermap.org/img/w/${icon}.png" alt="weather__icon">`;
		
	}
	document.querySelector('#citi').onchange = getWeather;


	getWeather();
}());