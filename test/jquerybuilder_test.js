'use strict';

var grunt = require('grunt');
// Load local tasks.
grunt.loadTasks('tasks');

exports.nodeunit = {
  placeholder: function (test) {
    test.expect(1);
    test.ok(true, 'this had better work.');
    test.done();
  }
};