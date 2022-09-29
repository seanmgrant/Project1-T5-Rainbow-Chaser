const position = document.documentElement;

position.addEventListener("mousemove", (event) => {
        position.style.setProperty('--x', event.clientX + 'px');
    });