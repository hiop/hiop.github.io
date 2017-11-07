/*
	Caminar by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
var START_MARGIN = 0,
	ADDITIONAL_MARGIN = 5,
	MAX_DESCRIPTION = 700,
	NOECLIPS_TEXT = '',
	stages,
	keys = {37: 1, 38: 1, 39: 1, 40: 1},
	elements;
	layersArray = [
	//0
	{
		layerName: "Town of Orth",
		depth: null,
		soa: null,
		description: '<p>Orth is a large town on the edge of the Abyss, formed as a result of the many explorers travelling to the island. It is where the majority of the human characters in the show are from.</p>',
		screenshots: [
			"./images/screenshots/town1.jpg",
			"./images/screenshots/town2.jpg",
			"./images/screenshots/town3.jpg",
			"./images/screenshots/town4.jpg"
		],
		whistles : [1,1,1,1,1,1]
	},
	//1 Edge of the Abyss
	{
		layerName: "Edge of the Abyss",
		depth: 'Depth: 0~1350 meters',
		soa: 'Strains of Ascent: Light Dizziness and Nausea',
		description: "<p>The first layer is the most shallow section of the abyss, right below the town of Orth. A gondola was built between 50 and 580 meters to hasten the descent. "+
		"The environment doesn't really change and wildlife consists of mostly harmless animals, though occasionally predators from the 2nd Layer might ascend in search of food. There "+
		"aren't many treasures or relics either, but there is a considerable number of Praying Skeletons.</p>",
		screenshots: [
			"./images/screenshots/1st1.jpg",
			"./images/screenshots/1st2.jpg",
			"./images/screenshots/1st3.jpg",
			"./images/screenshots/1st4.jpg"
		],
		whistles : [0,1,1,1,1,1]
	},
	//2 Forest of Temptation
	{
		layerName: "Forest of Temptation",
		depth: 'Depth: 1350~2600 meters',
		soa: 'Strains of Ascent: Heavy nausea, headache and numbness of limbs',
		description:			
			"<p>The Forest of Temptation is the first truly dangerous section of the abyss. The fauna and environment suddenly change, turning into a tropical rainforest with huge vegetation. It is filled with dangerous beasts and ascending becomes increasingly difficult, making it a place where only experienced explorers can delve into. If a red whistle delver somehow gets to the 2nd Layer, search parties are called off and it is treated as a suicide.</p>"+
			"<p>On the deepest point from 2000 meters onwards, the habitat suddenly flips around and becomes the \"Inverted Forest\". Predators in the air become common and wind currents are very strong and unstable. It also gets colder and darker since it receives little light due to its inverted position. At the farthest from the center an Observation Camp was built to serve as a resting point for delvers. Currently the white whistle Ozen is using it as her base.</p>",
		screenshots: [
			"./images/screenshots/2nd1.jpg",
			"./images/screenshots/2nd2.jpg",
			"./images/screenshots/2nd3.jpg",
			"./images/screenshots/2nd4.jpg"
		],
		whistles : [0,0,1,1,1,1]
	},
	//3 Great Fault
	{
		layerName: "Great Fault",
		depth: 'Depth: 2600~7000 meters',
		soa: 'Strains of Ascent: Vertigo combined with visual and auditory hallucinations',
		description: "<p>The third layer consists only of a 4000 meters vertical cliff, making it a highly challenging area to cross. Countless methods have been attempted to cross it through the use of artifacts or differently crafted devices. Aerial predators are common, including Scarlet Maws.</p>",	
		screenshots: null,
		whistles : [0,0,1,1,1,1]
	},
	//4 The Cup of Giants
	{
		layerName: "The Cup of Giants",
		depth: 'Depth: 7000~12000 meters',
		soa: 'Strains of Ascent: Intense Full-body pain and hemorrhage from every single orifice of the body',
		description: 
			"<p>The 4th layer is the point where the curse of the abyss gets truly severe and could potentially kill a person if it's someone already wounded or weak. It is invaded by some absurdly overgrown vegetation, with 800-meter-tall plants shaped like cups. Plants have extremely fast growing rates on the 4th layer, making the layout of the place constantly changing. Because of this, it is impossible to make maps or a chart. The fully grown cups are filled with hot water in the top, but the ones that are not fully grown produce acid instead. The most dangerous beast is the Tamaugachi. While it is herbivorous it is highly defensive of what it considers its territory, and will attack anyone it sees nearby.</p>"+
			"<p>In the middle region at the 9000 meters marks there is the famous Garden of the Flower of Resilience, an area filled with Eternal Fortunes, the trademark flower of the Abyss. The distinctive sight produced by the countless glowing flowers make of the garden one of the most beautiful landscapes of the Abyss.</p>",
		screenshots: null,
		whistles : [0,0,0,1,1,1]
	},
	//5 Sea of Corpses
	{
		layerName: "Sea of Corpses",
		depth: 'Depth: 12000~13000 meters',
		soa: 'Strains of Ascent: Complete sensory deprivation, confusion and self-harming behavior',
		description: "<p>The 5th layer is the world that only white whistles delve into, and according to Shiggy you can count the number of people who successfully returned alive from here with the fingers of your hands. It is the thinnest layer of the Abyss vertically, being only 1000 meters deep, but it is also the widest one horizontally, probably around 10 times wider than the town of Orth. It consists mostly of a large sea with some crystallized sections, and the water is being held up by a large layer of thick muddy water. The water is filled with monsters of the sea, and diving deep into the water is synonymous with suicide, since swimming back up would make someone be hit by the curse of the abyss. Because it is the last section of the abyss where it is physically possible to survive a return trip, it is quite common for white whistles to set down here for some time.</p>",
		screenshots: null,
		whistles : [0,0,0,0,1,1]
	},
	//6 The Capital of the Unreturned
	{
		layerName: "The Capital of the Unreturned",
		depth: 'Depth: 13000~15500 meters',
		soa: 'Strains of Ascent: Devastating body alterations that result in the loss of humanity and sometimes death',
		description: 
		"<p>The 6th layer is the point of no return, since it becomes humanly impossible to survive the ascent. When a white whistle delver descends to the 6th layer it is called \"The Last Dive\".</p>"+
		"<p>In the Capital of the Unreturned, the ruins of a majestic city sleep undisturbed. A rumor in Orth exists about a Golden City sleeping at the bottom, which originated from this very city within the 6th Layer. Creatures of Irrational danger level like the Kuongatari become quite common.</p>"+
		"<p>The Curse that manifests upon ascending within the 6th Layer subjects the victim to an inconceivable pain and leads him to mutate into a messy pile of meat. Humans sometimes survive the effects of the curse, but their intelligence and consciousness vanishes, devolving into something mindless that acts purely on basic instincts like an animal. These creatures have been named Narehate by delvers, and if encountered they're usually killed in order to release them from their form. As it turns out, the form a human takes when becoming a Narehate seems to be closely related to their desires and dreams. In a secluded area of the 6th Layer, an entire Village inhabited by Narehate called Ilblu was formed.</p>",
		screenshots: null,
		whistles : [0,0,0,0,0,1]
	},
	//7 The Final Maelstrom
	{
		layerName: "The Final Maelstrom",
		depth: 'Depth: 15500~????? meters',
		soa: 'Strains of Ascent: Certain death',
		description: "<p>The final layer of the Abyss. Not much is known about it but there are many rumors about it. Some white whistles have claimed that from above it can be seen something shaped as a ring.</p>",
		screenshots: null,
		whistles : [0,0,0,0,0,1]
	},
	//8 The Final Maelstrom
	{
		layerName: "The Final Maelstrom",
		depth: 'Depth: >20000 meters',
		soa: 'Strains of Ascent: ????',
		description: "<p>No-one has reached the deepest point but it's been confirmed that it's beyond 20000 meters deep.</p>",
		screenshots: null,
		whistles : [0,0,0,0,0,1]
	}
	];
	/*
	{
		layerName: "",
		depth: '',
		soa: '',
		description: "<p></p>",
		screenshots: null,
		whistles : [0,0,1,1,1,1]
	}
	*/

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
	
String.prototype.trunc =
 function( n, useWordBoundary ){
	 if (this.length <= n) { return this; }
	 var subString = this.substr(0, n-1);
	 return (useWordBoundary 
		? subString.substr(0, subString.lastIndexOf(' ')) 
		: subString) + "...";
  };
	
(function($) {
	stages = $('.map .stage'),
		margin_bottom = START_MARGIN;
	
	for(var s in stages) { 
		if( stages.hasOwnProperty(s) ) 
		{
			if( stages[s] === stages.length) break;
			$(stages[s]).css('top', margin_bottom)
			margin_bottom = parseInt($(stages[s]).css('top')) + parseInt($(stages[s]).css('height'))+ADDITIONAL_MARGIN;
			
			
		}
	}
	
	$('.map .stage').click(function(){
		var afterHead = $('.after-head span'),
			description = $('.inner-info .text-container');
			layer = $(this).attr('class').replace( /^\D+/g, '');
		//add info
		$('.inner-info .text-container').css('overflow-y', 'hidden');
		if (layersArray[layer] !== undefined) {
			$('.inner-info h2').html(layersArray[layer].layerName);
			NOECLIPS_TEXT = layersArray[layer].description;
			$('.inner-info .text-container').html(NOECLIPS_TEXT);
			
			if (description.text().length > MAX_DESCRIPTION)
			{
				description.html(NOECLIPS_TEXT.trunc(MAX_DESCRIPTION) +'</p>', true);
				description.css('overflow-y', 'hidden');
			}
	
			if (layersArray[layer].soa !== null && layersArray[layer].depth !== null) {
				$(afterHead[0]).html(layersArray[layer].depth);
				$(afterHead[1]).html(layersArray[layer].soa);
				$('.after-head').css('display','block');
			}else{
				$('.after-head').css('display', 'none');
			}
			
			//screenshots
			elements = $('.inner-info .screen');
			for(var e in elements ) { 
				if( elements.hasOwnProperty(e)) {
					if( elements[e] === elements.length) break;
					if (layersArray[layer].screenshots !== null){
						$(elements[e]).html('<img src="'+ layersArray[layer].screenshots[e] +'">');
					}else{
						$(elements[e]).html('<img src="./images/screenshots/na.jpg">');
						
					}
					
				};
			};
			$('.screenshots img').zoomify(); 
			
			//whistles
			elements = $('.difficult div');
			for(var e in elements ) { 
				if( elements.hasOwnProperty(e)) {
					if( elements[e] === elements.length) break;
					
					if (layersArray[layer].whistles[e] !== 1){
						$(elements[e]).addClass("no");
					} else{
						$(elements[e]).removeClass();
					}
					
					//$(elements[e]).html('<img src="'+ layersArray[layer].screenshots[e] +'">');
					
				};
			};
			
			$(".overlay").fadeIn(100);
			$(".mia-info").fadeIn(300);
			//$("body").css('overflow-y','disable');
			disableScroll();
		}
		
	})
	
	$(".overlay").click(function(){
		if($(".zoomed").length === 0){
			$(".overlay").fadeOut(300);
			$(".mia-info").fadeOut(100);
			
			//$("body").css('overflow-y','visible');
			enableScroll()
			
		}else{
			$(".zoomed").zoomify('zoomOut');
		}
		
	});
		
	$('.inner-info .text-container').click(function(){
		var description = $('.inner-info .text-container');
		if (NOECLIPS_TEXT.length > MAX_DESCRIPTION){
			description.html(NOECLIPS_TEXT);
			if(description.css('overflow-y') === 'hidden'){
				description.css('overflow-y','scroll');
			}else{
				description.html(NOECLIPS_TEXT.trunc(MAX_DESCRIPTION)+'</p>', true);
				description.css('overflow-y', 'hidden');
			}
		}
	});
	

	
})(jQuery);
