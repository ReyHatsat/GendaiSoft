
var $tickerWrapper = $(".tickerwrapper");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 10;
		$list.find("li").each(function (i) {
			listWidth += $(this, i).outerWidth(true);
		});

var endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
	"width" : listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({force3D:true, repeat: -1, paused: false});
var time = 50; // tiempo que dura el comercial en pasar

infinite.fromTo($list, time, {x:0}, {x: -listWidth, ease: Linear.easeNone}, 0);
infinite.fromTo($clonedList, time, {x:listWidth}, {x:0, ease: Linear.easeNone}, 0);
infinite.set($list, {x: listWidth});
infinite.to($clonedList, time, {x: -listWidth, ease: Linear.easeNone}, time);
infinite.to($list, time, {x: 0, ease: Linear.easeNone}, time);

//Pause/Play
				
$tickerWrapper.on("mouseenter", function(){
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});