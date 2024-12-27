function firstWord(s) {
  // your code here
	if(s.length === 0) return s;
	const words = s.trim();
	const arr = words.split(' ');
	return arr[0]
	
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
