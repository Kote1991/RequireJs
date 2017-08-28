define(function(){

    var routes = [{hash:'#list', controller:'ListController'},
                  {hash:'#add',  controller:'AddController'}];
    var defaultRoute = '#list';
    var currentHash = '';
    
    function startRouting(){
        window.location.hash = window.location.hash || defaultRoute;
		//loadController('addController');				
        setInterval(hashCheck, 1000);
    }
    function hashCheck(){
        if (window.location.hash != currentHash){
            for (var i = 0, currentRoute; currentRoute = routes[i++];){
                if (window.location.hash == currentRoute.hash){
					loadController(currentRoute.controller);				
				}  
				
                    
            }
            currentHash = window.location.hash;
        }
    }
    function loadController(controllerName){
        require(['controller/' + controllerName], function(controller){
            controller.start();
        });
    }
    return {
        startRouting:startRouting
    };
});