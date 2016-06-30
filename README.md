# overburn/node-unit-conversion

[![Build Status](https://travis-ci.org/overburn/node-unit-conversion.svg?branch=master)](https://travis-ci.org/overburn/node-unit-conversion)
[![npm version](https://badge.fury.io/js/node-unit-conversion.svg)](https://badge.fury.io/js/node-unit-conversion)

## Installation

Just install the package using npm
```bash
npm install node-unit-conversion
```


## Usage

You just need to call the module with the value you want converted, then pipe through the *from* and *to* functions in any order.

```javascript
	var convert = require('node-unit-conversion');
	var result = convert(100).from('metre').to('centimetre');
	var sameResult = convert(100).to('centimetre').from('metre');
```

## Supported units

Units are being added. Currently the supported units are:

*Length*

metre ( + magnitudes - eg. centimetre, kilometre, ...),
uk foot, uk thou, uk inch, uk yard, uk chain, uk furlong, uk mile, uk league

*Area*


*Volume*



*Mass*

gram ( + magnitudes - eg. kilogram, milligram, ...), tonne

*Time*

second ( + magnitudes - eg. millisecond, nanosecond, ...), minute, hour, day, year

*Electric Current*

ampere ( + magnitudes - eg. milliampere, kiloampere, ...)

*Temperature*

celsius, fahrenheit, kelvin, rankine

*Substance*

mole

*Luminous Intensity*

candela
