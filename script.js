const sections = document.querySelectorAll('.sections');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
	//BUTTON CLICK
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener('click', () => {
			const currentBtn = sectBtn[i];
			if (currentBtn.classList.contains('active-btn')) return;
			else {
				sectBtn.forEach((element) => element.classList.remove('active-btn'));
				currentBtn.classList.add('active-btn');
			}
		});
	}
}

pageTransitions();
