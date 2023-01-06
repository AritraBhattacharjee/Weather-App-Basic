const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3c36aee6amshb5035cd4bddebbap1f83bejsn9b382fc6abd5',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));