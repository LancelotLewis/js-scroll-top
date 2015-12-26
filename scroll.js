window.onload = function(){
	for (var i = 100; i >= 0; i--) {
		var div = document.createElement('div');
		div.innerHTML = 100-i;
		document.body.appendChild(div);
	}
	var gotop = document.createElement('div');
	gotop.innerHTML = '回到<br>顶部';
	gotop.setAttribute('id','top');
	gotop.style.opacity = ".6";
	gotop.style.display = "none";
	gotop.style.position = 'fixed';
	gotop.style.bottom = '10px';
	gotop.style.right = '10px';
	gotop.style.backgroundColor = '#000';
	gotop.style.color = '#fff';
	gotop.style.fontSize = '12px';
	gotop.style.padding = '5px';
	gotop.style.borderRadius = '3px';
	gotop.style.cursor = 'pointer';
	document.body.appendChild(gotop);

	gototop(gotop);
}

function gototop(gotop, speed){
	var timer;
	var oldTop = document.documentElement.scrollTop || document.body.scrollTop;
	gotop.addEventListener('click',function(){
		var speed = speed || 10;
		timer = setInterval(function(){
			var top = document.documentElement.scrollTop || document.body.scrollTop;
			var gospeed = top/100;
			if(gospeed>speed){
				gospeed = speed;
			}else if(gospeed<3){
				gospeed = 3;
			}
			if(top>speed){
				if(document.documentElement.scrollTop){
					top = document.documentElement.scrollTop-=speed;
				}else{
					top = document.body.scrollTop-=speed;
				}
			}else{
				clearInterval(timer);
			}
		},5);
	});

	window.onscroll = function(e){
		var newTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(newTop>100){
			gotop.style.display = "block";
		}else{
			gotop.style.display = "none";
		}
		if(newTop>oldTop){
			clearInterval(timer);
		}
		oldTop = newTop;
	}
}