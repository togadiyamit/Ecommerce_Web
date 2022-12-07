const actions2 = Array.from(document.querySelectorAll('[data-action]'));

let counter2 = localStorage.getItem("counter2") || 0;

document.querySelector(".counter-value2").innerText = counter2;
	
actions2.forEach(action => {
	action.addEventListener('click', () => {
		const action_name = action.dataset.action;

		action.classList.add("animate");

		setTimeout(() => {
			action.classList.remove("animate");
		}, 1000);

		switch (action_name) {
			case 'increase2':
				counter2++;
				break;
		
			case 'save2':
				localStorage.setItem("counter2", counter2);
                confirm('you wnt to save?');
				break;
			
		}

		document.querySelector(".counter-value2").innerText = counter2;
	});
});