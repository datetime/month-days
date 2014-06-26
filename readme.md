# month-days [![Build Status](https://travis-ci.org/sindresorhus/month-days.svg?branch=master)](https://travis-ci.org/sindresorhus/month-days)

> Get the number of days in a month


## Install

```sh
$ npm install --save month-days
```


## Usage

```js
var monthDays = require('month-days');

monthDays(1, 2016);
//=> 29
```


## API

### monthDays([month], [year])

#### month

Type: `number`  
Default: current UTC month

Note that month is zero-index to be consistent with the native date methods.

#### year

Type: `number`  
Default: current UTC year


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
