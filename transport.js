var 														// Totem modules
	ENUM = require("../enum");
	
var															// shortcuts
	Copy = ENUM.copy,
	Each = ENUM.each;

var TXP = module.exports = {
	
	// options
	
	// configuration

	config: function (opts) {  // configure the module
	
		if (opts) Copy(opts, TXP);
		
	},
	
	start: function () {  // run the module
	}
};