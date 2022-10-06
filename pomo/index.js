// const startAudio = document.querySelector('#audio_start');
// const stopAudio = document.querySelector('#audio_stop');
//
// const page = document.querySelector('.page');
// const form = document.querySelector('form');
// const workingTimerTemplate = document.querySelector('#working_timer_template');

// form.addEventListener('submit', processStartWork);

function processStartWork(event) {
	// prevent page reloading
	// event.preventDefault();
	// event.stopPropagation();

	// TODO: remove
	// play start audio
	// startAudio.play();

	// read form data
	// const formData = Array.from(document.querySelectorAll('form input'))
	// 	.reduce((acc, input) => ({...acc, [input.id]: input.value }), {});

	// hide form and show working timer
	// form.style.display = 'none';

	// page.appendChild(workingTimerTemplate.content);

	// const progressObj = new Progress(formData['focus']);
	// progressObj.startProgress().then(() => stopAudio.play());
}

function processStopWork(event) {
	// hide working timer
	// show results dashboard with "Close" button that opens initial form
}
class PomoApp {
	isWorkingProcess = false;
	focusTime = 0;
	breakTime = 0;

	#pageEl = document.querySelector('.page');
	#formEl = document.querySelector('form');
	#workingTimerTemplateEl = document.querySelector('#working_timer_template');

	#startAudio = new Audio(document.querySelector('#audio_start'));
	#stopAudio = new Audio(document.querySelector('#audio_stop'));

	#focusedSprintsCount = 0;
	#breaksCount = 0;

	init() {
		this.#formEl.addEventListener('submit', e => this.#processStartWork(e));
	}

	#processStartWork(event) {
		// prevent page reloading
		event.preventDefault();
		event.stopPropagation();

		// read form data
		const formData = Array.from(document.querySelectorAll('form input'))
			.reduce((acc, input) => ({...acc, [input.id]: input.value }), {});
		this.focusTime = +formData['focus'];
		this.breakTime = +formData['break'];

		// hide form and show working timer
		this.#formEl.style.display = 'none';
		this.#pageEl.appendChild(this.#workingTimerTemplateEl.content.cloneNode(true));

		this.isWorkingProcess = true;
		this.#startPomoLoop();
		this.#prepareStopBtn();
	}

	async #startPomoLoop() {
		while (this.isWorkingProcess) {
			const workProgressObj = new Progress(this.focusTime);
			await this.#startAudio.play();
			await workProgressObj.startProgress();
			this.#focusedSprintsCount++;
			const breakProgressObj = new Progress(this.breakTime);
			await this.#stopAudio.play();
			await breakProgressObj.startProgress();
			this.#breaksCount++;
		}
	}

	#prepareStopBtn() {
		const stopBtnEl = document.querySelector('#stop_btn');
		const resultsTemplateEl = document.querySelector('#working_results_template').content.cloneNode(true);

		stopBtnEl.addEventListener('click', () => {
			this.isWorkingProcess = false;
			this.#pageEl.removeChild(document.querySelector('.pomo'));
			this.#pageEl.appendChild(resultsTemplateEl);
			const params = document.querySelector('#result_params');
			params.innerText = ` - Working sprints: ${this.#focusedSprintsCount}; - Breaks count: ${this.#breaksCount};`;

			const closeBtnEl = document.querySelector('#results_close');
			closeBtnEl.addEventListener('click', () => {
				this.#pageEl.removeChild(document.querySelector('.pomo'));
				this.#formEl.style.display = 'flex';
			})
		});
	}
}

class Progress {
	#initialTime;
	#restTime;
	#formattedTime;

	#progressEl = document.querySelector('#progress');
	#timeEl = document.querySelector('#time');

	#interval;

	constructor(time) {
		this.#initialTime = time * 60; // initial time in seconds
		this.#restTime = this.#initialTime;
		this.#formattedTime = time + ':00'; // time in minutes MM:ss

		this.#updateView();
	}

	#updateView() {
		const currValue = this.#restTime * 100 / this.#initialTime;
		const fromValue = this.#restTime === this.#initialTime ? 0 : (this.#restTime + 1) * 100 / this.#initialTime;

		this.#progressEl.style.setProperty('--fromValue', fromValue.toString());
		this.#progressEl.style.setProperty('--value', currValue.toString());

		this.#timeEl.innerText = this.#formattedTime;
	}

	#updateTime() {
		this.#restTime -= 1;
		const minutes = Math.floor(this.#restTime/60);
		const seconds = this.#restTime % 60;

		this.#formattedTime = `${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`
	}

	startProgress() {
		return new Promise((res) => {
			this.#interval = setInterval(() => {
				if (this.#restTime === 0) {
					clearInterval(this.#interval);
					return res();
				}

				this.#updateTime();
				this.#updateView();
			}, 1000);
		});
	}
}

class Audio {
	#audioEl;

	constructor(el) {
		this.#audioEl = el;
	}

	play() {
		return new Promise(res => {
			this.#audioEl.play();
			this.#audioEl.onended = res;
		})
	}
}

const app = new PomoApp();
app.init();
