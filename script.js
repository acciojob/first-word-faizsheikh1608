function firstWord(s) {
  // your code here
	let index = 0
	while(S[index] == " "){
		index++
	} 
	let str = ''
	while(s[index] != " "){
		str += s[index]
	}
	return str
}

// Do not change the code below

//const s = prompt("Enter String:");
alert(firstWord(s));
