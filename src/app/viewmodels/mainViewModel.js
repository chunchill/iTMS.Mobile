define(['services/userServices'], function (userService) {

    document.getElementsByTagName('html')[0].style.display = "block";
    var userName = ko.observable('itms'),
        option = {username: userName()},
        login = function () {

            userService.loginDriver(option).then(function (result) {
                if (result.errorMessage !== '') alert(result.errorMessage);
                $.mobile.changePage("#indexpage");
            })
        };


    //public methods & Properties
    return {
        userName: userName,
        login: login
    };
});
