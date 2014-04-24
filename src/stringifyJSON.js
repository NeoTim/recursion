// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var each = function(array, cb){
	for (var i = 0; i < array.length; i++) {
		cb(array[i], i, array);
	}
};
var log = function(input, here){
	if(here) {
		console.log("--- " + input);
		
	} else {

		console.log(input);
	}
};

//stringifyJSON
var stringifyJSON = function(obj) {
	
	// your code goes here
	//console.log(JSON.stringify);
	var str = "";		
	if(obj === null){
		return "null";
	}	
	if (typeof obj === 'string'){
		var num = obj.toString();
		if(num.match(/[0-9]/)){
			str += num;
		} else {
			str += '"' + obj + '"';
		}
		
		//return str;
		
	} else if (typeof obj === 'object'){		
		if(Array.isArray(obj)){
			str += '[';
			if(obj.length){
				if(obj.length < 1){
					str += stringifyJSON(obj);
				} else {
					//var last = 
					for (var i = 0; i < obj.length; i++) {
						//console.log(stj(obj[i]) true);
						str += stringifyJSON(obj[i]);

						if(i !== obj.length-1 ){
							str += ',';
						}									
					}
				}
			} else {

			}
			str += ']';						
		} else {
			str += '{';
				var last = Object.keys(obj).pop();
				for(var key in obj){
					if(typeof obj[key] === 'function' || obj[key] === undefined){

					} else {						
						str += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
						if(key !== last){
							str += ',';
						}
					}
				}			
			str += '}';
		}

	} else if(typeof obj === 'function'){
		
		
		//str += {};
		
	} else if(obj === true) {			
		str += true;
	} else if(obj){
		
		str += obj;
	} else if(obj === 0) {
		str += 0;
	} else {
		str += false;
	}
	
	//console.log(obj)
	return str;
	
};
unstringifiableValues = [
  {
    'functions': function(){},
    'undefined': undefined
  }
];



each(unstringifiableValues, function(item){
	console.log( stringifyJSON(item));
	//console.log(  JSON.stringify(item))
});
//log(stringifyJSON([[[["foo"]]]]))
//log(JSON.stringify(  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]))
//log(stringifyJSON(  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]))
 //return JSON.stringify(obj);
/*function makeString(item){
				
				if(string.match(/[0-9]/)){
					str += string;
				} else {
					str += '"' + obj + '"';
				}
				return str += ']';
	}

	if(obj === null){
		return "null";
	} else if(obj.length){
		if(Array.isArray(obj)){     


			var str = '[';
			if(obj.length === 1){
				
			} else {
									for (var i = 0; i < obj.length; i++) {
										
						 str += '"' + obj +'"';
									};
				return str += ']';
			}
			

			//console.log(String("[" + string+ "]"));
			//console.log("[" + String(string) + "]");
			console.log(obj);
			//return "[" + string+ "]";
		} else if(!obj.length){

			return [];

		} else {
			//var 'obj' = obj;
			return obj;
		}

	} else if(!obj.length){
		if(obj.length === 0){
			return "[]";
			//console.log(String("[]"));
		}
		//  console.log(obj);
	//alert(toString(obj));
		return String(obj);

	} else {
		//console.log(obj);
		return "hello";
	}
		
*/