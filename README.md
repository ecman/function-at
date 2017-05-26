# function-at

[![build status](https://api.travis-ci.org/ecman/function-at.png)](https://travis-ci.org/ecman/function-at) [![codecov](https://codecov.io/gh/ecman/function-at/branch/master/graph/badge.svg)](https://codecov.io/gh/ecman/function-at) [![Code Climate](https://codeclimate.com/github/ecman/function-at/badges/gpa.svg)](https://codeclimate.com/github/ecman/function-at)

Pass functions with adjusted arguments

# Usage

```js
require('function-at');

function thenable(name) {
  if (!name) return Promise.reject(
    new TypeError('name string required'));
  var greeting = 'Hello, ' + name + '!';
  return Promise.resolve(greeting);
}

// Normal callback
function callback(error, result) {
  console.log('calback ---------------');
  console.log('  error:', error);
  console.log('  result:', result);
}

thenable('Friday')
  // On fulfillment 
  // set error to null
  .then(callback.atfirst(null))
```

Output:

```text
calback ---------------
  error: null
  result: Hello, Friday!
```

Catch example:

```js
// Given the thenable() and callback()
// functions definitions...

thenable() 
  // On rejection 
  // set result to empty string
  .catch(callback.atlast(''));
```

Catch output:

```text
calback ---------------
  error: [TypeError: name string required]
  result: 
```
