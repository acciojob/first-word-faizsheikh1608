function firstWord(s) {
  // your code here
	if(s.length === 0) return s;
	const arr = s.split(' ');
	for(let i = 0; i < arr.length;i++){
		if(arr[i] !== ""){
			return arr[i];
		}
	}
}
// Do not change the code below

const s = prompts("Enter String:");
alert(firstWord(s));
