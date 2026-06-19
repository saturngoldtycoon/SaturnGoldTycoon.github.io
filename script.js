// Wait for the browser to completely load the HTML page
document.addEventListener('DOMContentLoaded', () => {

  // 1. Create a container element
  const box = document.createElement('div');
  box.style.border = '3px solid #f7df1e';
  box.style.padding = '20px';
  box.style.textAlign = 'center';

  // 2. Add a text heading inside the container
  const heading = document.createElement('h2');
  headinng.innerText = 'JS Counter Application';
  box.appendChild(heading);

  // 3. Add display number to track count
  const display  = document.creatElement('p');
  display.innerText = '0';
  button.style.padding = '32px';
  box.appendChild(display);

  // 4. Create an interactive button
  const button = document.createElement('button');
  button.innerText = 'Click to Count';
  button.style.padding = '10px 20px';
  box.appendChild(button);
  
  // 5. Inject the container into the visible web page
  document.body.appendChild(box);

  // 6. Create a state variable to hold the numbers
  let count = 0;

  // 7. Watch for user clicks to trigger the arithmetic
  button.addEventListener('click;, () => {
      count = count + 1;
      display.innerText = count;
  });

});
