const actions4 = Array.from(document.querySelectorAll('[data-action]'));

let counter4 = localStorage.getItem("counter4") || 0;

document.querySelector(".counter-value4").innerText = counter4;

actions4.forEach(action => {
	action.addEventListener('click', () => {
		const action_name = action.dataset.action;

		action.classList.add("animate");

		setTimeout(() => {
			action.classList.remove("animate");
		}, 1000);

		switch (action_name) {
			case 'increase4':
				counter4++;
				break;
			case 'save4':
				localStorage.setItem("counter4", counter4);
                confirm('you wnt to save?');
				break;
		}

		document.querySelector(".counter-value4").innerText = counter4;
	});
});