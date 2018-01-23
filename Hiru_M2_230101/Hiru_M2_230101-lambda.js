let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:si'
	}).promise()
		.then(data => {
			// your code goes here
			console.log('this log is added for data', data);
			//callback(null, data);
		})
		.catch(err => {
			// error handling goes here
			console.log('this log is added for error');
			//callback(null, err);
		});

	sns.getTopicAttributes({
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:Test'
	}).promise()
		.then(data => {
			// your code goes here
			console.log('this log is added for data upulie', data);
			//callback(null, data);
		})
		.catch(err => {
			// error handling goes here
			console.log('this log is added for error upulie');
			//callback(null, err);
		});


	callback(null, 'Successfully executed');
}