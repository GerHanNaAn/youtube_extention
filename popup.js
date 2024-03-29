const btn = document.getElementById('visibleBtn');
btn.addEventListener('click', async () => {
  let res = '2222';
  await chrome.storage.local.set({ speedExtVisible: false });
  await chrome.storage.local.get('speedExtVisible').then((e) => {
    res = e;
    console.log(res);
  });
});
// setTimeout(() => {
//   console.log(сhrome.storage);
// }, 1000);
// console.log(сhrome.storage.local);
// console.log(сhrome.storage.local);
// let extState = сhrome.storage.sync.get({'speedExtVisible'});
// console.log(extState);
// btn.addEventListener('click', () => {
//   if (extState.speedExtVisible) {
//     chrome.storage.local.set({ speedExtVisible: false });
//     btn.innerText = 'Show';
//     return;
//   } else {
//     chrome.storage.local.set({ speedExtVisible: true });
//     btn.innerText = 'Hide';
//     return;
//   }
// });
