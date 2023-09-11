// Problem 1: Find the Symmetric Difference
function sym(...args) {
    let uniqueElementArray = []
    let finalArray = []
      for(let i=0; i<args.length;i++){
          uniqueElementArray.push([...new Set(args[i])])
      }
      for(let a=0;a<uniqueElementArray.length;a++){
          for(let b=0;b<uniqueElementArray[a].length;b++){
              if(!finalArray.includes(uniqueElementArray[a][b])){
                  finalArray.push(uniqueElementArray[a][b])
              }
              else{
                  finalArray.splice(finalArray.indexOf(uniqueElementArray[a][b]), 1)
              }
          }
      }
    return finalArray.sort();
}

sym([1, 2, 3], [5, 2, 1, 4]);