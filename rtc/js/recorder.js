	// AudioRecorder

	import AudioRecorder from 'https://cdn.jsdelivr.net/npm/audio-recorder-polyfill/index.js'
	window.MediaRecorder = AudioRecorder;

	if (MediaRecorder.notSupported) {
		document.querySelector('#noSupport').style.display = 'block';
	}

	let recorder;
	const recordButton = document.querySelector('#record');
	const stopButton = document.querySelector('#stop');
	const audio = document.querySelector('#audio');
	const video = document.querySelector('#video');

	navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
		video.srcObject = stream;
		video.play();
	});

	recordButton.addEventListener('click', () => {
		// Request permissions to record audio
		navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
			recorder = new MediaRecorder(stream);

			// Set record to <audio> when recording will be finished
			recorder.addEventListener('dataavailable', e => {
				audio.src = URL.createObjectURL(e.data);
				audio.style.display = 'block';
			});

			// Start recording
			recorder.start()
		})
	});

	stopButton.addEventListener('click', () => {
		// Stop recording
		recorder.stop();
		// Remove “recording” icon from browser tab
		recorder.stream.getTracks().forEach(i => i.stop())
	});


