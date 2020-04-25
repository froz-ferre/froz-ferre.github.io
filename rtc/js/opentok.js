// secret: ad30f6043e2469b43a8a164b6e5812d027424166
// var apiKey = "46671572";
// var sessionId = "YOUR_SESSION_ID";
// var token = "YOUR_TOKEN";

let apiKey = '45828062';
let sessionId = '2_MX40NTgyODA2Mn5-MTU4Njc3NzY4NjE1N345VEUwREdoL2hkSnBEQnZocTVYTUtlRWt-UH4';
let token = 'T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MmNjNTNhYWVhOWVmZTNlOTQ5YjIyYjE2NGE3NTY2YjYxYjI0YWU4YjpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UVTROamMzTnpZNE5qRTFOMzQ1VkVVd1JFZG9MMmhrU25CRVFuWm9jVFZZVFV0bFJXdC1VSDQmY3JlYXRlX3RpbWU9MTU4Njc3NzY5NiZub25jZT0wLjM2MDY2NDc3ODM1NDY4NTkmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU4Njg2NDA5Ng==';

// (optional) add server code here
// initializeSession();
const SERVER_BASE_URL = 'http://localhost:8080';
fetch(SERVER_BASE_URL + '/session').then(function(res) {
	return res.json()
}).then(function(res) {
	apiKey = res.apiKey;
	sessionId = res.sessionId;
	token = res.token;
	initializeSession();
}).catch(handleError);

// Step 2

// Handling all of our errors here by alerting them
function handleError(error) {
	if (error) {
		alert(error.message);
	}
}

function initializeSession() {
	const session = OT.initSession(apiKey, sessionId);

	// Subscribe to a newly created stream
	// session.on('streamCreated', function(event) {
	// 	session.subscribe(event.stream, 'subscriber', {
	// 		insertMode: 'append',
	// 		width: '100%',
	// 		height: '100%'
	// 	}, handleError);
	// });

	// Create a publisher
	const publisher = OT.initPublisher('publisher', {
		videoSource: 'screen',
		insertMode: 'append',
		width: '100%',
		height: '100%'
	}, handleError);

	// Connect to the session
	session.connect(token, function(error) {
		// If the connection is successful, publish to the session
		if (error) {
			handleError(error);
		} else {
			session.publish(publisher, handleError);
		}
	});
}
