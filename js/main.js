require(['model/User','Router'], function(User,Router){
    
    var users = [new User('Kotresh'),
                 new User('Karthik'),
                 new User('Rakesh'),
                 new User('M.B.P'),
                 new User('B.S.T')];
    
    for (var i = 0, len = users.length; i < len; i++){
        console.log(users[i].name);
    }
    
    localStorage.users = JSON.stringify(users);

  Router.startRouting()
});



/*
require(['model/User','controller/ListController','controller/addController'], function(User,ListController,AddController){
    
    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];
    
    for (var i = 0, len = users.length; i < len; i++){
        console.log(users[i].name);
    }
    
    localStorage.users = JSON.stringify(users);

    ListController.start();
    AddController.start();
});

*/