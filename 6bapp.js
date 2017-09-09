/*Problem Statement
 Create an Array of numbers Example as var arr= [3,4,5,6,76,7,8];
 Push 4 elements in an existing array list.
 Pop the inserted pushed elements.
 Extract the elements from first index to fourth index and display the list
 Iterate the array element using for of loop or forEach loop.*/

var arrx = [1,3,5,7];
console.log(arrx);
arrx.push(9,11,13,15);
console.log(arrx);
arrx.pop();
console.log(arrx);
arrx.pop();
console.log(arrx);
arrx.pop();
console.log(arrx);
arrx.pop();
console.log(arrx);

// Storing the length of the array created earlier
var arrlen = arrx.length;
//var test=document.createElement('section');
//test.setAttribute('id','test');

/* creating a UL element */
var ul=document.createElement('ul');

/* appending the newly created UL element inside the document */
document.body.appendChild(ul);
//test.appendChild(ul);

/* Extract the elements from first index to fourth index and display the list */
for (var i = 0; i < arrlen ; i++) {
    var liElement = document.createElement('li');
    liElement.innerHTML = arrx[i];
    ul.appendChild(liElement);
   //liElement.innerHTML = arrx[i];
   console.log(arrx[i]);
   //document.innerHTML()
}

// For Of loop used to substract each array value by 1. Iterate the array element using for of loop or forEach loop.
console.log("Using For of loop to substract 1 from each array element")
for (var minus1 of arrx) {

    minus1-=1;
    console.log(minus1);
} 
