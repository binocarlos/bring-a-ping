#!/usr/bin/env node
var args = require('minimist')(process.argv, {
	alias:{
		't':'timeout',
		's':'string'
	},
	default:{		
		'string':'ping'
	}
})

function ping(){
	console.log(args.string)
}

function loop(){
	timeout = typeof(args.timeout)=="number" ? args.timeout : 1000
	ping()
	setInterval(ping, timeout)
}

if(args.timeout){
	loop()
}
else{
	ping()
}