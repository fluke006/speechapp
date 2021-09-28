var bmw = 	{
	name: 'BMW',
	image: 'https://ag-spots-2019.o.auroraobjects.eu/2019/01/08/bmw-m5-f90-competition-c301108012019101449_1.jpg'
};

var mercedesBenz = 	{
	name: 'Mercedes Benz',
	image: 'https://etaloncar.com/wp-content/uploads/2019/09/Etaloncar-Barcelona-MercedesBenz-C63s-AMG-Rent-Alquiler_MG_9512-2.jpg' 
};

var audi = {
	name: 'Audi',
	image: 'https://s.auto.drom.ru/img4/catalog/photos/fullsize/audi/r8/audi_r8_109709.jpg' 
};

var carsLogo = {
	name: [ 'bmw', 'audi', 'Mercedes Benz'],
	image: 'https://thumbs.dreamstime.com/b/set-logos-popular-german-brands-cars-kiev-ukraine-september-mercedes-bmw-audi-printed-paper-placed-white-background-125423431.jpg'
}


var elList = document.querySelector('.list');

var recBtn = document.querySelector('.btn');

var elResult = document.querySelector('.result');




var rec = new webkitSpeechRecognition();

rec.lang = 'ue-US';

rec.onend = function () {
	console.log('==== Aloqa tugadi ====');
};

rec.onerror = function () {
	console.log('Xatolik');
};


rec.onresult = function (evt) {
	var command = evt.results[0][0].transcript;

	var newLI = document.createElement('li');
	newLI.setAttribute('class', 'item');

	var image = document.createElement('img');
	image.setAttribute('class', 'image');
	image.setAttribute('width', '900');
	image.setAttribute('height', '400');

	if(command === 'football'){

	image.setAttribute('src', bmw.image)

	}else if(command === 'basketball'){

		image.setAttribute('src', mercedesBenz.image)

	}else if(command === 'volleyball'){

		image.setAttribute('src', audi.image)

	}else{
		image.setAttribute('src', carsLogo.image)

		elResult.textContent ='this word doesn\'t have box' 
	}


	newLI.appendChild(image);

	elList.appendChild(newLI);

	elResult.textContent= command
	
};

recBtn.addEventListener('click', function () {
	console.log('==== Aloqa boshlandi ====');
	rec.start();
});
