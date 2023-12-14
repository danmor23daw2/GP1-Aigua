window.onload = function() {
        const puntos = [
            { x: 1060, y: 280, video: 'img/camporegado.mp4', texto: 'Campo de futbol siendo regado lloviendo' },
            { x: 670, y: 300, video: 'enlace-al-video-2.mp4', texto: 'Información del segundo punto.' },
            { x: 860, y: 360, video: 'enlace-al-video-2.mp4', texto: 'Información del tercer punto.' },
            { x: 870, y: 530, video: 'enlace-al-video-2.mp4', texto: 'Información del quarto punto.' },
            { x: 600, y: 650, video: 'enlace-al-video-2.mp4', texto: 'Información del quinto punto.' },

        ];
    
        const mapa = document.getElementById('mapa');
        const popup = document.getElementById('popup');
        const videoElement = document.getElementById('videoPopup');
        const textoElement = document.getElementById('textoPopup');
        const cerrarPopupBtn = document.getElementById('cerrarPopup');
    
        puntos.forEach(punto => {
            const marcador = document.createElement('div');
            marcador.className = 'marcador';
            marcador.style.left = punto.x + 'px';
            marcador.style.top = punto.y + 'px';
    
            marcador.addEventListener('click', function () {
                mostrarPopup(punto);
            });
    
            mapa.appendChild(marcador);
        });
    
        function mostrarPopup(infoPunto) {
            videoElement.src = infoPunto.video;
            textoElement.textContent = infoPunto.texto;
            popup.classList.remove('oculto');
        }
    
        cerrarPopupBtn.addEventListener('click', function () {
            popup.classList.add('oculto');
        });
    
}
