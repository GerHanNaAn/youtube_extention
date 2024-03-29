console.log('popup.js');
// console.log(
//   chrome.tabs.getAllInWindow(
//     1 // optional integer
//   )
// );
// document.getElementById('visibleBtn').addEventListener('click', () => {
//   console.log('click');
// });
console.log(document.getElementById('visibleBtn'));
console.log(document);

const btn = document.getElementById('visibleBtn');

btn.addEventListener('click', () => {
  console.log('click');
  chrome.tabs.create({ url: 'https://www.youtube.com/' });
});
console.log('test');
