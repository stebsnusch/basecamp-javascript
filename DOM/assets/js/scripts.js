function toggleMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	body.classList.toggle('dark-mode');
	h1.classList.toggle('dark-mode');
	button.classList.toggle('dark-mode');
	footer.classList.toggle('dark-mode');
}

function changeText() {
	const darkMode = 'Dark Mode';
	const lightMode = 'Light Mode';

	if (h1.classList.contains('dark-mode')) {
		h1.innerHTML = darkMode + ' ON';
		button.innerHTML = lightMode;
		return;
	}

	h1.innerHTML = lightMode + ' ON';
	button.innerHTML = darkMode;
}

const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', toggleMode);
