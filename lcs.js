
let str1="abcd ";
let str2="xyzabcd";

//暴力法


function getSubStr(str) {
	 
	 let len = str.length;
	 let sub = {}


	 
	   function setNode(node, val, index) {

	   		 if(index== len){

	   		 }else{
               // node.pre = node
	   		   node.val = val;
		       node.node = {};
		       node.index = index;
	            // console.log(child);
	           setNode(node.node,str[index+1],index + 1)
               
	   		 }

			  
			 
	   	// body...
	   }


	 

      setNode(sub, str[0], 0);
  
 








	   console.log(sub)

 
  // return sub
 } 








console.log(getSubStr(str1)) ;