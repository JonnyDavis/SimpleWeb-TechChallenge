import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
	return sleep(1000).then(() => { // simulate server latency
		if (!['jonny199@hotmail.co.uk', 'jonnydavis39@yahoo.co.uk', 'tester@test.com'].includes(values.email)) {
			throw new SubmissionError({
				email: 'User does not exist',
				_error: 'Login failed!',
			});
		} else if (values.password !== 'tester') {
			throw new SubmissionError({
				password: 'Wrong password',
				_error: 'Login failed!',
			});
		}
	});
}

export default submit;