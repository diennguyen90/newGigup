
'use strict';

var Event = require('../api/event/event.model');


Event.find({}).remove(function() {
  Event.create({
    name : "Dien's Birthday",
    type : 'Birthday',
    time : '',
    address : '1234 willow tree, garden grove',
    description: "Where my models at!"

  }, {
    name : "Kimberly's",
    type : 'Wedding',
    time : '',
    address : ' 123',
    description: " Looking for a dj for my event! Please contact me for info."
  }, {
    name : "Johnny's Birthday Day Bash",
    type : 'Birthday',
    time : '',
    address : '',
    description: 'looking for spacious venue! Let me know if any is available! Will pay lots!'
  },  {
    name : "Jim and Kelly's",
    type : 'Wedding',
    time: '',
    address: '',
    description: 'Getting Married in a couple of months! In need of a photographer!'
  },  {
    name : "Josn and Molly's",
    type : 'Wedding',
    time : '',
    address : '',
    description: 'Need a private chef asap! Contact us!'
  },{
    name : "Ronald's",
    type : 'Birthday',
    time : '',
    address: 'Any birthday planner?',
  });
});