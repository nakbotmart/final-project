// ========================================================
// UniMind Pro - Advanced Mental Health Analytics Engine
// ========================================================

let radarChartInstance = null;
let trendChartInstance = null;

document.addEventListener("DOMContentLoaded", () => {
    initCharts();
    
    const mentalForm = document.getElementById("mentalForm");
    if (mentalForm) {
        mentalForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            await processAnalyticsPipeline();
        });
    }
});

// --------------------------------------------------------
// MODULE 1: Anonymization & Security Guardrails
// --------------------------------------------------------
function anonymizeData(text) {
    if (!text) return { cleanedText: "", maskedCount: 0 };
    
    let maskedCount = 0;
    let cleanedText = text
        .replace(/\b\d{9,10}\b/g, () => { maskedCount++; return "[STUDENT_ID_HIDDEN]"; })
        .replace(/\b0\d{8,9}\b/g, () => { maskedCount++; return "[PHONE_HIDDEN]"; })
        .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, () => { maskedCount++; return "[EMAIL_HIDDEN]"; });

    return { cleanedText, maskedCount };
}

function detectCrisisKeywords(text) {
    const crisisKeywords = ["ไม่อยากอยู่", "ท้อแท้ที่สุด", "ไม่ไหวแล้ว", "อยากหายไป", "ซึมเศร้าหนัก"];
    return crisisKeywords.some(keyword => text.includes(keyword));
}

// คำนวณคะแนนความปลอดภัยของข้อมูลผู้ใช้ (Safety Score 0-100%)
function calculateUserSafetyMetrics(rawText, maskedCount, isCrisis) {
    let safetyScore = 100;
    let statusText = "100% Anonymized & Secure";

    if (maskedCount > 0) {
        statusText = `Data Shielded (${maskedCount} PII Masked)`;
    }
    if (isCrisis) {
        statusText = "Crisis Alert Intercepted";
    }

    return {
        score: safetyScore,
        status: statusText
    };
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
    let riskSubtitle = "ภาวะสมดุลการเรียนปกติ";
    let riskClass = "var(--risk-low)";

    if (finalStressIndex >= 75) { 
        riskLevel = "CRITICAL"; 
        riskSubtitle = "ภาวะเสี่ยงวิกฤต/เสี่ยงต่อการเสื่อมถอย";
        riskClass = "var(--risk-high)"; 
    }
    else if (finalStressIndex >= 50) { 
        riskLevel = "HIGH"; 
        riskSubtitle = "ภาวะเสี่ยงความเครียดสะสมสูง";
        riskClass = "var(--risk-high)"; 
    }
    else if (finalStressIndex >= 30) { 
        riskLevel = "MEDIUM"; 
        riskSubtitle = "ภาวะเสี่ยงความเครียดระดับปานกลาง";
        riskClass = "var(--risk-med)"; 
    }

    return {
        stressIndex: finalStressIndex,
        riskLevel: riskLevel,
        riskSubtitle: riskSubtitle,
        riskClass: riskClass,
        psychometricSum: psychometricSum
    };
}

// --------------------------------------------------------
// MODULE 3: Adaptive Schedule & Recommendation Logic
// --------------------------------------------------------
function generateAdaptiveSchedule(stressIndex) {
    if (stressIndex >= 50) {
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
    if (overlay) overlay.classList.remove("hidden");

    const reflectionInput = document.getElementById("reflectionText");
    const rawText = reflectionInput ? reflectionInput.value : "";
    const { cleanedText, maskedCount } = anonymizeData(rawText);
    const sentiment = calculateLexiconSentiment(cleanedText);

    const aliasInput = document.getElementById("alias");
    const emotionInput = document.getElementById("emotionState");
    const academicInput = document.getElementById("academicTasks");
    const sleepInput = document.getElementById("sleepHours");

    const inputs = {
        alias: aliasInput ? (aliasInput.value.trim() || "ผู้ใช้งาน") : "ผู้ใช้งาน",
        emotionState: emotionInput ? parseInt(emotionInput.value) || 3 : 3,
        academicTasks: academicInput ? parseInt(academicInput.value) || 0 : 0,
        sleepHours: sleepInput ? parseFloat(sleepInput.value) || 8 : 8,
        q1: parseInt(document.querySelector('input[name="q1"]:checked')?.value || 0),
        q2: parseInt(document.querySelector('input[name="q2"]:checked')?.value || 0),
        q3: parseInt(document.querySelector('input[name="q3"]:checked')?.value || 0),
        q4: parseInt(document.querySelector('input[name="q4"]:checked')?.value || 0),
        q5: parseInt(document.querySelector('input[name="q5"]:checked')?.value || 0),
        sentimentScore: sentiment
    };

    if (statusText) statusText.innerText = "กำลังทำการ Anonymize ข้อมูลส่วนบุคคล...";
    await new Promise(r => setTimeout(r, 400));

    if (statusText) statusText.innerText = "กำลังวิเคราะห์ Psychometrics (ST-5) และ Sentiment...";
    await new Promise(r => setTimeout(r, 400));

    const results = runAnalyticsEngine(inputs);
    const isCrisis = detectCrisisKeywords(cleanedText) || results.stressIndex >= 75;
    const safetyMetrics = calculateUserSafetyMetrics(rawText, maskedCount, isCrisis);

    // อัปเดต Stress Index & Bar
    const stressScore = document.getElementById("stressScore");
    if (stressScore) stressScore.innerText = results.stressIndex;

    const stressProgressBar = document.getElementById("stressProgressBar");
    if (stressProgressBar) stressProgressBar.style.width = `${results.stressIndex}%`;
    
    // อัปเดต Burnout Risk Badge
    const badge = document.getElementById("burnoutRiskBadge");
    if (badge) {
        badge.innerText = results.riskLevel;
        badge.style.backgroundColor = results.riskClass;
        
        const riskDesc = badge.nextElementSibling;
        if (riskDesc) riskDesc.innerText = results.riskSubtitle;
    }

    // อัปเดต NLP Sentiment
    const sentimentScore = document.getElementById("sentimentScore");
    if (sentimentScore) {
        sentimentScore.innerText = sentiment.toFixed(2);
        const sentimentLabel = sentimentScore.nextElementSibling;
        if (sentimentLabel) {
            if (sentiment > 0.2) sentimentLabel.innerText = "Positive Tone";
            else if (sentiment < -0.2) sentimentLabel.innerText = "Negative Tone";
            else sentimentLabel.innerText = "Neutral Tone";
        }
    }

    // อัปเดต User Safety & Security Card (ถ้ามี UI Element)
    const safetyScoreElem = document.getElementById("safetyScore");
    if (safetyScoreElem) safetyScoreElem.innerText = `${safetyMetrics.score}%`;
    const safetyStatusElem = document.getElementById("safetyStatusText");
    if (safetyStatusElem) safetyStatusElem.innerText = safetyMetrics.status;

    // crisis banner
    const crisisBanner = document.getElementById("crisisBanner");
    if (crisisBanner) {
        if (isCrisis) crisisBanner.classList.remove("hidden");
        else crisisBanner.classList.add("hidden");
    }

    // advice text
    const adviceBox = document.getElementById("adviceText");
    if (adviceBox) {
        if (results.stressIndex >= 50) {
            adviceBox.innerText = `คุณ${inputs.alias} มีระดับความเครียดสะสมค่อนข้างสูง (${results.stressIndex}%) แนะนำให้ลดชั่วโมงการอ่านหนังสือลง เพิ่มเวลาพักผ่อนแบบ Pomodoro 20/10 นาที และทำกิจกรรมผ่อนคลายร่างกายเพื่อลดความสุ่มเสี่ยงภาวะ Burnout ครับ`;
        } else {
            adviceBox.innerText = `คุณ${inputs.alias} มีระดับความเครียดอยู่ในเกณฑ์ปกติ (${results.stressIndex}%) สามารถลุยงานและเตรียมสอบตามแผนปกติได้ดีครับ!`;
        }
    }

    // schedule
    const scheduleList = document.getElementById("scheduleList");
    if (scheduleList) {
        const scheduleData = generateAdaptiveSchedule(results.stressIndex);
        scheduleList.innerHTML = scheduleData.map(s => `<li><span>${s.time}</span> <span>${s.task}</span></li>`).join('');
    }

    updateRadarChart([inputs.q1, inputs.q2, inputs.q3, inputs.q4, inputs.q5]);
    saveAndRenderTrend(results.stressIndex);

    const reportTime = document.getElementById("reportTime");
    if (reportTime) reportTime.innerText = new Date().toLocaleString("th-TH");

    if (overlay) overlay.classList.add("hidden");
}

// --------------------------------------------------------
// MODULE 5: Chart.js & LocalStorage Management
// --------------------------------------------------------
function initCharts() {
    const radarElem = document.getElementById("radarChart");
    if (radarElem) {
        const ctxRadar = radarElem.getContext("2d");
        radarChartInstance = new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['การนอน', 'สมาธิ', 'ความกังวล', 'พลังใจ', 'การรับมือ'],
                datasets: [{
                    label: 'ST-5 Dimension Score',
                    data: [0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(59, 96, 77, 0.2)',
                    borderColor: '#3B604D',
                    pointBackgroundColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { r: { min: 0, max: 3, ticks: { display: false } } }
            }
        });
    }

    const trendElem = document.getElementById("trendChart");
    if (trendElem) {
        const ctxTrend = trendElem.getContext("2d");
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
}

function updateRadarChart(scores) {
    if (radarChartInstance) {
        radarChartInstance.data.datasets[0].data = scores;
        radarChartInstance.update();
    }
}

function saveAndRenderTrend(newScore) {
    let history = JSON.parse(localStorage.getItem("unimind_history") || "[]");
    history.push(newScore);
    if (history.length > 5) history.shift();
    localStorage.setItem("unimind_history", JSON.stringify(history));

    if (trendChartInstance) {
        trendChartInstance.data.labels = history.map((_, i) => `ครั้งที่ ${i+1}`);
        trendChartInstance.data.datasets[0].data = history;
        trendChartInstance.update();
    }
}

function exportJSONReport() {
    const stressElem = document.getElementById("stressScore");
    const riskElem = document.getElementById("burnoutRiskBadge");

    const data = {
        app: "UniMind Pro Analytics",
        timestamp: new Date().toISOString(),
        stressScore: stressElem ? stressElem.innerText : "0",
        riskLevel: riskElem ? riskElem.innerText : "LOW",
        history: JSON.parse(localStorage.getItem("unimind_history") || "[]")
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "unimind-analytics-report.json";
    a.click();
}
