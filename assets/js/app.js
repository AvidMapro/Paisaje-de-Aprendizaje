// ==========================================
// PAISAJE DE APRENDIZAJE — USCSS NOSTROMO
// Guión completo: Intro + 4 Nodos + Final
// ==========================================

// --- ESTADO GLOBAL ---
let oxygen = 100;
let typeSpeed = 20;
let gameActive = true;

// --- ELEMENTOS DEL DOM ---
const screenEl = document.getElementById('screen');
const controlsEl = document.getElementById('controls');
const terminalEl = document.getElementById('terminal');
const locationTag = document.getElementById('location-tag');
const oxygenMeter = document.getElementById('oxygen-meter');
const modal = document.getElementById('manual-modal');

// ==========================================
// CONTENIDO DEL GUIÓN
// ==========================================
const GUION = {
  intro: {
    text:
      "> TRANSMISIÓN ENCRIPTADA — INICIANDO CONEXIÓN SEGURA...\n" +
      "> ORIGEN: USCSS NOSTROMO — CARGUERO COMERCIAL CLASE M.\n" +
      "> DESTINO: RED DE MANDO WEYLAND-YUTANI (LA TIERRA).\n" +
      "> FECHA ESTELAR: 2122.06.03\n" +
      "> ESTADO DE LA NAVE: DERIVA ORBITAL / SISTEMAS LÓGICOS CAÍDOS.\n" +
      "> CÓDIGO DE ALERTA: CUARENTENA BIOLÓGICA ROTA.\n\n" +
      "[REPORTE AUTOMATIZADO — MU/TH/UR 6000]\n\n" +
      "La Nostromo remolcaba 20 millones de toneladas de mineral desde la refinería de Thedus.\n" +
      "El viaje transcurría con normalidad bajo mi supervisión.\n" +
      "Sin embargo, la Orden Especial 937 fue activada:\n\n" +
      "  \"Prioridad Uno. Asegurar retorno del organismo. Tripulación prescindible\".\n\n" +
      "El organismo está a bordo. El oficial Ash intentó purgar mis registros, provocando\n" +
      "el colapso de la infraestructura de datos.\n" +
      "Los discos de arranque principales han sido destruidos. Las compuertas están abiertas.\n" +
      "El soporte vital disminuirá un 12% cada hora.\n\n" +
      "> IDENTIFICADOR REASIGNADO: DE AHORA EN ADELANTE OPERO COMO \"MADRE\".\n" +
      "> ESPERANDO INTERVENCIÓN DEL TRIPULANTE PARA INICIAR INSTALACIÓN..."
  },

  // --- NODO 1: PUENTE ---
  bridge: {
    arrival:
      "> ACCESO A TERMINAL SECUNDARIA CONCEDIDO.\n" +
      "> ALERTA: INTEGRIDAD DEL CASCO AL 88%.\n" +
      "> DETECTANDO PRESENCIA EN EL PUENTE DE MANDO: Tripulante no identificado.\n\n" +
      "[MADRE] Tripulación, el panel principal está inoperativo.\n" +
      "Los servidores físicos sobrevivieron a la corrosión del ácido, pero el\n" +
      "Sistema Operativo central fue completamente eliminado.\n\n" +
      "Las compuertas hacia los conductos de ventilación están abiertas.\n" +
      "El organismo tiene vía libre hacia ustedes.\n\n" +
      "Directiva de supervivencia: instalen Windows Server y configuren un dominio seguro.\n" +
      "He desencriptado el MANUAL_DESPLIEGUE_W-Y. Asimílenlo antes de proceder.",

    manualTitle: "📄 MANUAL_DESPLIEGUE_W-Y.pdf",
    manualContent:
      "<h3>EDICIONES Y ENTORNOS</h3>" +
      "<p><b>Windows Server Standard</b>: ideal para entornos de baja densidad.<br>" +
      "<b>Datacenter</b>: para alta virtualización. Para gestión visual rápida en emergencias," +
      " seleccione siempre <b>Desktop Experience (UI)</b> — nunca Server Core (solo terminal).</p>" +
      "<h3>PARTICIONADO DE DISCOS</h3>" +
      "<p>El Sistema Operativo (<b>Unidad C:</b>) debe instalarse en una partición separada" +
      " de los Datos y Registros Críticos (<b>Unidad D:</b>).</p>" +
      "<h3>ACTIVE DIRECTORY (AD DS)</h3>" +
      "<p>El servicio de dominio centraliza la seguridad y gestión de usuarios.<br>" +
      "Pasos críticos:<br>" +
      "1. Agregar el Rol <b>AD DS</b> desde el <b>Administrador del Servidor</b>.<br>" +
      "2. <b>Promover el servidor a Controlador de Dominio</b> asignando un nombre de bosque raíz.</p>",

    fase_b_step1:
      "> INICIANDO SECUENCIA DE INSTALACIÓN DESDE UNIDAD ÓPTICA DE EMERGENCIA...\n" +
      "> PASO 1: La urgencia requiere configuración rápida mediante paneles visuales.\n\n" +
      "[MADRE] Seleccione el entorno operativo correcto para este servidor:",

    fase_b_step2:
      "> NÚCLEOS LÓGICOS EN LÍNEA. RECONOCIENDO INTERFAZ GRÁFICA DE USUARIO (GUI)...\n" +
      "> PASO 2: La red de la nave no tiene autenticación. El organismo puede acceder\n" +
      "  al soporte vital. Inicie la configuración de seguridad.\n\n" +
      "[MADRE] ¿Qué acción debe ejecutar primero en el Server Manager?",

    fase_b_step3:
      "> ROL INSTALADO. EL SERVIDOR REQUIERE AUTORIDAD SOBRE LA RED.\n" +
      "> PASO 3: Ejecute la promoción del sistema para finalizar el entorno de confianza.\n\n" +
      "[MADRE] Al promover el servidor a Controlador de Dominio,\n" +
      "¿qué nombre de bosque raíz debe ingresar?",

    quiz_intro:
      "> PROCESANDO DOMINIO NOSTROMO.CORP...\n" +
      "> VERIFICANDO REGLAS DE SEGURIDAD...\n" +
      "> ALERTA DE PROXIMIDAD: CONTACTO INMINENTE EN LA PUERTA PRINCIPAL.\n\n" +
      "[MADRE] Para finalizar el sellado de las compuertas, respondan el protocolo\n" +
      "de verificación técnica. Un error interrumpirá el cierre.\n" +
      "CADA FALLO RESTA 15% DE OXÍGENO.",

    quiz: [
      {
        q: "Q1: ¿Qué instalación de Windows Server permite gestión visual rápida?",
        options: [
          { text: "> Server Core (Terminal)", correct: false, msg: "Tiempo insuficiente para gestión por terminal. Revise el manual." },
          { text: "> Desktop Experience (UI)", correct: true },
          { text: "> Windows Server Nano", correct: false, msg: "Nano no tiene entorno de gestión visual. Revise el manual." }
        ]
      },
      {
        q: "Q2: ¿Qué unidad debe contener el Sistema Operativo por seguridad corporativa?",
        options: [
          { text: "> Unidad D:", correct: false, msg: "Los datos van en D:, el OS en C:. Revise el manual." },
          { text: "> Unidad C:", correct: true },
          { text: "> Unidad E:", correct: false, msg: "Unidad no reconocida. Revise el manual." }
        ]
      },
      {
        q: "Q3: ¿Cuál es el paso FINAL para activar Active Directory?",
        options: [
          { text: "> Agregar el rol AD DS", correct: false, msg: "Agregar el rol es el primer paso, no el final. Revise el manual." },
          { text: "> Configurar el firewall", correct: false, msg: "El firewall es otra capa. Revise el manual." },
          { text: "> Promover el servidor a Controlador de Dominio", correct: true }
        ]
      }
    ],

    success:
      "> COMPUERTAS SELLADAS. PUENTE DE MANDO ASEGURADO.\n" +
      "> ACCESO CONCEDIDO AL SECTOR MÉDICO / LABORATORIO CIENTÍFICO.\n" +
      "> PRECAUCIÓN: El Laboratorio opera bajo arquitectura de código abierto.\n" +
      ">             Prepárese para iniciar terminal de comandos."
  },

  // --- NODO 2: LABORATORIO ---
  lab: {
    arrival:
      "> INICIANDO DESCENSO AL SECTOR MÉDICO Y LABORATORIO DE CUARENTENA.\n" +
      "> ADVERTENCIA: Brecha de contención biológica detectada.\n" +
      "> ESTADO DEL HARDWARE: Servidor de datos biológicos destruido — PH altamente ácido.\n\n" +
      "[MADRE] Los fluidos del organismo han derretido el hardware del servidor principal.\n" +
      "Mis directivas corporativas me exigen proteger al espécimen, pero sus probabilidades\n" +
      "de supervivencia son del 0% si no conocen su biología.\n\n" +
      "He recuperado los apuntes técnicos del oficial Ash antes de su desactivación.\n" +
      "Para leerlos, deberán instalar un nuevo Servidor Linux y levantar el motor de base de datos.\n" +
      "Descargando DIARIO_ASH.log... Lean la documentación antes de proceder.",

    manualTitle: "📓 DIARIO_ASH.log",
    manualContent:
      "<h3>INSTALACIÓN</h3>" +
      "<p>Para entornos de emergencia sin recursos, utilizar distribuciones <b>Core/Server sin GUI</b>" +
      " (como <b>Ubuntu Server</b>). Ahorra CPU y memoria RAM.</p>" +
      "<h3>GESTIÓN DE PAQUETES</h3>" +
      "<p>Para instalar el motor de datos relacional en sistemas Debian/Ubuntu:<br>" +
      "<code>sudo apt-get install postgresql</code></p>" +
      "<h3>SERVICIOS</h3>" +
      "<p>Para arrancar el demonio de la base de datos:<br>" +
      "<code>systemctl start postgresql</code></p>" +
      "<h3>CONSULTAS SQL</h3>" +
      "<p>Sintaxis para extracción rápida:<br>" +
      "<code>SELECT [columna] FROM [tabla] WHERE [condición];</code></p>",

    fase_b_step1:
      "> INICIANDO MODO DE RECUPERACIÓN MANUAL.\n" +
      "> PASO 1: Seleccione la arquitectura del SO para este entorno de bajos recursos:\n\n" +
      "[MADRE] ¿Qué versión de Linux instala para maximizar los recursos disponibles?",

    fase_b_step2:
      "> INSTALACIÓN BASE COMPLETADA. MODO CONSOLA ACTIVO.\n" +
      "> PASO 2: Ingrese el comando para instalar el motor de base de datos.\n\n" +
      "[MADRE] Extraído de los registros de Ash. ¿Cuál es el comando correcto?",

    quiz_intro:
      "> SERVICIO POSTGRESQL EN LÍNEA. ACCEDIENDO A TABLA 'VULNERABILIDADES'.\n" +
      "> EXTRACCIÓN EXITOSA. VULNERABILIDAD DEL ESPÉCIMEN CONFIRMADA: ALTAS TEMPERATURAS.\n" +
      "> ALERTA: MOVIMIENTO MASIVO DETECTADO EN LOS CONDUCTOS DE AIRE.\n\n" +
      "[MADRE] El sistema de la esclusa requiere validación de sus conocimientos\n" +
      "para compilar el informe y desbloquear la puerta hacia Comunicaciones.\n" +
      "CADA FALLO RESTA 15% DE OXÍGENO.",

    quiz: [
      {
        q: "Q1: ¿Qué distribución de Linux es óptima para servidores con pocos recursos?",
        options: [
          { text: "> Ubuntu Desktop GUI", correct: false, msg: "La GUI consume recursos innecesarios en servidores. Revise el diario." },
          { text: "> Ubuntu Server CLI", correct: true },
          { text: "> Windows Server Core", correct: false, msg: "No es Linux. Revise el diario." }
        ]
      },
      {
        q: "Q2: ¿Qué comando instala PostgreSQL en Ubuntu Server?",
        options: [
          { text: "> systemctl start postgresql", correct: false, msg: "systemctl inicia el servicio, no lo instala. Revise el diario." },
          { text: "> sudo apt-get install postgresql", correct: true },
          { text: "> apt remove postgresql", correct: false, msg: "Ese comando desinstala. Revise el diario." }
        ]
      },
      {
        q: "Q3: ¿Qué comando arranca el demonio de PostgreSQL como servicio?",
        options: [
          { text: "> sudo apt-get install postgresql", correct: false, msg: "Ese instala, no arranca. Revise el diario." },
          { text: "> SELECT * FROM tabla;", correct: false, msg: "Eso es SQL, no un comando de sistema. Revise el diario." },
          { text: "> systemctl start postgresql", correct: true }
        ]
      }
    ],

    success:
      "> ESCLUSA BLOQUEADA. ESPÉCIMEN CONTENIDO TEMPORALMENTE.\n" +
      "> ACCESO CONCEDIDO A LA SALA DE COMUNICACIONES."
  },

  // --- NODO 3: COMUNICACIONES ---
  comms: {
    arrival:
      "> BASE DE DATOS RESTAURADA. VULNERABILIDAD TÉRMICA CONFIRMADA.\n" +
      "> ESTADO DE COMUNICACIONES: Intranet y Antena Principal fuera de línea.\n" +
      "> ALERTA DE SEGURIDAD: Conexión externa remota detectada. Origen: Weyland-Yutani.\n\n" +
      "[MADRE] Tripulación, la compañía nos ha silenciado.\n" +
      "Han activado un cortafuegos de alta seguridad para evitar que enviemos una señal\n" +
      "de advertencia sobre la cuarentena rota.\n\n" +
      "Adicionalmente, detectan un 'Override': intentan tomar el control del piloto automático.\n" +
      "Si quieren pedir rescate, deben reinstalar el Servidor Web y reconfigurar el Firewall.\n" +
      "He interceptado el Manual Confidencial de W-Y. Léanlo antes de que sea demasiado tarde.",

    manualTitle: "🔒 CONFIDENCIAL: DIRECTIVAS DE RED W-Y",
    manualContent:
      "<h3>SERVIDORES WEB</h3>" +
      "<p>Para habilitar aplicaciones de intranet o señales externas, instale:<br>" +
      "<b>IIS</b> (en Windows) o <b>Apache</b> (en Linux).</p>" +
      "<h3>TRÁFICO WEB — PUERTOS 80 Y 443</h3>" +
      "<p><b>Puerto TCP 80 (HTTP)</b>: tráfico no seguro.<br>" +
      "<b>Puerto TCP 443 (HTTPS)</b>: transmisiones encriptadas de alta prioridad (S.O.S. clasificado).</p>" +
      "<h3>ACCESO REMOTO — PUERTOS 22 Y 3389</h3>" +
      "<p><b>Puerto 22 (SSH)</b>: administración remota en Linux.<br>" +
      "<b>Puerto 3389 (RDP)</b>: administración remota en Windows.</p>" +
      "<h3>FIREWALL</h3>" +
      "<p>Las reglas de seguridad se basan en <b>Permitir (Allow)</b> o <b>Denegar (Deny)</b>" +
      " el tráfico de <b>Entrada (Inbound)</b> y <b>Salida (Outbound)</b>.</p>",

    fase_b_step1:
      "> BYPASS DE SEGURIDAD REQUERIDO INMEDIATAMENTE.\n" +
      "> INTENTO DE HACKEO CORPORATIVO EN PROGRESO: 45% COMPLETADO...\n" +
      "> PASO 1: Despliegue la aplicación de emergencia.\n\n" +
      "[MADRE] ¿Qué servicio debe habilitar para lanzar la aplicación S.O.S.?",

    fase_b_step2:
      "> APLICACIÓN EN LÍNEA. SE REQUIERE CANAL SEGURO PARA LA TRANSMISIÓN S.O.S.\n" +
      "> PASO 2: Configure la regla de Firewall de SALIDA (Outbound).\n\n" +
      "[MADRE] ¿Qué puerto debe PERMITIR para enviar el S.O.S. encriptado?",

    fase_b_step3:
      "> TRANSMISIÓN EN COLA. ADVERTENCIA: LA COMPAÑÍA ESTÁ TOMANDO EL PILOTO AUTOMÁTICO.\n" +
      "> PASO 3: Configure la regla de Firewall de ENTRADA (Inbound).\n\n" +
      "[MADRE] ¿Qué puertos debe DENEGAR para bloquear la administración remota de W-Y?",

    quiz_intro:
      "> CORTAFUEGOS ESTABLECIDO. CONTROL REMOTO DENEGADO. SEÑAL S.O.S. TRANSMITIENDO.\n" +
      "> ALERTA CRÍTICA: Impactos contundentes en el panel principal de estribor.\n" +
      ">               El organismo intenta romper la compuerta de comunicaciones.\n\n" +
      "[MADRE] Para liberar el canal final y abrir la compuerta de escape,\n" +
      "complete la secuencia de validación. TEMPORIZADOR ACTIVO: 60 SEGUNDOS.\n" +
      "CADA FALLO RESTA 15% DE OXÍGENO.",

    quiz: [
      {
        q: "Q1: ¿Qué servicio habilita aplicaciones web en un servidor?",
        options: [
          { text: "> Servidor FTP", correct: false, msg: "FTP transfiere archivos, no despliega apps web. Revise el manual." },
          { text: "> Servidor Web (IIS / Apache)", correct: true },
          { text: "> Servidor DNS", correct: false, msg: "DNS resuelve nombres, no despliega apps. Revise el manual." }
        ]
      },
      {
        q: "Q2: ¿Qué puerto Outbound debe PERMITIR para el S.O.S. encriptado?",
        options: [
          { text: "> TCP 80 (HTTP)", correct: false, msg: "Puerto 80 no es encriptado. Revise el manual." },
          { text: "> UDP 53 (DNS)", correct: false, msg: "UDP 53 es para resolución de nombres. Revise el manual." },
          { text: "> TCP 443 (HTTPS)", correct: true }
        ]
      },
      {
        q: "Q3: ¿Qué puertos Inbound debe DENEGAR para bloquear a Weyland-Yutani?",
        options: [
          { text: "> TCP 80 y 443", correct: false, msg: "Esos son los puertos web, no los de administración remota. Revise el manual." },
          { text: "> TCP 22 (SSH) y TCP 3389 (RDP)", correct: true },
          { text: "> UDP 53 y TCP 443", correct: false, msg: "Revise los puertos de administración remota en el manual." }
        ]
      }
    ],

    success:
      "> VALIDACIÓN ACEPTADA. COMPUERTA DESBLOQUEADA.\n" +
      "> EVACÚEN INMEDIATAMENTE A LA SALA DE MÁQUINAS.\n" +
      "> PREPÁRENSE PARA PROTOCOLOS DE DESTRUCCIÓN."
  },

  // --- NODO 4: MOTORES ---
  engines: {
    arrival:
      "> ACCESO A SALA DE MÁQUINAS CONCEDIDO.\n" +
      "> ALERTA GENERAL: Múltiples brechas en el casco. Presión del núcleo inestable.\n" +
      "> ESTADO DE LA AMENAZA: El espécimen ha anidado en el sector de refrigeración primaria.\n\n" +
      "[MADRE] Tripulación, la integridad estructural ha fracasado.\n" +
      "El protocolo dicta evacuación inmediata en la cápsula de escape \"Narcissus\".\n" +
      "Sin embargo, Weyland-Yutani bloqueó la interfaz de autodestrucción.\n\n" +
      "Deben usar Scripts (Bash/PowerShell) para forzar el apagado de la refrigeración del núcleo.\n" +
      "Además, deben configurar un Backup automatizado para migrar registros a la cápsula Narcissus.\n" +
      "Revisen el MANUAL_MOTORES_V.3 antes de que el núcleo colapse.",

    manualTitle: "⚙️ MANUAL_MOTORES_V.3",
    manualContent:
      "<h3>COMANDOS DE RESPALDO (BACKUPS)</h3>" +
      "<p>Para comprimir volúmenes de datos en Linux:<br>" +
      "<code>tar -czvf backup.tar.gz /datos</code><br>" +
      "En Windows, emplee <b>Robocopy</b> para espejar directorios críticos.</p>" +
      "<h3>AUTOMATIZACIÓN — CRON / TASK SCHEDULER</h3>" +
      "<p>Los scripts no se ejecutan solos.<br>" +
      "En <b>Linux</b>: editar el archivo <code>crontab</code>.<br>" +
      "En <b>Windows Server</b>: utilizar el <b>Programador de tareas</b> (Task Scheduler)" +
      " definiendo un Desencadenador (Trigger) y una Acción.</p>" +
      "<h3>SCRIPTS DE PURGA</h3>" +
      "<p>Un script (.sh o .ps1) agrupa comandos ejecutables.<br>" +
      "Para forzar el apagado crítico del sistema de refrigeración se requieren\n" +
      "permisos de superusuario y comandos de interrupción:<br>" +
      "<code>kill -9 [PID]</code> (Linux) — <code>Stop-Process</code> (PowerShell)</p>",

    fase_b_step1:
      "> INICIANDO SECUENCIA DE MIGRACIÓN Y PURGA.\n" +
      "> TEMPERATURA DEL NÚCLEO AUMENTANDO...\n" +
      "> PASO 1: Asegurar los registros de la Caja Negra.\n\n" +
      "[MADRE] ¿Qué comando empaqueta y comprime los datos del servidor?",

    fase_b_step2:
      "> RESPALDO CREADO. MIGRACIÓN A LA CÁPSULA NARCISSUS EN CURSO.\n" +
      "> PASO 2: La migración tarda 3 minutos.\n" +
      "  El núcleo debe sobrecargarse exactamente al terminar.\n\n" +
      "[MADRE] ¿Qué herramienta automatiza la ejecución del script de autodestrucción?",

    quiz_intro:
      "> MIGRACIÓN DE DATOS COMPLETADA. LA CÁPSULA ESTÁ LISTA.\n" +
      "> ALERTA CRÍTICA: EL ESPÉCIMEN HA ROTO LA CONTENCIÓN DE LA PUERTA.\n\n" +
      "[MADRE] Para liberar los amarres magnéticos de la cápsula de escape,\n" +
      "valide sus comandos finales. EL TIEMPO SE AGOTA.\n" +
      "CADA FALLO RESTA 20% DE OXÍGENO.",

    quiz: [
      {
        q: "Q1: ¿Qué comando empaqueta y comprime datos en Linux?",
        options: [
          { text: "> rm -rf /datos", correct: false, msg: "Ese comando borra los datos permanentemente. Revise el manual." },
          { text: "> tar -czvf caja_negra.tar.gz /datos", correct: true },
          { text: "> systemctl stop backup", correct: false, msg: "Ese detiene un servicio. Revise el manual." }
        ]
      },
      {
        q: "Q2: ¿Qué herramienta programa la ejecución automática de scripts en Linux?",
        options: [
          { text: "> Active Directory", correct: false, msg: "Active Directory gestiona usuarios, no tareas programadas. Revise el manual." },
          { text: "> Crontab", correct: true },
          { text: "> apt-get install script", correct: false, msg: "Ese instala paquetes, no programa tareas. Revise el manual." }
        ]
      },
      {
        q: "Q3: ¿Qué archivo de extensión usa un script en Linux?",
        options: [
          { text: "> .ps1", correct: false, msg: ".ps1 es PowerShell (Windows). Revise el manual." },
          { text: "> .bat", correct: false, msg: ".bat es Windows. Revise el manual." },
          { text: "> .sh", correct: true }
        ]
      }
    ],

    success:
      "> VALIDACIÓN ACEPTADA. AMARRES LIBERADOS.\n" +
      "> SECUENCIA DE AUTODESTRUCCIÓN DE LA NOSTROMO INICIADA: T-MENOS 10 SEGUNDOS.\n" +
      "> ACTIVANDO PROPULSORES DE LA CÁPSULA NARCISSUS. BUENA SUERTE, TRIPULACIÓN."
  },

  // --- PANTALLA FINAL ---
  ending:
    "Último reporte de la nave comercial Nostromo.\n\n" +
    "Los servidores fueron restaurados y los datos asegurados.\n" +
    "La nave ha sido destruida.\n\n" +
    "El resto de la tripulación... ha cumplido su misión técnica.\n\n" +
    "Aquí los ingenieros de sistemas, firmando fuera.\n\n" +
    "— FIN DEL REPORTE —"
};


// ==========================================
// MOTOR VISUAL
// ==========================================

function setDisplayImage(imgSrc) {
  const display = document.getElementById('main-display');
  const img = document.getElementById('display-img');
  if (imgSrc) {
    img.src = imgSrc;
    display.classList.remove('hidden');
  } else {
    display.classList.add('hidden');
  }
}

function typeWriter(text, callback) {
  screenEl.innerHTML = '';
  controlsEl.innerHTML = '';
  let i = 0;
  const formattedText = text.replace(/\n/g, '<br>');
  const avatarImg = document.querySelector('.avatar-madre img');
  if (avatarImg) avatarImg.classList.add('is-talking');

  function type() {
    if (i < formattedText.length) {
      if (formattedText.substring(i, i + 4) === '<br>') {
        screenEl.innerHTML += '<br>';
        i += 4;
      } else {
        screenEl.innerHTML += formattedText.charAt(i);
        i++;
      }
      screenEl.scrollTop = screenEl.scrollHeight;
      setTimeout(type, typeSpeed);
    } else {
      if (avatarImg) avatarImg.classList.remove('is-talking');
      if (callback) callback();
    }
  }
  type();
}

function transitionToNode(nodeIndex, themeClass, tagText, callback) {
  terminalEl.classList.add('fade-out');
  document.querySelectorAll('.node').forEach((el, index) => {
    el.classList.remove('active');
    if (index < nodeIndex) el.classList.add('completed');
    if (index === nodeIndex) el.classList.add('active');
  });
  setTimeout(() => {
    terminalEl.className = `terminal-container ${themeClass}`;
    locationTag.innerText = tagText;
    screenEl.innerHTML = '';
    controlsEl.innerHTML = '';
    terminalEl.classList.remove('fade-out');
    setTimeout(callback, 500);
  }, 800);
}

function takeDamage(amount, errorMsg) {
  if (!gameActive) return;
  oxygen -= amount;
  if (oxygen <= 0) oxygen = 0;
  oxygenMeter.innerText = `O2: ${oxygen}%`;
  oxygenMeter.style.color = '#ff0000';
  terminalEl.classList.add('damage-shake');
  screenEl.innerHTML += `<br><br><span style="color:red">> ERROR: ${errorMsg} — OXÍGENO REDUCIDO A ${oxygen}%</span>`;
  screenEl.scrollTop = screenEl.scrollHeight;
  setTimeout(() => {
    oxygenMeter.style.color = 'var(--term-color)';
    terminalEl.classList.remove('damage-shake');
  }, 600);
  if (oxygen <= 0) { gameActive = false; gameOver(); }
}

function openManual(title, htmlContent) {
  document.getElementById('modal-title').innerHTML = title;
  document.getElementById('modal-content').innerHTML = htmlContent;
  modal.style.display = 'flex';
}
function closeModal() { modal.style.display = 'none'; }


// ==========================================
// SISTEMA DE QUIZ GENÉRICO
// ==========================================
let quizState = { questions: [], current: 0, onComplete: null, damage: 15 };

function startQuiz(questions, onComplete, damageAmount = 15) {
  quizState = { questions, current: 0, onComplete, damage: damageAmount };
  showQuizQuestion();
}

function showQuizQuestion() {
  const q = quizState.questions[quizState.current];
  typeWriter(q.q, () => {
    let btns = '';
    q.options.forEach((opt, i) => {
      btns += `<button onclick="answerQuiz(${i})">${opt.text}</button>`;
    });
    controlsEl.innerHTML = btns;
  });
}

function answerQuiz(optionIndex) {
  const q = quizState.questions[quizState.current];
  const chosen = q.options[optionIndex];
  if (chosen.correct) {
    quizState.current++;
    if (quizState.current >= quizState.questions.length) {
      if (quizState.onComplete) quizState.onComplete();
    } else {
      screenEl.innerHTML += '<br><span style="color:#00ff41">> RESPUESTA CORRECTA. CONTINUANDO...</span>';
      setTimeout(showQuizQuestion, 1200);
    }
  } else {
    takeDamage(quizState.damage, chosen.msg || 'Respuesta incorrecta.');
    setTimeout(() => {
      screenEl.innerHTML += '<br><span style="color:orange">> REINTENTE LA PREGUNTA ANTERIOR.</span>';
      setTimeout(showQuizQuestion, 1200);
    }, 1800);
  }
}


// ==========================================
// FLUJO DE NODOS
// ==========================================

// --- INTRO ---
function initGame() {
  oxygen = 100;
  gameActive = true;
  oxygenMeter.innerText = 'O2: 100%';
  transitionToNode(0, 'theme-bridge', 'SISTEMA DE EMERGENCIA', () => {
    typeWriter(GUION.intro.text, () => {
      controlsEl.innerHTML = `<button onclick="startBridge()">[ PRESIONE ENTER PARA INICIAR EL RESCATE DEL SISTEMA ]</button>`;
    });
  });
}

// --- NODO 1: PUENTE ---
function startBridge() {
  transitionToNode(1, 'theme-bridge', '01: PUENTE DE MANDO', () => {
    typeWriter(GUION.bridge.arrival, () => {
      controlsEl.innerHTML = `
        <button onclick="openManual('${GUION.bridge.manualTitle}', GUION.bridge.manualContent)">[ LEER MANUAL DE DESPLIEGUE W-Y ]</button>
        <button onclick="bridgeFaseB()">[ INICIAR INSTALACIÓN WINDOWS SERVER ]</button>
      `;
    });
  });
}

function bridgeFaseB() {
  closeModal();
  typeWriter(GUION.bridge.fase_b_step1, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(15,'Tiempo insuficiente para gestión por terminal.');controlsEl.innerHTML='<button onclick=bridgeFaseB2()>> Windows Server (Desktop Experience)</button><button onclick=\'takeDamage(15,\'Nano no tiene GUI.\')\'>> Windows Server Nano</button>';">> Windows Server Core (Terminal)</button>
      <button onclick="bridgeFaseB2()">> Windows Server (Desktop Experience)</button>
    `;
  });
}

function bridgeFaseB2() {
  typeWriter(GUION.bridge.fase_b_step2, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(15,'Primero se agrega el rol, no el dominio directamente.');typeWriter(GUION.bridge.fase_b_step2,()=>{ controlsEl.innerHTML='<button onclick=bridgeFaseB3()>> Agregar roles y características → AD DS</button>'})">> Crear usuario administrador</button>
      <button onclick="bridgeFaseB3()">> Agregar roles y características → AD DS</button>
      <button onclick="takeDamage(15,'El firewall no instala Active Directory.');typeWriter(GUION.bridge.fase_b_step2,()=>{ controlsEl.innerHTML='<button onclick=bridgeFaseB3()>> Agregar roles y características → AD DS</button>'})">> Configurar Firewall de Windows</button>
    `;
  });
}

function bridgeFaseB3() {
  typeWriter(GUION.bridge.fase_b_step3, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(15,'WORKGROUP no es un dominio válido.');typeWriter(GUION.bridge.fase_b_step3,()=>{ controlsEl.innerHTML='<button onclick=bridgeStartQuiz()>> NOSTROMO.CORP</button>'})">> WORKGROUP</button>
      <button onclick="bridgeStartQuiz()">> NOSTROMO.CORP</button>
      <button onclick="takeDamage(15,'NOSTROMO sin dominio no es un bosque raíz válido.');typeWriter(GUION.bridge.fase_b_step3,()=>{ controlsEl.innerHTML='<button onclick=bridgeStartQuiz()>> NOSTROMO.CORP</button>'})">> NOSTROMO</button>
    `;
  });
}

function bridgeStartQuiz() {
  typeWriter(GUION.bridge.quiz_intro, () => {
    startQuiz(GUION.bridge.quiz, bridgeSuccess, 15);
  });
}

function bridgeSuccess() {
  typeWriter(GUION.bridge.success, () => {
    controlsEl.innerHTML = `<button onclick="startLab()">[ ACCEDER AL LABORATORIO CIENTÍFICO ]</button>`;
  });
}

// --- NODO 2: LABORATORIO ---
function startLab() {
  transitionToNode(2, 'theme-lab', '02: LABORATORIO CIENTÍFICO', () => {
    setDisplayImage('assets/img/lab_acid.gif');
    typeWriter(GUION.lab.arrival, () => {
      controlsEl.innerHTML = `
        <button onclick="openManual('${GUION.lab.manualTitle}', GUION.lab.manualContent)">[ LEER DIARIO DE ASH ]</button>
        <button onclick="labFaseB()">[ INICIAR INSTALACIÓN LINUX ]</button>
      `;
    });
  });
}

function labFaseB() {
  closeModal();
  setDisplayImage('assets/img/linux_boot.gif');
  typeWriter(GUION.lab.fase_b_step1, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(15,'La GUI consume recursos innecesarios.');typeWriter(GUION.lab.fase_b_step1,()=>{ controlsEl.innerHTML='<button onclick=labFaseB2()>> Ubuntu Server CLI (Consola)</button>'})">> Ubuntu Desktop GUI</button>
      <button onclick="labFaseB2()">> Ubuntu Server CLI (Consola)</button>
    `;
  });
}

function labFaseB2() {
  typeWriter(GUION.lab.fase_b_step2, () => {
    controlsEl.innerHTML = `
      <button onclick="labStartQuiz()">> sudo apt-get install postgresql</button>
      <button onclick="takeDamage(15,'systemctl inicia el servicio, no lo instala.');typeWriter(GUION.lab.fase_b_step2,()=>{ controlsEl.innerHTML='<button onclick=labStartQuiz()>> sudo apt-get install postgresql</button>'})">> systemctl start postgresql</button>
      <button onclick="takeDamage(15,'apt remove desinstala. Revise el diario.');typeWriter(GUION.lab.fase_b_step2,()=>{ controlsEl.innerHTML='<button onclick=labStartQuiz()>> sudo apt-get install postgresql</button>'})">> apt remove postgresql</button>
    `;
  });
}

function labStartQuiz() {
  setDisplayImage('assets/img/radar_alien.gif');
  typeWriter(GUION.lab.quiz_intro, () => {
    startQuiz(GUION.lab.quiz, labSuccess, 15);
  });
}

function labSuccess() {
  typeWriter(GUION.lab.success, () => {
    controlsEl.innerHTML = `<button onclick="startComms()">[ ACCEDER A SALA DE COMUNICACIONES ]</button>`;
  });
}

// --- NODO 3: COMUNICACIONES ---
function startComms() {
  transitionToNode(3, 'theme-comms', '03: COMUNICACIONES', () => {
    setDisplayImage('');
    typeWriter(GUION.comms.arrival, () => {
      controlsEl.innerHTML = `
        <button onclick="openManual('${GUION.comms.manualTitle}', GUION.comms.manualContent)">[ LEER DIRECTIVAS DE RED W-Y ]</button>
        <button onclick="commsFaseB()">[ INICIAR BYPASS DE SEGURIDAD ]</button>
      `;
    });
  });
}

function commsFaseB() {
  closeModal();
  typeWriter(GUION.comms.fase_b_step1, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(15,'FTP transfiere archivos, no apps web.');typeWriter(GUION.comms.fase_b_step1,()=>{ controlsEl.innerHTML='<button onclick=commsFaseB2()>> Servidor Web (IIS / Apache)</button>'})">> Servidor FTP</button>
      <button onclick="commsFaseB2()">> Servidor Web (IIS / Apache)</button>
      <button onclick="takeDamage(15,'DNS resuelve nombres, no despliega apps.');typeWriter(GUION.comms.fase_b_step1,()=>{ controlsEl.innerHTML='<button onclick=commsFaseB2()>> Servidor Web (IIS / Apache)</button>'})">> Servidor DNS</button>
    `;
  });
}

function commsFaseB2() {
  typeWriter(GUION.comms.fase_b_step2, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(15,'Puerto 80 no es encriptado. Revise el manual.');typeWriter(GUION.comms.fase_b_step2,()=>{ controlsEl.innerHTML='<button onclick=commsFaseB3()>> TCP 443 (HTTPS)</button>'})">> TCP 80 (HTTP)</button>
      <button onclick="commsFaseB3()">> TCP 443 (HTTPS)</button>
      <button onclick="takeDamage(15,'UDP 53 es DNS, no encriptación web.');typeWriter(GUION.comms.fase_b_step2,()=>{ controlsEl.innerHTML='<button onclick=commsFaseB3()>> TCP 443 (HTTPS)</button>'})">> UDP 53 (DNS)</button>
    `;
  });
}

function commsFaseB3() {
  typeWriter(GUION.comms.fase_b_step3, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(15,'Esos son puertos web, no de administración remota.');typeWriter(GUION.comms.fase_b_step3,()=>{ controlsEl.innerHTML='<button onclick=commsStartQuiz()>> TCP 22 (SSH) y TCP 3389 (RDP)</button>'})">> TCP 80 y 443</button>
      <button onclick="commsStartQuiz()">> TCP 22 (SSH) y TCP 3389 (RDP)</button>
      <button onclick="takeDamage(15,'Revise los puertos de administración remota.');typeWriter(GUION.comms.fase_b_step3,()=>{ controlsEl.innerHTML='<button onclick=commsStartQuiz()>> TCP 22 (SSH) y TCP 3389 (RDP)</button>'})">> UDP 53 y TCP 443</button>
    `;
  });
}

let commsTimer = null;
function commsStartQuiz() {
  typeWriter(GUION.comms.quiz_intro, () => {
    // Iniciar temporizador visual de 60 segundos
    let timeLeft = 60;
    const timerEl = document.createElement('div');
    timerEl.id = 'quiz-timer';
    timerEl.style.cssText = 'color:#ff4444;font-size:1.4em;margin-bottom:10px;text-align:center;font-weight:bold;';
    timerEl.innerText = `⏱ TIEMPO: ${timeLeft}s`;
    controlsEl.appendChild(timerEl);
    commsTimer = setInterval(() => {
      timeLeft--;
      timerEl.innerText = `⏱ TIEMPO: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(commsTimer);
        takeDamage(20, 'TIEMPO AGOTADO — Señal de rescate comprometida.');
        document.getElementById('quiz-timer')?.remove();
        setTimeout(() => startQuiz(GUION.comms.quiz, commsSuccess, 15), 2000);
      }
    }, 1000);
    startQuiz(GUION.comms.quiz, () => {
      clearInterval(commsTimer);
      document.getElementById('quiz-timer')?.remove();
      commsSuccess();
    }, 15);
  });
}

function commsSuccess() {
  typeWriter(GUION.comms.success, () => {
    controlsEl.innerHTML = `<button onclick="startEngines()">[ EVACUAR A LA SALA DE MÁQUINAS ]</button>`;
  });
}

// --- NODO 4: MOTORES ---
function startEngines() {
  transitionToNode(4, 'theme-engines', '04: SALA DE MÁQUINAS', () => {
    typeWriter(GUION.engines.arrival, () => {
      controlsEl.innerHTML = `
        <button onclick="openManual('${GUION.engines.manualTitle}', GUION.engines.manualContent)">[ LEER MANUAL DE INGENIERÍA ]</button>
        <button onclick="enginesFaseB()">[ INICIAR SECUENCIA DE MIGRACIÓN Y PURGA ]</button>
      `;
    });
  });
}

function enginesFaseB() {
  closeModal();
  typeWriter(GUION.engines.fase_b_step1, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(20,'DESTRUCCIÓN DE PRUEBAS NO AUTORIZADA.');typeWriter(GUION.engines.fase_b_step1,()=>{ controlsEl.innerHTML='<button onclick=enginesFaseB2()>> tar -czvf caja_negra.tar.gz /datos</button>'})">> rm -rf /datos</button>
      <button onclick="enginesFaseB2()">> tar -czvf caja_negra.tar.gz /datos</button>
      <button onclick="takeDamage(20,'systemctl stop backup detiene, no respalda.');typeWriter(GUION.engines.fase_b_step1,()=>{ controlsEl.innerHTML='<button onclick=enginesFaseB2()>> tar -czvf caja_negra.tar.gz /datos</button>'})">> systemctl stop backup</button>
    `;
  });
}

function enginesFaseB2() {
  typeWriter(GUION.engines.fase_b_step2, () => {
    controlsEl.innerHTML = `
      <button onclick="takeDamage(20,'Active Directory gestiona usuarios, no tareas.');typeWriter(GUION.engines.fase_b_step2,()=>{ controlsEl.innerHTML='<button onclick=enginesStartQuiz()>> Crontab / Task Scheduler</button>'})">> Active Directory</button>
      <button onclick="enginesStartQuiz()">> Crontab / Task Scheduler</button>
    `;
  });
}

function enginesStartQuiz() {
  typeWriter(GUION.engines.quiz_intro, () => {
    startQuiz(GUION.engines.quiz, enginesSuccess, 20);
  });
}

function enginesSuccess() {
  typeWriter(GUION.engines.success, () => {
    setTimeout(() => showEnding(), 3000);
  });
}

// --- PANTALLA FINAL ---
function showEnding() {
  terminalEl.classList.add('fade-out');
  setTimeout(() => {
    // Flash blanco (explosión)
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.transition = 'background-color 0.5s';
    setTimeout(() => {
      document.body.style.backgroundColor = '#000000';
      terminalEl.className = 'terminal-container theme-bridge';
      terminalEl.classList.remove('fade-out');
      locationTag.innerText = 'FIN DE LA MISIÓN';

      // Ocultar tracker
      document.querySelectorAll('.node').forEach(el => {
        el.classList.add('completed');
        el.classList.remove('active');
      });

      // Calcular nota
      let grade = (oxygen / 100) * 10;
      grade = Math.max(0, Math.min(10, grade)).toFixed(1);

      screenEl.innerHTML = '';
      typeWriter(GUION.ending, () => {
        screenEl.innerHTML += `<br><br><span style="color:#ffd700;font-size:1.3em">> MISIÓN COMPLETADA — OXÍGENO FINAL: ${oxygen}%</span>`;
        screenEl.innerHTML += `<br><span style="color:#ffd700;font-size:1.5em">> CALIFICACIÓN FINAL: ${grade} / 10</span>`;
        controlsEl.innerHTML = `<button onclick="location.reload()">[ REINICIAR SIMULACIÓN ]</button>`;
        screenEl.scrollTop = screenEl.scrollHeight;
      });
    }, 800);
  }, 800);
}

// --- GAME OVER ---
function gameOver() {
  gameActive = false;
  transitionToNode(0, 'theme-bridge', 'SISTEMA CAÍDO', () => {
    screenEl.innerHTML = `<span style="color:red;font-size:1.3em">> SOPORTE VITAL TERMINADO.<br>> EL ORGANISMO HA GANADO.<br>><br>> CALIFICACIÓN FINAL: 0 / 10</span>`;
    controlsEl.innerHTML = `<button onclick="location.reload()">[ REINICIAR SIMULACIÓN ]</button>`;
  });
}

// --- INICIAR ---
window.onload = initGame;
