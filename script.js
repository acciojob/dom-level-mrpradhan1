//your JS code here. If required.
let level=document.getElementById('level');
let domlevel=0;
 while(level.parentNode){
	level=level.parentNode;
	domlevel++;
}
alert(domlevel);