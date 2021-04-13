!(function() {
    fetch("/khach-hang/dashboard").then(e=>e.text()).then(e => {
        document.write(e);
        let _awaitState = setInterval(() => {
            if (window.User) {
                clearInterval(_awaitState);
                console.log(window.User);
            }
        }, 100);
    })
}());