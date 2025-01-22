
'use strict';

const DynamoDB = require("aws-sdk/clients/dynamodb");
const documentClient = new DynamoDB.DocumentClient({ region: "ap-south-1" });


exports.createNote = async (event, context, cb) => {
  let data = JSON.parse(event.body);
  try {
    const params = {
      TableName: notes,
      Item: {
        notesId: data.id,
        title: data.title,
        body: data.body,
      },
      ConditionExpression: "attribute_not_exists(notesId)",
    };
    await documentClient.put(params).promise();
    cb(null, send(201, data));
  } catch (err) {
    cb(null, send(500, err.message));
  }
};

exports.updateNote = async (event) => {
  let noteID = event.pathParameters.id
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "The noteID with " + noteID + " has been updated!",
    }),
  };
};
exports.deleteNote = async (event) => {
  let noteID = event.pathParameters.id
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "The noteID with " + noteID + " has been deleted!",
    }),
  };
};
exports.getNote = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "All Notes are returned Successfully!",
    }),
  };
};

