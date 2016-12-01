/*var ettNummer = Number(prompt("ange ett nummer mellan 1 och 10", ""));
if (ettNummer<11 && ettNummer>0)
	alert ("Grattis");
else
	alert ("Fel, fel, fel");*/



/*var x = 10; 
var rand = Math.floor(Math.random()*x) + 1;
var ettNummer = Number(prompt("ange ett nummer mellan 1 och 10", ""));
if (ettNummer==rand)
	alert ("Grattis");
else
	alert ("Fel, fel, fel. Rätt svar är " + rand);*/

/*var ettNummer = Number(prompt("ange ett nummer mellan 1 och 3", ""));
switch (ettNummer){
	case 1: console.log ("Du tryckte på 1");
	break;
	case 2: console.log ("Du tryckte på 2");
	break;
	case 3: console.log ("Du tryckte på 3");
	break;
}*/

/*var y="#";
for (var x=7; x>0; x--){
	console.log (y);
	y=y+"#";
}*/

var y, z;
for (var x=1; x<101; x++){
	y=x%3;
	z=x%5;
	if (y===0 && z===0)
		console.log ("FizzBuzz");
	else if (y===0)
		console.log ("Fizz");
	else if (z===0)
		console.log ("Buzz");
	else
		console.log (x);
	
}


