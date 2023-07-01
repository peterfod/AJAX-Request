document.body.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var users = JSON.parse(this.responseText);
            var userList = '<tr><th>name</th><th>email</th><th>city</th></tr>';
            for (const user of users) {
                userList += '<tr><td>' + user.name + '</td><td>' + user.email + '</td><td>' + user.address.city + '</td></tr>';
            }
            document.getElementById('list-users').innerHTML = userList;
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send();
}