/**
 * Created by Nolan on 2017/8/7.
 */
//const leftArr = [2,5,5,8];
//const rightArr = [1,3,6,10];
const array = [1,2,44,4,65,34,34,5,13,88,485,61];

// let  array = [1,2,44,4,65,6,34,5,13,88,485,61]
// var array = [0,1,2,44,4,324,5,65,6,6,34,4,5,6,2,43,5,6,62,43,5,1,4,51,56,76,7,7,2,1,45,4,6,7];


function mergeArr(leftArr, rightArr) {
    let arr3 = [];
    let i = 0;
    let j = 0;

    // 依次填表新数组
    if(leftArr.length > 0 && rightArr.length > 0){
        while(arr3.length< leftArr.length + rightArr.length){
            while(i < leftArr.length){
                if(leftArr[i] < rightArr[j]){
                    arr3.push(leftArr[i]);
                    i++;
                    break;
                }else if(j == rightArr.length-1){
                    arr3 = arr3.concat('xx',leftArr.splice(i));
                    break
                }else{
                    break;
                }

            }


            while(j < rightArr.length){
                if(leftArr[i] < rightArr[j]){
                    break;
                }else if(i == leftArr.length-1){
                    arr3 = arr3.concat(rightArr.splice(j));
                    break
                }else{
                    arr3.push(rightArr[j]);
                    j++;
                    break;
                }
            }
        }
        console.log(arr3)
        return arr3;
    }


}
function merge(left, right) {
    var result = [];
    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
    return result.concat(left).concat(right);
}
function mergeSort(arr) {
    if(arr.length==1) {return arr};
    let mid=Math.floor(arr.length/2);
    let left_arr=arr.slice(0,mid);
    let right_arr=arr.slice(mid);
    return merge(mergeSort(left_arr),mergeSort(right_arr));
    //console.log(array)
    // 将数组分成两部分
   /* let left;
    let right;
    if(array.length==1){
       return array
    }
    if(array.length==2){
         left = [array[0]];
         right = [array[1]];

    }else{
         left = array.splice(Math.ceil(array.length/2));
         right = array;
    }


    console.log(left);
    console.log(right);
    //mergeSort(left);
    //mergeSort(right);
    return mergeSort(left).concat(mergeSort(right))
    //mergeArr(mergeSort(left), mergeSort(right))
    //mergeArr(mergeSort(left), mergeSort(right));*/
}

//console.log(array);
console.log(mergeSort(array));
console.log('(测试归并------')
//mergeArr([4],[2])

