document.addEventListener('visibilitychange', e => {
    const state = document.visibilityState;
    console.log({
        visible: 'Estas viendo la pagina',
        hidden: 'No estas viendo la pagina'
    }[state]);
    console.log(e);
})

