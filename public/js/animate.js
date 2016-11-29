function runDiv() {
    var cnt = 0;
    var id = setInterval(animate, 500);
    function animate() {
		var elements = document.getElementsByClassName("animate");
		cnt+=1;
		for(var i =0;i<elements.length;i++){
			var	top=cnt%100;
			var	left=0;
			if((i+1)*15>100){
				var row = Math.floor(i/6);
				top = (cnt+(row*20))%100;
			}else{
				top = cnt%100;
			}
			elements[i].style.top = top+ '%';
			elements[i].style.left = (cnt+((i%6)*15))%100 + '%';
			elements[i].style.zIndex = i+1;
		}
	}
}
