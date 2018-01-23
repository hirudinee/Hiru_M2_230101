let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	sns.subscribe({
		Protocol: 'email',
		Endpoint: 'hirudineel@gmail.com',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:hiru_topic'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});

	callback(null, 'Successfully executed');
}