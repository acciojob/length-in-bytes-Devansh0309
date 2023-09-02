const byteSize = (str) => {
  // write your code here
	if(!str){
		return 0;
	}
	const blob = new Blob([str])
	return blob.size
};

// Do not change the code below
const str = prompt("Enter some string.")
alert(byteSize(str))
