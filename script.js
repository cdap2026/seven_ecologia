const quizData = [
    { question: "1. ¿Cuál de las siguientes interacciones describe con mayor precisión una relación intraespecífica gregaria?", options: ["A) Organismos que comparten un ancestro común reciente y colaboran en el cuidado de crías.", "B) Individuos de la misma especie que se asocian temporalmente con fines migratorios o de defensa, sin lazos parentales estrictos.", "C) Poblaciones de diferentes especies que cohabitan en un área y compiten por recursos similares.", "D) Grupos organizados jerárquicamente donde cada individuo tiene una función morfológica específica."], correct: 1 },
    { question: "2. En el mutualismo, a diferencia del comensalismo, se evidencia que:", options: ["A) Una especie obtiene una ventaja adaptativa sin generar un impacto mensurable en su contraparte.", "B) La interacción resulta perjudicial para ambas especies a largo plazo si los recursos escasean.", "C) Ambos organismos participantes experimentan un incremento en su eficacia biológica como resultado de la interacción.", "D) Un organismo se beneficia al consumir a otro, resultando en la muerte inminente del consumido."], correct: 2 },
    { question: "3. La competencia interespecífica tiende a exacerbarse cuando:", options: ["A) Dos especies que coexisten en un ecosistema presentan nichos ecológicos altamente superpuestos.", "B) Individuos de una misma especie incrementan su tasa reproductiva exponencialmente.", "C) Una especie desarrolla adaptaciones fisiológicas que le permiten explotar recursos previamente inaccesibles.", "D) Se establece una relación simbiótica estricta entre dos poblaciones distintas."], correct: 0 },
    { question: "4. ¿Qué característica distingue primordialmente a una asociación intraespecífica estatal de una colonial?", options: ["A) La asociación estatal implica la unión física permanente de los organismos originados por reproducción asexual.", "B) En la asociación colonial existe una estricta división del trabajo fundamentada en polimorfismos marcados.", "C) La asociación estatal se caracteriza por castas jerarquizadas y división del trabajo, mientras la colonial por la unión física de clones.", "D) Ambas asociaciones son idénticas fenotípicamente, diferenciándose únicamente por factores ambientales."], correct: 2 },
    { question: "5. El amensalismo se define ecológicamente como una interacción donde:", options: ["A) Dos poblaciones compiten pasivamente, resultando en la exclusión competitiva de una de ellas.", "B) Un organismo genera compuestos metabólicos secundarios que inhiben a otro, sin verse afectado directa o indirectamente.", "C) Se establece un vínculo trófico donde el hospedador sufre un detrimento paulatino sin letalidad inmediata.", "D) Ambas especies sufren un perjuicio metabólico debido a la secreción mutua de aleloquímicos."], correct: 1 },
    { question: "6. En el contexto evolutivo, la relación depredador-presa fomenta:", options: ["A) Una reducción generalizada de la biodiversidad local por la eliminación selectiva de las presas.", "B) Una carrera armamentista coevolutiva que deriva en adaptaciones de captura y evasión.", "C) El desarrollo de vínculos filogenéticos estrechos entre ambas poblaciones involucradas.", "D) La transición paulatina hacia una dinámica de comensalismo trófico."], correct: 1 },
    { question: "7. Seleccione la afirmación que mejor describa la dinámica del parasitismo:", options: ["A) El parásito busca la letalidad inmediata de su huésped para optimizar el ciclo de nutrientes.", "B) Es una interacción que promueve el bienestar poblacional del huésped al regular su densidad.", "C) El parásito deriva su sustento de un huésped, reduciendo la aptitud de este último, usualmente sin causarle la muerte a corto plazo.", "D) Ambas entidades biológicas experimentan un decremento en su valor adaptativo debido a la extracción bidireccional de recursos."], correct: 2 },
    { question: "8. ¿Cuál de los siguientes escenarios ilustra un caso de competencia intraespecífica por interferencia?", options: ["A) Diferentes especies de aves consumiendo distintos tamaños de semillas en un mismo árbol.", "B) Dos machos de elefante marino enfrentándose físicamente para establecer el control de un harén de hembras.", "C) Varias plantas de pino absorbiendo pasivamente agua del suelo, limitando su disponibilidad para las demás.", "D) Una relación simbiótica donde un hongo facilita la absorción de fósforo a las raíces de una planta."], correct: 1 },
    { question: "9. La polinización entomófila (por insectos) es el ejemplo arquetípico de:", options: ["A) Una relación interespecífica catalogada como mutualismo dispersivo o trófico.", "B) Un caso de amensalismo donde la planta explota energéticamente al insecto visitante.", "C) Una asociación intraespecífica orientada a la maximización del éxito reproductivo clonal.", "D) Un escenario de comensalismo donde el insecto obtiene alimento sin beneficiar a la flor."], correct: 0 },
    { question: "10. Las epífitas tropicales, que utilizan a otras plantas como soporte para acceder a estratos superiores del dosel, representan un ejemplo de:", options: ["A) Parasitismo vascular obligatorio.", "B) Competencia interespecífica por sustrato radicular.", "C) Comensalismo espacial o inquilinismo.", "D) Mutualismo trófico simbiótico."], correct: 2 },
    { question: "11. En una asociación familiar, el propósito subyacente desde la perspectiva ecológica es:", options: ["A) La defensa comunitaria frente a depredadores de gran tamaño y elevada biomasa.", "B) La segregación espacial de los individuos para mitigar la competencia por recursos alimenticios.", "C) La optimización de la transferencia de genes a las siguientes generaciones mediante cuidado parental.", "D) El establecimiento de colonias sedentarias con alta densidad demográfica."], correct: 2 },
    { question: "12. Si dos especies experimentan una relación (- / -), nos referimos inequívocamente a:", options: ["A) Depredación trófica.", "B) Parasitoidismo poblacional.", "C) Amensalismo asimétrico.", "D) Competencia interespecífica."], correct: 3 },
    { question: "13. La secreción de toxinas por parte de las raíces del nogal negro que impide la germinación de otras plantas bajo su copa es un caso clínico de:", options: ["A) Alelopatía, una subcategoría del amensalismo.", "B) Exclusión competitiva intraespecífica.", "C) Simbiosis antagonista.", "D) Parasitismo radicular facultativo."], correct: 0 },
    { question: "14. Los corales hermatípicos, que forman bastas estructuras calcáreas marinas, son un ejemplo clásico de:", options: ["A) Asociación intraespecífica estatal con castas.", "B) Asociación interespecífica de tipo comensalismo.", "C) Asociación intraespecífica colonial generada asexualmente.", "D) Una forma de gregarismo bentónico temporal."], correct: 2 },
    { question: "15. En el ecosistema, las interacciones ecológicas desempeñan el rol macroscópico de:", options: ["A) Homogeneizar la diversidad genética de las poblaciones involucradas a través de la deriva génica.", "B) Estructurar las comunidades biológicas, regular las densidades poblacionales y direccionar la evolución.", "C) Incrementar inexorablemente la biomasa total del sistema suprimiendo la entropía ambiental.", "D) Eliminar de forma progresiva a las especies competidoras para alcanzar un clímax monoespecífico."], correct: 1 }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

const quizContainer = document.getElementById('quiz-questions');
const resultContainer = document.getElementById('result-container');

function loadQuiz() {
    quizData.forEach((q, index) => {
        const qDiv = document.createElement('div');
        qDiv.className = `question ${index === 0 ? 'active' : ''}`;
        qDiv.id = `q-${index}`;
        
        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            optionsHtml += `
                <label>
                    <input type="radio" name="q${index}" value="${optIndex}">
                    ${opt}
                </label>
            `;
        });

        qDiv.innerHTML = `
            <h3>Pregunta ${index + 1} de ${quizData.length}</h3>
            <p style="font-size: 1.1rem; margin-bottom: 1rem; font-weight: 600;">${q.question}</p>
            <div class="options-grid">
                ${optionsHtml}
            </div>
            <div class="timer" id="timer-${index}">⏳ Analiza la pregunta: 30s</div>
            <button id="btn-${index}" class="btn-next" disabled onclick="nextQuestion()">Siguiente Pregunta</button>
        `;
        quizContainer.appendChild(qDiv);
    });
    startTimer();
}

function startTimer() {
    timeLeft = 30;
    const timerElem = document.getElementById(`timer-${currentQuestion}`);
    const btnElem = document.getElementById(`btn-${currentQuestion}`);
    
    timerElem.innerText = `⏳ Analiza la pregunta: ${timeLeft}s`;
    btnElem.disabled = true;

    timer = setInterval(() => {
        timeLeft--;
        timerElem.innerText = `⏳ Analiza la pregunta: ${timeLeft}s`;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerElem.innerText = "✅ Ya puedes seleccionar y avanzar.";
            timerElem.style.color = "var(--success-color)";
            checkEnableButton();
        }
    }, 1000);

    const radios = document.querySelectorAll(`input[name="q${currentQuestion}"]`);
    radios.forEach(radio => {
        radio.addEventListener('change', checkEnableButton);
    });
}

function checkEnableButton() {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selected && timeLeft <= 0) {
        document.getElementById(`btn-${currentQuestion}`).disabled = false;
    }
}

window.nextQuestion = function() {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    
    if (parseInt(selected.value) === quizData[currentQuestion].correct) {
        score++;
    }

    document.getElementById(`q-${currentQuestion}`).classList.remove('active');
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        document.getElementById(`q-${currentQuestion}`).classList.add('active');
        startTimer();
    } else {
        showResults();
    }
};

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const maxScore = quizData.length;
    const nota = (score / maxScore) * 5.0;
    const notaFormateada = nota.toFixed(1);
    
    const scoreText = document.getElementById('score-text');
    const gradeText = document.getElementById('grade-text');
    const feedbackAnim = document.getElementById('feedback-anim');
    
    scoreText.innerHTML = `Respuestas correctas: <strong>${score}</strong> de ${maxScore}`;
    gradeText.innerHTML = `Tu nota final es: <strong>${notaFormateada} / 5.0</strong>`;
    
    if (nota >= 3.7) {
        // Animación y mensaje de aprobación
        feedbackAnim.innerHTML = `<div class="success-anim">¡Felicitaciones! 🎉</div>`;
        
        // Disparar confeti
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#2c5e3b', '#4caf50', '#81c784', '#ffffff']
        });
        
    } else {
        // Mensaje de reprobación
        feedbackAnim.innerHTML = `<div class="fail-msg">Repasa los conceptos e intenta en otro momento. 📚</div>`;
    }
}

// Iniciar cuestionario al cargar
window.onload = loadQuiz;
