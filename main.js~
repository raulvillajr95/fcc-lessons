/**
 *
 *
 *
 *
 *
 *
 *
 */

function removeDuplicatesArr(inp, counter = 0, arr = []) {
  if (counter >= inp.length - 1) {
    if (!arr.includes(inp[counter])) arr.push(inp[counter]);
    return arr;
  } else {
    if (!arr.includes(inp[counter])) arr.push(inp[counter]);
    return removeDuplicatesArr(inp, counter + 1, arr);
  }
}

function mergeSorter(arr) {
  // sort 2 arrays into 1
  const sorter = (arr1, arr2, sorted = []) => {
    if (arr1.length === 0 || arr2.length === 0) {
      if (arr1.length === 0) {
        sorted = [...sorted, ...arr2];
      } else if (arr2.length === 0) {
        sorted = [...sorted, ...arr1];
      }
      return sorted;
    } else {
      if (arr1[0] <= arr2[0]) {
        sorted.push(arr1[0]);
        arr1.shift();
      }
      if (arr1[0] > arr2[0]) {
        sorted.push(arr2[0]);
        arr2.shift();
      }
      return sorter(arr1, arr2, sorted);
    }
  };

  const mergeSort = (arr) => {
    if (arr.length <= 2) {
      return arr.sort((a, b) => a - b);
    } else {
      return sorter(
        mergeSort(arr.slice(0, Math.floor(arr.length / 2))),
        mergeSort(arr.slice(Math.floor(arr.length / 2)))
      );
    }
  };

  return mergeSort(arr);
}

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(arr = []) {
    this.root = arr
  }
  this.root = removeDuplicatesArr(arr)   
  this.root = mergeSorter(removeDups)
  
  buildTree(arr, start, end) {
    if (start > end) {
      return null
    } 
    let mid = (start + end) / 2
    let root = new Node(arr[mid])

    root.left = this.buildTree(arr, start, mid-1)
    root.right = this.buildTree(arr, mid+1, end)
   
    return root
  }
}

let tree = new Tree([1,2,3,4,5,6,7])
console.log(tree.buildTree(this.arr))


