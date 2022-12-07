const actions3 = Array.from(document.querySelectorAll('[data-action]'));

let counter3 = localStorage.getItem("counter3") || 0;

document.querySelector(".counter-value3").innerText = counter3;
	
actions3.forEach(action => {
	action.addEventListener('click', () => {
		const action_name = action.dataset.action;

		action.classList.add("animate");

		setTimeout(() => {
			action.classList.remove("animate");
		}, 1000);

		switch (action_name) {
			case 'increase3':
				counter3++;
				break;
		
			case 'save3':
				localStorage.setItem("counter3", counter3);
                confirm('you wnt to save?');
				break;
			
		}

		document.querySelector(".counter-value3").innerText = counter3;
	});
});