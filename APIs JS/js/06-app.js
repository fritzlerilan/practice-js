const microfono = document.querySelector('#microfono');
const salida = document.querySelector('#salida');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onstart = function () {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    recognition.onspeechend = function () {
        salida.textContent = 'Se dejo de grabar';
        recognition.stop();
    }

    recognition.onresult = function (event) {
        const { confidence, transcript } = event.results[0][0];
        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;
        salida.appendChild(parrafo);

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Confianza: ${ParseInt(confidence) * 100}`;

    }
}