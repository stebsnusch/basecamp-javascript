const btn = document.getElementById('myBtn');
const body = document.getElementsByTagName('body')[0];

const listener = function () {
	btn.addEventListener('click', async () => {
		const { paintRed } = await import('./modules/metodos.js');

		paintRed(body);
	});
};

listener();
