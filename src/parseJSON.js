// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  
};


/*function obj2json(_data){
    str = (($.type(_data)== 'array')?'[ ': '{ ');
    first = true;
    $.each(_data, function(i, v) { 
        if(first != true)
            str += ",";
        else first = false;
        if ($.type(v)== 'object' )
            str += '"' + i + '":' + obj2json(v) ;
        else if ($.type(v)== 'array')
            str += '"' + i + '":' + obj2json(v) ;
        else{
            if($.type(_data)== 'array')
                str += '"' + v + '"';
            else
                str +=  '"' + i + '":"' + v + '"';
        }
    });
    return str+= (($.type(_data)== 'array')? ' ] ':' } ');;
}*/