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

*SI*
```
	metre, gram, second, minute, hour, day, year, ampere, candela, mole
	(with magnitudes - centi, kilo, mega, etc)

	celsius, fahrenheit, kelvin, rankine
```

*UK Imperial*

```
	uk_foot, uk_thou, uk_inch, uk_yard, uk_chain, uk_furlong, uk_mile, uk_league
```


*US Imperial*

```
To be implemented
```
