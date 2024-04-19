/* Trova la prima lettera non ripetuta */
let str = 'asadsdsex'

let arr = str.split("")

// ['a', 's', 'a', 'd', 's', 's', 'd', 's', 'e', 'x']

for (let i = 0; i < arr.length; i++) {   
  let lettera = arr[i]
  let checkLettera = ''
  for (let j = 0; j < arr.length; j++) {
    // Non deve essere se stesso
    if (i !== j) {
      if (arr[i] === arr[j]) {
        checkLettera = arr[i]
        break
      }
    }
  }

  if (checkLettera !== arr[i]) {
    console.log(arr[i])
    break
  }
}
