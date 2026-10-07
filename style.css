:root {
    /* โทนสีครีม อบอุ่น ละมุนตา ผสมสีเขียวธรรมชาติ (Warm Cream & Sage Forest) */
    --bg-main: #F7F5F0;             /* สีครีมอุ่นนุ่มนวล */
    --card-bg: rgba(255, 253, 249, 0.85); /* สีครีมขาวละมุนสำหรับ Glass Card */
    --text-main: #2C3E35;           /* สีเขียวเข้มอมเทา อ่านง่าย สบายตา */
    --text-muted: #6B7C72;          /* สีเขียวใบไม้อ่อนอมเทา */
    
    /* โทนสีเขียวหลัก */
    --primary-green: #3B604D;       /* สีเขียวป่า (Forest Sage) */
    --accent-sage: #52796F;          /* สีเขียวเสจ */
    --light-sage: #E8EFEA;           /* สีเขียวครีมอ่อนมากๆ */
    --card-border: rgba(82, 121, 111, 0.15);
    --card-radius: 20px;
    
    /* Risk Levels */
    --risk-low: #4A7C59;            /* เขียวธรรมชาติ */
    --risk-med: #D97706;            /* ส้มอุ่น */
    --risk-high: #DC2626;           /* แดง */
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Prompt', sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background-color: var(--bg-main);
    background-image: radial-gradient(#e2ded4 1px, transparent 1px);
    background-size: 24px 24px; /* ลาย Dot เบาๆ เพิ่มความสวยงาม */
    color: var(--text-main);
    min-height: 100vh;
    padding: 16px;
    overflow-x: hidden;
    position: relative;
}

/* Background Glowing Orbs โทนเขียว-ครีมอุ่น */
.bg-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(100px);
    z-index: -1;
    opacity: 0.4;
    pointer-events: none;
}
.orb-1 { width: 350px; height: 350px; background: #D8E2DC; top: -50px; left: -50px; }
.orb-2 { width: 300px; height: 300px; background: #B7B7A4; bottom: -50px; right: -50px; }
.orb-3 { width: 250px; height: 250px; background: #A3B18A; top: 40%; left: 35%; }

.container {
    max-width: 1280px;
    margin: 0 auto;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 22px;
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--card-border);
    border-radius: var(--card-radius);
    margin-bottom: 20px;
    box-shadow: 0 4px 20px rgba(44, 62, 53, 0.04);
}
.logo {
    font-size: 1.25rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--primary-green);
}
.icon-logo { color: var(--accent-sage); font-size: 1.5rem; }
.logo small { font-size: 0.65rem; color: var(--accent-sage); letter-spacing: 1px; display: block; }

.status-badge {
    font-size: 0.8rem;
    background: var(--light-sage);
    border: 1px solid var(--card-border);
    color: var(--primary-green);
    padding: 6px 14px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    font-weight: 500;
}
.pulse-dot {
    width: 8px;
    height: 8px;
    background-color: var(--risk-low);
    border-radius: 50%;
    box-shadow: 0 0 6px var(--risk-low);
}

/* Layout Grid */
.main-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 20px;
}

/* Glassmorphism Cards */
.glass-card {
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--card-border);
    border-radius: var(--card-radius);
    padding: 24px;
    box-shadow: 0 8px 24px rgba(44, 62, 53, 0.05);
}

.card-header h2 {
    font-size: 1.15rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 6px;
    color: var(--primary-green);
}
.subtitle { font-size: 0.825rem; color: var(--text-muted); margin-bottom: 18px; line-height: 1.4; }

/* Form Controls */
.form-group-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 12px;
}
.input-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;
}
.input-group.full-width { grid-column: span 2; }

label { font-size: 0.825rem; color: var(--text-main); font-weight: 500; }
input, select, textarea {
    background: #FFF;
    border: 1px solid rgba(82, 121, 111, 0.25);
    border-radius: 12px;
    padding: 10px 14px;
    color: var(--text-main);
    font-size: 0.9rem;
    outline: none;
    transition: all 0.25s ease;
    width: 100%;
}
input:focus, select:focus, textarea:focus {
    border-color: var(--accent-sage);
    box-shadow: 0 0 0 3px rgba(82, 121, 111, 0.15);
}

/* Psychometric Scale (ST-5) */
.psychometric-box {
    background: #F0F4F1;
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 16px;
}
.psychometric-box h3 {
    font-size: 0.9rem;
    color: var(--primary-green);
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
}
.q-item {
    margin-bottom: 14px;
    padding-bottom: 12px;
    border-bottom: 1px dashed rgba(82, 121, 111, 0.2);
}
.q-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.q-item label { display: block; font-size: 0.85rem; margin-bottom: 10px; line-height: 1.4; color: var(--text-main); }

.scale-options {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
}
.scale-options label {
    font-size: 0.75rem;
    background: #FFF;
    border: 1px solid rgba(82, 121, 111, 0.2);
    padding: 8px 4px;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin: 0;
    color: var(--text-main);
}
.scale-options label:hover {
    background: var(--light-sage);
    border-color: var(--accent-sage);
}

/* Buttons */
.btn-primary {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #3B604D 0%, #52796F 100%);
    border: none;
    border-radius: 12px;
    color: #FFF;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 4px 15px rgba(59, 96, 77, 0.25);
}
.btn-primary:active { transform: scale(0.98); }

.btn-secondary {
    width: 100%;
    padding: 12px;
    background: #FFF;
    border: 1px solid var(--card-border);
    border-radius: 10px;
    color: var(--primary-green);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}
.btn-secondary:hover { background: var(--light-sage); }

/* Dashboard Content */
.dashboard-section { position: relative; }
.metrics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin: 16px 0;
}
.metric-card {
    background: #FFF;
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 14px;
    box-shadow: 0 2px 8px rgba(44, 62, 53, 0.03);
}
.metric-title { font-size: 0.725rem; color: var(--text-muted); font-weight: 500; display: block; }
.metric-value-box { margin: 6px 0; }
.metric-number { font-size: 1.6rem; font-weight: 700; color: var(--primary-green); }
.progress-bar-bg { height: 6px; background: #E2E8F0; border-radius: 10px; overflow: hidden; }
.progress-bar-fill { height: 100%; width: 0%; background: var(--accent-sage); transition: width 0.5s ease; }

.badge-risk {
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    background: var(--risk-low);
    color: #FFF;
    display: inline-block;
}

/* Charts */
.charts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
}
.chart-box {
    background: #FFF;
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 12px;
}
.chart-box h3 { font-size: 0.775rem; color: var(--text-muted); margin-bottom: 8px; }
.chart-container { position: relative; height: 170px; }

/* Dynamic Schedule & Recommendations */
.recommendation-box, .schedule-box {
    background: var(--light-sage);
    border: 1px solid rgba(82, 121, 111, 0.2);
    border-radius: 12px;
    padding: 14px;
    margin-bottom: 12px;
}
.recommendation-box h3, .schedule-box h3 { font-size: 0.85rem; color: var(--primary-green); margin-bottom: 6px; }
#adviceText { font-size: 0.825rem; line-height: 1.5; color: var(--text-main); }

.schedule-list { list-style: none; font-size: 0.8rem; }
.schedule-list li { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px dashed rgba(82, 121, 111, 0.2); gap: 10px; color: var(--text-main); }

/* Crisis Alert */
.crisis-banner {
    background: #FEE2E2;
    border: 1px solid var(--risk-high);
    border-radius: 12px;
    padding: 12px 14px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    color: #991B1B;
    margin-bottom: 16px;
    font-size: 0.8rem;
}
.hidden { display: none !important; }

/* Loading State */
.loading-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(247, 245, 240, 0.92);
    backdrop-filter: blur(8px);
    border-radius: var(--card-radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    padding: 20px;
    text-align: center;
    color: var(--primary-green);
}
.spinner {
    width: 36px; height: 36px;
    border: 3px solid rgba(59, 96, 77, 0.15);
    border-top-color: var(--primary-green);
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
    margin-bottom: 12px;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ========================================================
   MOBILE RESPONSIVE (รองรับการใช้งานผ่านมือถือ)
   ======================================================== */
@media (max-width: 900px) {
    .main-grid { grid-template-columns: 1fr; }
    .charts-grid { grid-template-columns: 1fr; }
    .chart-container { height: 200px; }
}

@media (max-width: 600px) {
    body { padding: 10px; }
    .navbar { padding: 12px 14px; margin-bottom: 14px; }
    .glass-card { padding: 16px; border-radius: 16px; }
    .form-group-row { grid-template-columns: 1fr; gap: 0; }
    
    .scale-options {
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
    }
    .scale-options label { padding: 10px 6px; font-size: 0.8rem; }
    .metrics-grid { grid-template-columns: 1fr; gap: 10px; }
}
