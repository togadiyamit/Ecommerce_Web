const actions = Array.from(document.querySelectorAll('[data-action]'));

let counter = localStorage.getItem("counter") || 0;

document.querySelector(".counter-value1").innerText = counter;

actions.forEach(action => {
	action.addEventListener('click', () => {
		const action_name = action.dataset.action;

		action.classList.add("animate");

		setTimeout(() => {
			action.classList.remove("animate");
		}, 1000);

		switch (action_name) {
			case 'increase1':
				counter++;
				break;
			case 'save1':
				localStorage.setItem("counter", counter);
                confirm('you wnt to save?');
				break;
		}

		document.querySelector(".counter-value1").innerText = counter;
	});
});