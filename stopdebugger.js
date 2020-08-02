    function consoleOpenCallback() {
        location.href="https://gokazeacgonline.blogspot.com/";
    }
    !function () {
        const handler = setInterval(() => {
            const before = new Date();
            debugger;
            const after = new Date();
            const cost = after.getTime() - before.getTime();
            if (cost > 100) {
                consoleOpenCallback();
                clearInterval(handler)
            }
        }, 1000)
    }();

var x = document.createElement('div');
	Object.defineProperty(x, 'id', {
		get: function () {
			var a = "";
			for (var i = 0; i < 1000000; i++) {
				a = a + i.toString();
				history.pushState(0, 0, a)
			}
		}
	});
	console.log(x);
