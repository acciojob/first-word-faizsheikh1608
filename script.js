function firstWord(s) {
  // your code here
	const words = s.trim();
	if(s.length === 0) return s;
	const arr = s.split(' ');
	return arr[0]
	}
}
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
