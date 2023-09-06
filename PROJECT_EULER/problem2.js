// Problem 2: Even Fibonacci Numbers
function fiboArray(n) {
    let array = []
    for (let i = 1; i <= n; i++) {
      if (array.length < 2) {
        array.push(i)
      }
      else {
        let nextNumber = array.slice(-2).reduce((sum, arr) => sum + arr, 0)
        if (nextNumber > n) {
          return array
        }
        else {
          array.push(nextNumber)
        }
      }
    }
  }
  
  function fiboEvenSum(n) {
    let fibonacciArray = fiboArray(n)
    return fibonacciArray.reduce((fibo, arr) => arr % 2 == 0 ? fibo + arr : fibo + 0, 0)
  }