// import AWS from "aws-sdk";

// AWS.config.update({ region: "us-east-1" });

// const cloudwatchlogs = new AWS.CloudWatchLogs();

// export function logEvent(message) {
//   const params = {
//     logGroupName: "FindRaiserUserActivity",
//     logStreamName: "UserActivityStream",
//     logEvents: [
//       {
//         message: JSON.stringify(message),
//         timestamp: new Date().getTime(),
//       },
//     ],
//   };

//   cloudwatchlogs.putLogEvents(params, function (err, data) {
//     if (err) console.error(err, err.stack);
//     else console.log("Logged successfully:", data);
//   });
// }
