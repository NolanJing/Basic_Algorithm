    // var array = [8,4,6,10,7,1,3];
    let  array = [1,2,44,4,65,6,34,5,13,88,485,61]
     // var array = [0,1,2,44,4,324,5,65,6,6,34,4,5,6,2,43,5,6,62,43,5,1,4,51,56,76,7,7,2,1,45,4,6,7];

	function recurseSort(arr) {
			if(arr.length === 0 || arr.length === 1){
				return arr;
			} else {
              // recursionSort(arr.pop());
           let left = 0,
               len = arr.length,
               right = len-1,
               mid = Math.ceil((right + left)/2),
               pivot = Math.ceil((arr[left] + arr[right] + arr[mid])/3),
               arrLeft = [];
               arrRight = [];

           for (let i = 0; i < len; i++) {
           	if(arr[i]<pivot){
           	  arrLeft.push(arr[i]);
           	} else{
           	  arrRight.push(arr[i]);
           	}                	
           }       

           console.log('pivot = ' + pivot);           
           console.log(' rightArr -> ' + arrRight);               
           console.log(' LeftArr -> ' +arrLeft); 
           console.log(' '); 

           return recurseSort(arrRight).concat(recurseSort(arrLeft))
			}
		}

   console.log(array);
   let res = recurseSort(array);
   console.log(res);
