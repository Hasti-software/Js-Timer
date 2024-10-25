var usermin = +prompt('Enter your min : ')
var usersec = +prompt('Enter your secend : ')

var timer = setInterval(function () {
    if (usersec === -1 ){
       usermin--
       usersec = 59
    }

    if (usermin === 0 && usersec === 0) {
        clearInterval(timer)
        alert('time is up')
    }

    console.log(usermin + ' : ' + usersec)
    usersec--
}, 1000)