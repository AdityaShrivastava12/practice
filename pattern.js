const printFn = (z) => {
		for(let x = 1; x <=z; x++){
		let arr = [];
		for(let y =1; y<=z; y++){
			if(y <= z-x) arr.push(' ')
			// else arr.push(y-(z-x));
			else arr.push('*');
		}
		for(let y=1; y<=z; y++){
			// if(y<x) arr.push(x-y)
			if(y<x)arr.push('*');
		}
		console.log(...arr);
	}
}

printFn(10)

// for(let x=1;x<=8;x++){
// 	printFn(x);
// }


/*
                  *
                * * *
              * * * * *
            * * * * * * *
          * * * * * * * * *
        * * * * * * * * * * *
      * * * * * * * * * * * * *
    * * * * * * * * * * * * * * *
  * * * * * * * * * * * * * * * * *
* * * * * * * * * * * * * * * * * * *


*/
