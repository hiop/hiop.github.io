$(document).ready(function(){
    Class  = jsface.Class;
    extend = jsface.extend;


/*CLASSES*/
	var World = Class({
		constructor: function(){
			this.depth = 0;
		},
		
		
		getDepth: function(){
			return this.depth;
		},
		setDepth: function(addDepth){
			this.depth += addDepth;
		}
	});

	var typeRiko = Class({
		hp: 100,
		stats: {
				'STR':10,
				'DEX':5,
				'INT':25
				}
	});
	
	var typeReg = Class({
		hp: 200,
		stats: {
				'STR':20,
				'DEX':15,
				'INT':10
			  }
	});
	
	var typeNanachi = Class({
		hp: 150,
		stats: {
				'STR':5,
				'DEX':10,
				'INT':15
			  }
	});

	
	var Character = Class({
		$statics:{
			DOWN_FORCE_MOD: 3,
			DEBUG: 			true
		},
		constructor: function (name, type, urlImg, lvl, hp){
			
			//main
			this.name 		= name;
			this.type 		= type || 'riko';
			/*this.stats 		= {};*/
			this.lvl		= lvl || 1;
			this.hp 		= hp  || 100;
			
			//stats

			//class in
			this.world = new World();
			
			//other
			this.urlImg = urlImg;
			
			this.debug('CHAR:');
			this.debug(this);
		},
		
		//methods	
		get: function(fieldname){
			if (this[fieldname] !== undefined){
				return this[fieldname];
			}else{
				this.debug('fieldname: '+fieldname +' undefined');
			}
		},
		
		debug: function(msg){
			if(Character.DEBUG === true){
				console.log(msg);
			}
		},
		
		
		sayHello: function(){
			this.debug(this.name+": hello");
		},
		
		goDown: function(){
				this.world.setDepth(this.stats.str / Character.DOWN_FORCE_MOD);
				this.debug(this.world.getDepth());
		},
		
		Draw: function(){
			$("#char-view-avatar img").attr('src',this.get('urlImg'));
			$("#char-stat-view #hp .value").html(this.get('hp'));
			$("#char-stat-view #lvl .value").html(this.get('lvl'));
		}

	});

/*CLASSES END*/

/*GAME MAIN BODY*/
var player;// new Character('HioP','riko', './assets/img/nanachi.png');
$('#char-select').hide();
$('#char-view').hide();

if (player === undefined){
	$('#char-select').fadeIn();
	
	//CHAR SELECT
	$('#char-select .card.mx-auto').on('click',function(){
		console.log($(this).attr('data-char'));
		console.log($(this).find('img').attr('src'));
		
		player = new Character(
			'HioP', 
			$(this).attr('data-char'), 
			$(this).find('img').attr('src')
		);
		
		if( player.get('type') === 'riko' ) {
			extend(player, typeRiko);
			console.log(player);
		}else
		if( player.get('type') === 'reg' ) {
			extend(player, typeReg);
			console.log(player);
		}else
		if( player.get('type') === 'nanachi' ) {
			extend(player, typeNanachi);
			console.log(player);
		}
		$('#char-select .card.mx-auto').off('click');
		$('#char-select').hide();
		$('#char-view').show();
		player.Draw();
	});
	
	
}
	//player.goDown();
/*GAME MAIN BODY END*/


});