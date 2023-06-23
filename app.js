


let count = 0;    // 1. aşama 

const counter = document.getElementById('counter');  // 2. aşama 

const increaseButton = document.getElementById('increaseButton'); // 3. aşama 
const decreaseButton = document.getElementById('decreaseButton');  // 4. aşama 


console.log(counter);    // 3. aşam dan sonra clg at ve göster 

console.log(increaseButton);

console.log(decreaseButton);




increaseButton.addEventListener('click', () => {   // 5. aşama 
  count++;
  counter.textContent = count;
});

decreaseButton.addEventListener('click', () => {   // 6. aşama 
  count--;
  counter.textContent = count;
});