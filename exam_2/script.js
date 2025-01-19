function SecondLargest(arr){
    let largest= arr[0];
    let secondLargest= -Infinity;
    for(let i=1; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest= largest;
            largest= arr[i];
        }
        else if(arr[i]>secondLargest && arr[i]!=largest){
            secondLargest= arr[i];
        }
    }
    return secondLargest;

} 

const array= [10, 5, 20, 8, 12];
const secondLargest= SecondLargest(array);
console.log(secondLargest); // 12