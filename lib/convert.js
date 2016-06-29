var mapping = require('./mapping.js');

module.exports = function(value) {
	var convert = {
		value: value,				//The value to be converted

		_from: null, 				//The unit to be converted from
		_fromSystem: null,	//The system the unit to be convertd from is in

		_to: null, 					//The unit to be converted to
		_toSystem: null, 		//The system the unit to be converted to is in

		//Do the actual conversion;
		convert: function() {
			var fromSystem = require('./units/'+_fromSystem);
			var toSystem = require('./units/'+_toSystem);

			var convertedValue = fromSystem[this._from](this.value) * toSystem[this._to](1);

			return convertedValue;
		},

		//Set unit to be converted from
		from: function(unit, system) {
			this._from= unit;
			this._fromSystem = system;
		},

		//Set unit to be converted to
		to: function(unit, system) {
			this._to = unit;
			this._toSystem = system;
		}


	}

	return convert;
}
