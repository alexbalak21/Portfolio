const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransitions() {
	//BUTTON CLICK
	//BUTTON ANIMATION
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener('click', () => {
			const currentBtn = sectBtn[i];
			if (currentBtn.classList.contains('active-btn')) return;
			else {
				sectBtn.forEach((element) => element.classList.remove('active-btn'));
				currentBtn.classList.add('active-btn');
			}
			const id = currentBtn.dataset.id;
			sections.forEach((section) => section.classList.remove('active'));
			document.getElementById(id).classList.add('active');
		});
	}
}

pageTransitions();
