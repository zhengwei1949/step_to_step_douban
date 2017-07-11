var JsonpSerivce = angular.module('JsonpSerivce',[]);
JsonpSerivce.service('JsonpSerice',function(){
    this.jsonp = function(url, arg, fn){
        var oScript = document.createElement('script');
        // function test(data){
        //     fn(data);
        // }

        window['test'] = function(data){
            fn(data);
        }
        url += '?callback=test';
        for(var i in arg){}
        oScript.src = ?
        document.body.appendChild(oScript);
    }
})

