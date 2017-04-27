let tree = {
 value: 1,
 left: {
  value: 2,
  left: {
   value: 4
  }
 },
 right: {
  value: 3,
  left: {
   value: 5,
   left: {
    value: 7
   },
   right: {
    value: 8
   }
  },
  right: {
   value: 6
  }
 }
}

// 先序
// console.log(tree);
function prePrint(tree) {
	// body...
	var str ='';
	function getChild(tree) {

		if(!tree){
            // console.log('A');
            return 's' 
		} else {
			str =str + '->' + tree.value;
          //console.log(tree.value)
          //console.log(tree.left?tree.left.value:'null');
          //console.log(tree.right?tree.right.value:'null' );
          //console.log('+');
           // getChild(tree.left)
           // getChild(tree.right)
         
           getChild(tree.left) 
           getChild(tree.right)
           return str
		}
	 		 	
	 } 


	 return getChild(tree);
}

function postPrint(tree){
	var str ='';
	function getChild(tree) {
		if(!tree){           
           //  return 
		} else {
			 getChild(tree.left); 
             getChild(tree.right);
			 str = str + '->' + tree.value;                    
           return str;
		}	 		 	
	 } 
	 return getChild(tree);

}

console.log('pre' + prePrint(tree));
console.log('post' + postPrint(tree));