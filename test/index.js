'use strict';
require('../');
var assert = require('assert');

function who_what_how(who, what, how) {
  console.log.apply(console, arguments);
  return who + ' ' + what + ' ' + how;
}

var who_walk_fast = who_what_how.atlast('walk', 'fast');
var you_run_how = who_what_how.atfirst('You', 'run');
var i_what_sometimes = who_what_how.at(['I'], ['sometimes']);

assert.strictEqual(
  who_walk_fast('They'),
  'They walk fast',
  'At last should append arguments to callers'
);
console.log("atlast() OK\n");

assert.strictEqual(
  you_run_how('sideways'),
  'You run sideways',
  'At first should prepend arguments to callers'
);
console.log("atfirst() OK\n");

assert.strictEqual(
  i_what_sometimes('jump'),
  'I jump sometimes',
  'At should prepend and append arguments to callers'
);
console.log("at() OK\n");

