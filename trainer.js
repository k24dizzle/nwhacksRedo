$(document).ready(function() {
	console.log("TRAINING");
	var menu = $('#menu');
	var button = $('#button');
	var trigger = $('#trigger');
	function open (evt)  { menu.animate({right: 0}); button.html('CLOSE'); trigger.html('LEFT TRIGGERED');}
	function close (evt) { menu.animate({right: -400}); button.html('OPEN'); trigger.html('RIGHT TRIGGERED');}	
	button.click(function ()  { if (menu.css('right') == '0px') { close(); } else { open(); }  });

	var trainer = new LeapTrainer.Controller(); 
	trainer.fromJSON('{"name":"LEFT","pose":false,"data":[[{"x":0.5222410269652745,"y":-0.006635959916438852,"z":0.02909997211663584,"stroke":1},{"x":0.3681747679855305,"y":0.005587248417985025,"z":-0.00963933760549135,"stroke":1},{"x":0.1969405506180143,"y":0.01928324687271807,"z":-0.04285307790473766,"stroke":1},{"x":0.1974590917225315,"y":-0.024034380803410388,"z":-0.15876542048083575,"stroke":1},{"x":0.23254767730948,"y":-0.09075885987599874,"z":-0.25128932393978537,"stroke":1},{"x":0.33849401412523217,"y":-0.06456176612566464,"z":-0.26893369487721946,"stroke":1},{"x":0.4100786027225124,"y":-0.10211950042859627,"z":-0.19289183624505749,"stroke":1},{"x":0.3075552797365355,"y":-0.047370932257387456,"z":-0.0488404324681066,"stroke":1},{"x":0.20481756909298243,"y":0.009196583730422953,"z":0.08918186002946693,"stroke":1},{"x":-0.013993983710922753,"y":0.026678809305863443,"z":0.09044343538268346,"stroke":1},{"x":-0.11512616436586876,"y":0.0053319783241231045,"z":0.008789358622633248,"stroke":1},{"x":-0.13129821417968962,"y":-0.049356170960489755,"z":-0.11464769568054306,"stroke":1},{"x":-0.03498908542506041,"y":-0.02900009818844672,"z":-0.18160319012076312,"stroke":1},{"x":0.04705852716562042,"y":-0.056329725496272756,"z":-0.1166244188184318,"stroke":1},{"x":-0.02132907409097634,"y":0.010387594144570564,"z":0.081750184249616,"stroke":1},{"x":-0.16687733516035286,"y":0.05756590568424588,"z":0.20896783252577367,"stroke":1},{"x":-0.34286993516649766,"y":0.059947046061192194,"z":0.19772028896705574,"stroke":1},{"x":-0.39211035526519805,"y":0.005675588708403831,"z":0.021248946368613464,"stroke":1},{"x":-0.2636081177207408,"y":0.0043237699959962905,"z":-0.0611976236133866,"stroke":1},{"x":-0.20309248035903377,"y":0.02369869582637238,"z":0.08111739996553541,"stroke":1},{"x":-0.3073609973454039,"y":0.10497821104130933,"z":0.30178393226033634,"stroke":1},{"x":-0.4777589730347255,"y":0.12033067194855873,"z":0.3166191806779742,"stroke":1},{"x":-0.35495239161924397,"y":0.017182043990944112,"z":0.02056366058803466,"stroke":1}]]}');
	trainer.fromJSON('{"name":"RIGHTHAND2","pose":false,"data":[[{"x":-0.26035060855424835,"y":0.1266070208688641,"z":0.19666585536184206,"stroke":1},{"x":-0.346369058898077,"y":0.041599759375700734,"z":-0.07290719853286212,"stroke":1},{"x":-0.48764697723151945,"y":0.0006285346334281849,"z":0.059956947059116195,"stroke":1},{"x":-0.27313160794370944,"y":0.09979795937977112,"z":0.19532412312291864,"stroke":1},{"x":-0.09394469854722554,"y":0.0038030009069563303,"z":-0.03812130842066502,"stroke":1},{"x":-0.27687564891598615,"y":-0.07507443399176747,"z":-0.08486014327915471,"stroke":1},{"x":-0.2796744578358801,"y":0.048236167079358294,"z":0.16198355271614812,"stroke":1},{"x":0.048469971270132695,"y":0.020393426034665568,"z":0.029323034743528542,"stroke":1},{"x":-0.0584989333463683,"y":-0.07154424136527557,"z":-0.16192420972769656,"stroke":1},{"x":-0.202225356351524,"y":-0.01911183264486776,"z":0.052415438144430226,"stroke":1},{"x":0.14393249232591926,"y":0.014554457598189768,"z":0.07118632333319558,"stroke":1},{"x":0.13562043142288865,"y":-0.0741420333632684,"z":-0.2049902212529599,"stroke":1},{"x":-0.08765642982169908,"y":-0.0481047476110294,"z":-0.0006078491671045183,"stroke":1},{"x":0.22566672191274678,"y":0.016949850148450463,"z":0.10558935917204232,"stroke":1},{"x":0.31447290458310956,"y":-0.04002834581420272,"z":-0.16981236569272926,"stroke":1},{"x":0.035781468184362286,"y":-0.05928305979540231,"z":-0.08505421369465167,"stroke":1},{"x":0.20259696735247074,"y":0.02479132749534932,"z":0.13236743706047055,"stroke":1},{"x":0.44993311999072777,"y":-0.011462206309232767,"z":-0.08235248850237256,"stroke":1},{"x":0.17941561568344727,"y":-0.05439129566431433,"z":-0.1545766410265398,"stroke":1},{"x":0.1181310619519515,"y":0.03866476921877435,"z":0.08773741203322993,"stroke":1},{"x":0.5123530227684805,"y":0.017115923819853093,"z":-0.03734284345018554,"stroke":1}]]}');
	trainer.on('LEFT', open);
	trainer.on('RIGHTHAND2', close);
});