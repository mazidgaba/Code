function shuffle(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Swap adjacent elements starting from index 1
    for (let i = 1; i < arr.length - 1; i += 2) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  
    return arr;
  }
  