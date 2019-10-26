function getUsersList (){
    var usersList = JSON.parse (localStorage.getItem ("usersList"));

    if (usersList == null) {
        usersList = ["jeison.jfmt@gmail.com", "1234"]
    }

    return usersList
} 

function credenciales (pEmail, pPass){
    var usersList = getUsersList();
    var bAccess = false;

    for (var i = 0; i < usersList.length; i++){
        if(pEmail ==usersList[i][0] && pPass == usersList[i][1]){
            bAccess = true;
        }
    }

    return bAccess;
}