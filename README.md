# overburn/node-unit-conversion


## Installation

Just install the package using npm
```bash
npm install node-unit-conversion
```


## Usage

You just need to call the module with the value you want converted, then pipe through the *from* and *to* functions in any order.

```javascript
	var convert = require('node-unit-conversion');
	var result = convert(100).from('meter').to('centimeter');
	var sameResult = convert(100).to('centimeter').from('meter');
```

## Supported units

Units are being added. Currently the supported units are:

*SI*
```

	metre, gram, second, minute, hour, day, year, ampere, candela, mole - With magnitudes (centi, kilo, etc)

	celsius, fahrenheit, kelvin, rankine
```


*UK Imperial*

```
To be implemented
```


*US Imperial*

```
To be implemented
```
