const rangeElem = `
	<input 
		type="range" 
		name="speed" 
		id="speedId" 
		value="1"
		min="0.1" 
		max="10" 
		step="0.1" 
		style="
			width: 300px;
		"
	/>
`;
const wrap = document.createElement('div');
wrap.style =
	'position: fixed; z-index: 9999; top: 0; left: 0; padding: 10px; background-color: tomato;';
wrap.innerHTML = rangeElem;

document.body.prepend(wrap);
const rangeHTML = document.getElementById('speedId');

let speedValue = rangeHTML.value;
const speedValueHtml = document.createElement('p');
speedValueHtml.style = 'color: white; font-size: 20px;';
speedValueHtml.innerHTML = `Speed: ${speedValue}`;

wrap.append(speedValueHtml);

rangeHTML.addEventListener('input', (e) => {
	speedValue = e.target.value;
	speedValueHtml.innerHTML = `Speed: ${speedValue}`;
	console.log(speedValue);
	document.getElementsByClassName('video-stream html5-main-video')[0].playbackRate = speedValue;
});

// console.log(chrome.tabs.create({ url: 'https://www.youtube.com/' }));
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.tabs.create({ url: 'https://www.youtube.com/' });
// });
console.log(1111);
console.log(1111);
