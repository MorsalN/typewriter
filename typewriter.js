const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => process.stdout.write(char), delay);
  delay += 50;
}

//this setTimeout will go after the for loop is done 
setTimeout(() => {
  console.log('\n')
}, delay);


//another way
// const sentence = "hello there from lighthouse labs";
// let delay = 50;

// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);

//     // on the last character, add a newline
//     if (i === sentence.length - 1) {
//       process.stdout.write('\n');
//     }

//   }, delay);
  
    
//   delay += 50;
// }