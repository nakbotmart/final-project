// ========================================================
// UniMind Pro - Advanced Mental Health Analytics Engine
// ========================================================

let radarChartInstance = null;
let trendChartInstance = null;

document.addEventListener("DOMContentLoaded", () => {
    initCharts();
    
    document.getElementById("mentalForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        await processAnalyticsPipeline();
    });
});

// --------------------------------------------------------
// MODULE 1: Anonymization & Security Guardrails
// --------------------------------------------------------
function anonymizeData(text) {
    if (!text) return "";
    return text
        .replace(/\b\d{9,10}\b/g, "[STUDENT_ID_HIDDEN]")
        .replace(/\b0\d{8,9}\b/g, "[PHONE_HIDDEN]")
        .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[EMAIL_HIDDEN]");
}

function detectCrisisKeywords(text) {
    const crisisKeywords = ["ไม่อยากอยู่", "ท้อแท้ที่สุด", "ไม่ไหวแล้ว", "อยากหายไป", "ซึมเศร้าหนัก"];
    return crisisKeywords.some(keyword => text.includes(keyword));
}

// --------------------------------------------------------
// MODULE 2: Psychometric & Multi-Vector Stress Engine
// --------------------------------------------------------
function calculateLexiconSentiment(text) {
    if (!text) return 0.0;
    const positiveWords = ["สบายใจ", "โอเค", "พร้อม", "มั่นใจ", "สนุก", "ผ่อนคลาย"];
    const negativeWords = ["เครียด", "กังวล", "เหนื่อย", "กลัว", "ไม่ทัน", "ท้อ"];
    
    let score = 0;
    positiveWords.forEach(w => { if (text.includes(w)) score += 0.25; });
    negativeWords.forEach(w => { if (text.includes(w)) score -= 0.25; });
    
    return Math.max(-1.0, Math.min(1.0, score));
}

function runAnalyticsEngine(inputs) {
    const psychometricSum = inputs.q1 + inputs.q2 + inputs.q3 + inputs.q4 + inputs.q5;
    
    const taskRatio = Math.min(inputs.academicTasks / 10, 1.0);
    const sleepDeficit = Math.max(0, (8 - inputs.sleepHours) / 8);
    const moodFactor = (5 - inputs.emotionState) / 4;

    let rawStressIndex = (
        (psychometricSum / 15) * 40 +
        moodFactor * 20 +
        taskRatio * 20 +
        sleepDeficit * 15 -
        (inputs.sentimentScore * 5)
    );

    const finalStressIndex = Math.round(Math.max(0, Math.min(100, rawStressIndex)));

    let riskLevel = "LOW";
    let riskClass = "var(--risk-low)";
    if (finalStressIndex >= 75) { riskLevel = "CRITICAL"; riskClass = "var(--risk-high)"; }
    else if (finalStressIndex >= 50) { riskLevel = "HIGH"; riskClass = "var(--risk-high)"; }
    else if (finalStressIndex >= 30) { riskLevel = "MEDIUM"; riskClass = "var(--risk-med)"; }

    return {
        stressIndex: finalStressIndex,
        riskLevel: riskLevel,
        riskClass: riskClass,
        psychometricSum: psychometricSum
    };
}

// --------------------------------------------------------
// MODULE 3: Adaptive Schedule & Recommendation Logic
// --------------------------------------------------------
function generateAdaptiveSchedule(stressIndex) {
    if (stressIndex >= 70) {
        return [
            { time: "09:00 - 09:20", task: "อ่านหนังสือ Focus Slot (20 นาที)" },
            { time: "09:20 - 09:30", task: "พักผ่อน ฟังเพลงผ่อนคลาย (10 นาที)" },
            { time: "09:30 - 09:50", task: "ทบทวนเนื้อหาเบาๆ (20 นาที)" },
            { time: "09:50 - 10:15", task: "ฝึกหายใจ ฝึกสมาธิฮีลใจ (25 นาที)" }
        ];
    } else {
        return [
            { time: "09:00 - 09:45", task: "อ่านหนังสือเตรียมสอบ Deep Work (45 นาที)" },
            { time: "09:45 - 10:00", task: "พักสายตา ยืดกล้ามเนื้อ (15 นาที)" },
            { time: "10:00 - 10:45", task: "ทำแบบฝึกหัด/เคลียร์งานค้าง (45 นาที)" }
        ];
    }
}

// --------------------------------------------------------
// MODULE 4: Simulation Pipeline & UI Renderer
// --------------------------------------------------------
async function processAnalyticsPipeline() {
    const overlay = document.getElementById("loadingOverlay");
    const statusText = document.getElementById("loadingStatusText");
    overlay.classList.remove("hidden");

    const rawText = document.getElementById("reflectionText").value;
    const cleanText = anonymizeData(rawText);
    const sentiment = calculateLexiconSentiment(cleanText);

    const inputs = {
        alias: document.getElementById("alias").value,
        emotionState: parseInt(document.getElementById("emotionState").value),
        academicTasks: parseInt(document.getElementById("academicTasks").value),
        sleepHours: parseFloat(document.getElementById("sleepHours").value),
        q1: parseInt(document.querySelector('input[name="q1"]:checked')?.value || 0),
        q2: parseInt(document.querySelector('input[name="q2"]:checked')?.value || 0),
        q3: parseInt(document.querySelector('input[name="q3"]:checked')?.value || 0),
        q4: parseInt(document.querySelector('input[name="q4"]:checked')?.value || 0),
        q5: parseInt(document.querySelector('input[name="q5"]:checked')?.value || 0),
        sentimentScore: sentiment
    };

    statusText.innerText = "กำลังทำการ Anonymize ข้อมูลส่วนบุคคล...";
    await new Promise(r => setTimeout(r, 600));

    statusText.innerText = "กำลังวิเคราะห์ Psychometrics (ST-5) และ Sentiment...";
    await new Promise(r => setTimeout(r, 600));

    const results = runAnalyticsEngine(inputs);
    const isCrisis = detectCrisisKeywords(cleanText) || results.stressIndex >= 75;

    document.getElementById("stressScore").innerText = results.stressIndex;
    document.getElementById("stressProgressBar").style.width = `${results.stressIndex}%`;
    
    const badge = document.getElementById("burnoutRiskBadge");
    badge.innerText = results.riskLevel;
    badge.style.backgroundColor = results.riskClass;

    document.getElementById("sentimentScore").innerText = sentiment.toFixed(2);

    const crisisBanner = document.getElementById("crisisBanner");
    if (isCrisis) crisisBanner.classList.remove("hidden");
    else crisisBanner.classList.add("hidden");

    const adviceBox = document.getElementById("adviceText");
    if (results.stressIndex >= 70) {
        adviceBox.innerText = `คุณ ${inputs.alias} มีความเครียดสะสมระดับสูง แนะนำให้ลดชั่วโมงการอ่านหนังสือลง เพิ่มเวลาพักผ่อนแบบ Pomodoro 20/10 นาที และทำกิจกรรมผ่อนคลายร่างกายครับ`;
    } else {
        adviceBox.innerText = `คุณ ${inputs.alias} มีระดับความเครียดในเกณฑ์ปกติ สามารถลุยงานและเตรียมสอบตามแผนปกติได้ดีครับ!`;
    }

    const scheduleList = document.getElementById("scheduleList");
    const scheduleData = generateAdaptiveSchedule(results.stressIndex);
    scheduleList.innerHTML = scheduleData.map(s => `<li><span>${s.time}</span> <span>${s.task}</span></li>`).join('');

    updateRadarChart([inputs.q1, inputs.q2, inputs.q3, inputs.q4, inputs.q5]);
    saveAndRenderTrend(results.stressIndex);

    document.getElementById("reportTime").innerText = new Date().toLocaleString("th-TH");
    overlay.classList.add("hidden");
}

// --------------------------------------------------------
// MODULE 5: Chart.js & LocalStorage Management
// --------------------------------------------------------
function initCharts() {
    const ctxRadar = document.getElementById("radarChart").getContext("2d");
    radarChartInstance = new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['การนอน', 'สมาธิ', 'ความกังวล', 'พลังใจ', 'การรับมือ'],
            datasets: [{
                label: 'ST-5 Dimension Score',
                data: [0, 0, 0, 0, 0],
                backgroundColor: 'rgba(13, 148, 136, 0.2)',
                borderColor: '#0d9488',
                pointBackgroundColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { r: { min: 0, max: 3, ticks: { display: false } } }
        }
    });

    const ctxTrend = document.getElementById("trendChart").getContext("2d");
    let history = JSON.parse(localStorage.getItem("unimind_history") || "[40, 45, 30, 50, 60]");
    
    trendChartInstance = new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: history.map((_, i) => `ครั้งที่ ${i+1}`),
            datasets: [{
                label: 'Stress Index Trend (%)',
                data: history,
                borderColor: '#0284c7',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { min: 0, max: 100 } }
        }
    });
}

function updateRadarChart(scores) {
    radarChartInstance.data.datasets[0].data = scores;
    radarChartInstance.update();
}

function saveAndRenderTrend(newScore) {
    let history = JSON.parse(localStorage.getItem("unimind_history") || "[]");
    history.push(newScore);
    if (history.length > 5) history.shift();
    localStorage.setItem("unimind_history", JSON.stringify(history));

    trendChartInstance.data.labels = history.map((_, i) => `ครั้งที่ ${i+1}`);
    trendChartInstance.data.datasets[0].data = history;
    trendChartInstance.update();
}

function exportJSONReport() {
    const data = {
        app: "UniMind Pro Analytics",
        timestamp: new Date().toISOString(),
        stressScore: document.getElementById("stressScore").innerText,
        riskLevel: document.getElementById("burnoutRiskBadge").innerText,
        history: JSON.parse(localStorage.getItem("unimind_history") || "[]")
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "unimind-analytics-report.json";
    a.click();
}
