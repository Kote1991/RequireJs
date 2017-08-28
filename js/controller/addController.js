define(['view/addView','model/user'],function(AddView,User){
	function start(){
		AddView.render();
		bindEvents();
	}
	function bindEvents(){
        document.getElementById('add').addEventListener('click', function(){
         	var userName = document.getElementById('user-name').value;   
         	var users = JSON.parse(localStorage.users);

	        if(isUserExists(userName,users)){
				users.push(new User(userName));
				localStorage.users = JSON.stringify( users );
				window.location.hash='list';
				/*require(['controller/ListController'], function(ListController){
				ListController.start();
				window.location.hash='list';
				});*/
            }
            else{
            	alert('User already exist or value entered is wrog ... Try again');
            }

        }, false);
    }
    function isUserExists(val,arr){
    	flag = true;
    	if(val === ''){
    		return false;

    	}
		for(var i=0;i<arr.length;i++){
			if(arr[i].name.toLowerCase() === val.toLowerCase()){
				flag =false;
				return false;
			}
		}
		

		return flag;
    }
	return{
	start:start

	};

});