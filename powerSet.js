var arr = [1, 2, 3];
 

 function getPowerSet(i, listA) {

 	let listB = [];

   function recurse(i, listA) {

		if(i > listA.length - 1){
		        //输出当前Ｂ值，即幂集里的一个元素
		    console.log('set: ' + listB);
		      	
		} else {
		     var x = listA[i];
		     listB.push(x);
		     recurse(i+1, listA);
	         listB.pop(x);
	         recurse(i+1, listA);
	    }
    }
      
  recurse(i, listA);

 	// body...
 }
 
getPowerSet(0, arr)