// --- ESTADO GLOBAL ---
let oxygen = 100;
let typeSpeed = 25; 

// --- ELEMENTOS DEL DOM ---
const screenEl = document.getElementById('screen');
const controlsEl = document.getElementById('controls');
const terminalEl = document.getElementById('terminal');
const locationTag = document.getElementById('location-tag');
const oxygenMeter = document.getElementById('oxygen-meter');
const modal = document.getElementById('manual-modal');

// --- DATOS DEL GUION (Resumidos para el ejemplo) ---
const scriptData = {
    intro: "> INICIANDO CONEXIÓN SECRETA...\n> La Nostromo está a la deriva. Sistemas lógicos caídos.\n> El organismo está a bordo.",
    bridge: {
        title: "01: PUENTE DE MANDO",
        text: "> MADRE: Los servidores físicos están intactos, pero el OS fue eliminado. Instala Windows Server (Desktop Experience) para recuperar el control.",
        manualTitle: "MANUAL_W-Y.pdf",
        manualText: "Instala UI para gestión rápida. Separa el OS (C:) de Datos (D:). Configura Active Directory (AD DS)."
    },
    lab: {
        title: "02: LABORATORIO",
        text: "> MADRE: Ácido en el servidor. Instala Ubuntu Server (CLI) y levanta PostgreSQL para leer los apuntes biológicos.",
        manualTitle: "DIARIO_ASH.log",
        manualText: "Usa Ubuntu Server (sin GUI). Instala: sudo apt-get install postgresql."
    }
};

// --- CONTROLADOR DEL VISOR CENTRAL ---
function setDisplayImage(imgSrc) {
    const display = document.getElementById('main-display');
    const img = document.getElementById('display-img');
    if(imgSrc) {
        img.src = imgSrc;
        display.classList.remove('hidden');
    } else {
        display.classList.add('hidden');
    }
}
// --- MOTOR DE MÁQUINA DE ESCRIBIR (ACTUALIZADO CON ANIMACIÓN) ---
function typeWriter(text, callback) {
    screenEl.innerHTML = '';
    controlsEl.innerHTML = ''; 
    let i = 0;
    const formattedText = text.replace(/\n/g, '<br>');
    
    // Seleccionamos la imagen del avatar y le añadimos la clase de animación
    const avatarImg = document.querySelector('.avatar-madre img');
    if(avatarImg) avatarImg.classList.add('is-talking');
    
    function type() {
        if (i < formattedText.length) {
            if(formattedText.substring(i, i+4) === '<br>') {
                screenEl.innerHTML += '<br>';
                i += 4;
            } else {
                screenEl.innerHTML += formattedText.charAt(i);
                i++;
            }
            screenEl.scrollTop = screenEl.scrollHeight;
            setTimeout(type, typeSpeed);
        } else {
            // Cuando termina el texto, quitamos la animación
            if(avatarImg) avatarImg.classList.remove('is-talking');
            if (callback) callback();
        }
    }
    type();
}

// --- SISTEMA DE TRANSICIÓN DE NODOS ---
function transitionToNode(nodeIndex, themeClass, tagText, callback) {
    // 1. Efecto Fade Out
    terminalEl.classList.add('fade-out');
    
    // 2. Actualizar el UI del Tracker lateral
    document.querySelectorAll('.node').forEach((el, index) => {
        el.classList.remove('active');
        if(index < nodeIndex) el.classList.add('completed');
        if(index === nodeIndex) el.classList.add('active');
    });

    // 3. Esperar a que termine la animación, cambiar datos y hacer Fade In
    setTimeout(() => {
        terminalEl.className = `terminal-container ${themeClass}`; // Cambiar paleta de colores
        locationTag.innerText = tagText;
        screenEl.innerHTML = '';
        controlsEl.innerHTML = '';
        
        terminalEl.classList.remove('fade-out');
        
        // Iniciar el contenido del nuevo nodo
        setTimeout(callback, 500);
    }, 800); // 800ms coincide con la transición de CSS
}

// --- SISTEMA DE DAÑO ---
function takeDamage(amount, errorMsg) {
    oxygen -= amount;
    if(oxygen <= 0) oxygen = 0;
    
    oxygenMeter.innerText = `O2: ${oxygen}%`;
    oxygenMeter.style.color = '#ff0000';
    terminalEl.classList.add('damage-shake'); // Efecto visual de golpe
    
    // Inyectar mensaje de error en la terminal
    screenEl.innerHTML += `<br><br><span style="color:red">> ERROR: ${errorMsg} - OXÍGENO REDUCIDO</span>`;
    screenEl.scrollTop = screenEl.scrollHeight;
    
    setTimeout(() => {
        oxygenMeter.style.color = 'var(--term-color)';
        terminalEl.classList.remove('damage-shake');
    }, 600);

    if(oxygen === 0) gameOver();
}

// --- GESTIÓN DE MODALES ---
function openManual(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-content').innerHTML = text;
    modal.style.display = 'flex';
}
function closeModal() { modal.style.display = 'none'; }


// ==========================================
// LÓGICA DEL JUEGO (FLUX DE NODOS)
// ==========================================

function initGame() {
    transitionToNode(0, 'theme-bridge', "SISTEMA DE EMERGENCIA", () => {
        typeWriter(scriptData.intro, () => {
            controlsEl.innerHTML = `<button onclick="startBridge()">[ INICIAR OVERRIDE ]</button>`;
        });
    });
}

function startBridge() {
    transitionToNode(1, 'theme-bridge', scriptData.bridge.title, () => {
        typeWriter(scriptData.bridge.text, () => {
            controlsEl.innerHTML = `
                <button onclick="openManual('${scriptData.bridge.manualTitle}', '${scriptData.bridge.manualText}')">[ LEER MANUAL DE DESPLIEGUE ]</button>
                <button onclick="bridgeQuiz()">[ INICIAR INSTALACIÓN OS ]</button>
            `;
        });
    });
}

function bridgeQuiz() {
    typeWriter("> INSTALACIÓN REQUERIDA.\n¿Qué versión de Windows Server eliges para esta emergencia?", () => {
        controlsEl.innerHTML = `
            <button onclick="takeDamage(15, 'Tiempo insuficiente para terminal.')">> Windows Server Core</button>
            <button onclick="startLab()">> Windows Server (Desktop Experience)</button>
        `;
    });
}

function startLab() {
    transitionToNode(2, 'theme-lab', "02: EL LABORATORIO", () => {
        // Encendemos el visor con una imagen (ej. una molécula de ácido o microscopio)
        setDisplayImage('assets/img/lab_acid.gif'); 
        
        typeWriter(scriptData.lab.text, () => {
            controlsEl.innerHTML = `
                <button onclick="openManual('${scriptData.lab.manualTitle}', '${scriptData.lab.manualText}')">[ LEER DIARIO DE ASH ]</button>
                <button onclick="labFaseB()">[ INICIAR INSTALACIÓN LINUX ]</button>
            `;
        });
    });
}

function labFaseB() {
    // Cambiamos la imagen del visor a una de "código cargando"
    setDisplayImage('assets/img/linux_boot.gif'); 

    typeWriter("> INICIANDO MODO DE RECUPERACIÓN.\n> Seleccione la arquitectura del Sistema Operativo para este entorno sin recursos:", () => {
        controlsEl.innerHTML = `
            <button onclick="takeDamage(15, 'Energía insuficiente. Interfaz gráfica rechazada.')">> Ubuntu Desktop GUI</button>
            <button onclick="labQuiz()">> Ubuntu Server CLI (Consola)</button>
        `;
    });
}

function labQuiz() {
    // Tensión máxima: Cambiamos el visor a un radar detectando movimiento
    setDisplayImage('assets/img/radar_alien.gif'); 

    typeWriter("> INSTALACIÓN BASE COMPLETADA.\n> ALERTA: MOVIMIENTO DETECTADO EN VENTILACIÓN.\n\nPregunta de Validación: ¿Qué comando de Debian/Ubuntu usa para instalar PostgreSQL y leer los datos biológicos?", () => {
        controlsEl.innerHTML = `
            <button onclick="startComms()">> sudo apt-get install postgresql</button>
            <button onclick="takeDamage(20, 'Comando no reconocido. El sistema falló.')">> systemctl start postgresql</button>
        `;
    });
}

// Función temporal para la siguiente parada
function startComms() {
    transitionToNode(3, 'theme-comms', "03: COMUNICACIONES", () => {
        setDisplayImage(''); // Apagamos el visor
        typeWriter("> ACCESO A COMUNICACIONES CONCEDIDO...\n> [Siguiente nivel en desarrollo]", () => {
            controlsEl.innerHTML = `<button onclick="location.reload()">[ REINICIAR ]</button>`;
        });
    });
}

function gameOver() {
    transitionToNode(0, 'theme-bridge', "SISTEMA CAÍDO", () => {
        screenEl.innerHTML = `<span style="color:red; font-size:1.5em">> SOPORTE VITAL TERMINADO.<br>> EL ORGANISMO HA GANADO.</span>`;
        controlsEl.innerHTML = `<button onclick="location.reload()">[ REINICIAR ]</button>`;
    });
}

// Iniciar al cargar
window.onload = initGame;