chrome.action.onClicked.addListener((tab) => {
  console.log(tab);
  chrome.scripting
    .insertCSS({
      target: { tabId: tab.id },
      css: '#speed_ext_wrap { display: none; }',
    })
    .then(() => console.log('injected a styles'));

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      let speed_ext_wrap = document.getElementById('speed_ext_wrap');
      speed_ext_wrap.style.display === 'none'
        ? (speed_ext_wrap.style.display = 'block')
        : (speed_ext_wrap.style.display = 'none');
    },
  });
});
