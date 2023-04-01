

  function roll(min,max,elementId){
    const result = generateRandomNumber(min,max)
    console.log(result)
    document.getElementById(elementId).innerHTML = result
  }
  function generateRandomNumber(min, max){
    return Math.floor(Math.random() *( max - min +1) ) +min;
  }