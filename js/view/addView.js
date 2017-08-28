define(function(){
    
    function render(parameters){
        var appDiv = document.getElementById('app');
        appDiv.innerHTML = '<input id="user-name" /><button id="add">Add user</button>';
    }
    
    return {
        render:render
    };
});