function titleCase(title, minorWords) {
	const minorLower = minorWords?.split(' ').map((x) => x.toLowerCase());
	return title
		.toLowerCase()
		.split(' ')
		.map((word, i) => {
			if (i == 0) {
				return word.charAt(0).toUpperCase() + word.slice(1);
			}
			if (minorLower?.includes(word)) {
				return word;
			}
			return word[0].toUpperCase() + word.slice(1);
		})
		.join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));
