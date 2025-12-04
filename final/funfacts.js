//vyvian lillian 12/4

//start fact list; this object is overall a similar idea to the mood switcher
const factsObject = {
	bird0: {textColor:"#6ae3e4", factoid:"The reason larger penguins are found in colder environments is because their size enables better heat retention.", source:"https://www.coolantarctica.com/Antarctica%20fact%20file/science/cold_penguins.php"},
	bird1: {textColor:"#ff8e51", factoid:"There are only two extant species of ostriches: the common ostrich of sub-Saharan Africa, and the Somali ostrich of the Horn of Africa.", source:"https://www.ifaw.org/animals/ostriches"},
	bird2: {textColor:"#000000", factoid:"Ravens (and other corvids e.g. crows) are, relatively, highly intelligent. One raven was able to solve a food puzzle involving eight distinct steps.", source:"https://www.youtube.com/watch?v=AVaITA7eBZE"},
	bird3: {textColor:"#c238f5", factoid:"Unlike many bird species, doves are almost entirely herbivorous- especially towards grain.", source:"https://animalia.bio/mourning-dove"},
	bird4: {textColor:"#1ea2aa", factoid:"Hummingbirds' distinct flight pattern, occuring 720 to 5400 times per minute, enables them to be the only birds that can fly backwards.", source:"https://hummingbirds.vetmed.ucdavis.edu/information/facts"},
	bird5: {textColor:"#8a2cd3", factoid:"The order of birds Passeriformes is incredibly diverse, containing over half of bird species, including jays, ravens, and sparrows.", source:"https://en.wikipedia.org/wiki/Passerine"},
	bird6: {textColor:"#2c7ed3", factoid:"The peregrine falcon is the fastest animal in the entire world, travelling at over 180 miles per hour when diving.", source:"https://www.britannica.com/animal/peregrine-falcon"},
	bird7: {textColor:"#d1d32c", factoid:"Seagulls in South America have been observed feeding on live whales together.", source:"https://www.aaas.org/taxonomy/term/9/save-whales-shoot-seagulls"},
	birdSecret: {textColor:"#83cd32", factoid:"Congrats, you found a secret!", source:"The secret is that this message will go away when you click the button again."}
} //end fact list

const factShowerVar = document.getElementById('factShower')
const sourceShowerVar = document.getElementById('sourceShower') // these will both allow to change the text displayed via event listener

let secretIncrementer = 0 // this is so they can get a secret sometimes, if they click enough times
//a side effect of the way this is coded is that it wont show the corvid fact after a while but probably nobody would notice this

function factGetter() { //this function makes the button randomness work
	secretIncrementer++ //every time the function is called they get closer to secret chance
	let randNum = Math.floor(Math.random() * 8) //this allows for a random fact to be shown
	if (secretIncrementer > 8 && randNum == 2) { //secret fact
		return "birdSecret"
	} else {
		return `bird${randNum}`
	}
}

document.addEventListener('click', function(event) { 
	if (event.target.classList.contains("birdButton")) { //listening for a click on the bird button class, which is assigned to the big button in the middle of the page
		const birdConfig = factsObject[factGetter()] //calling the function from earlier, the number rolled is part of the string returned which is the essential part of the facts object
		factShowerVar.textContent = birdConfig.factoid //changing all the elements via DOM manipulation, these are the most important three lines
		sourceShowerVar.textContent = birdConfig.source
		document.getElementById("factShower").style.color = birdConfig.textColor
	}

})

