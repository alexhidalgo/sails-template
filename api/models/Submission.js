/**
* Submission.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	turnedInAt : { type: 'datetime', unique: false, required: true },
  	url: { type: 'string', unique: false, required: true },
  	userId: { type: 'integer', unique: false, required: true },
  	assignmentId: { type: 'integer', unique: false, required: true },
  	notes: { type: 'text', unique: false, required: true },
  	status: { type: 'integer', unique: false, required: true}

  }
};

