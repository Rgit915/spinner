//Refactoring animation of the spinner

process.stdout.write('hello from spinner2.js... \rheyyy\n');

// we put the spinner characters in to an array 'char'
const characters = ['|', '/', '-', '\\'];

// set the initial delay = 100ms 
let delay = 100;
for (const char of characters) {
  
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
      
    }, delay);
    //after each iteration increment the delay by 200ms
    delay += 200;
}
//for the last char after the last delay
setTimeout(() => {
  console.log('\r|');
}, delay);


