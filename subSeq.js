let arr = ['a', 'b', 'c', 'd'];
let list = [''];



	for(var i = 0, len = arr.length; i<len ; i++ ){
         // 追加新元素arr[i]

		 	list.forEach(x => {
		 		// body...
		 		list.push(x + arr[i]);
		 		// 在每个集合内元素末尾，追加arr[i] 
		 		// (相当于取舍只取，舍的分支在之前出现过, 可以省略)
		 		// 然后把追加后得到元素 push 到集合内；
		 	})
		 	 
	}


console.log(list.sort());