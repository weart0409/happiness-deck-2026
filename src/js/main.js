/**
 * 데이터로 풀어보는 행복의 비밀 - 슬라이드덱 스크립트
 * 1. Reveal.js 초기화
 * 2. 3대 멀티 테마 스위처 (PPT / 스타벅스 / 디스코드)
 * 3. Chart.js 기반 인터랙티브 모션 그래픽 (회귀분석 & 갭 분석)
 * 4. 레퍼런스 모달 인터랙션 (REF-01 ~ REF-10)
 */

// ==========================================================================
// 1. 레퍼런스 데이터베이스 (REFERENCES.md 및 논문 분석 데이터)
// ==========================================================================
const referenceStore = {
  "REF-01": {
    id: "REF-01",
    title: "State of the Global Workplace (글로벌 직장 현황 보고서)",
    author: "Gallup Inc. (2023–2024)",
    keyFinding: "전 세계 직장인의 23%만이 업무에 몰입하고 있으며, 59%는 '조용한 사직(Quiet Quitting)' 상태. 한국을 비롯한 동아시아 몰입도는 14%로 최하위권.",
    url: "https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx"
  },
  "REF-02": {
    id: "REF-02",
    title: "High income improves evaluation of life but not emotional well-being (소득과 정서적 웰빙)",
    author: "Daniel Kahneman & Angus Deaton (PNAS, 2010)",
    keyFinding: "일정 소득(약 75,000달러) 이상에서는 일상적 행복감이 소득과 비례하지 않음. 행복의 한계효용 체감 분석.",
    url: "https://www.pnas.org/doi/10.1073/pnas.1011492107"
  },
  "REF-03": {
    id: "REF-03",
    title: "Self-Determination Theory: Basic Psychological Needs (자기결정성 이론)",
    author: "Edward L. Deci & Richard M. Ryan (2000, 2017)",
    keyFinding: "내적 동기와 행복의 3대 필수 심리 욕구: 자율성(Autonomy), 유능감(Competence), 관계성(Relatedness).",
    url: "https://selfdeterminationtheory.org/"
  },
  "REF-04": {
    id: "REF-04",
    title: "The Job Demands-Resources Model of Work Engagement (직무 요구-자원 모델)",
    author: "Arnold B. Bakker & Evangelia Demerouti (2007)",
    keyFinding: "번아웃은 업무량 자체보다 업무를 지탱할 '직무 자원(피드백, 자율성, 동료 지지)'의 부족에서 기인함.",
    url: "https://www.emerald.com/insight/content/doi/10.1108/02683940710733697/full/html"
  },
  "REF-05": {
    id: "REF-05",
    title: "The Harvard Study of Adult Development (하버드 성인발달연구 85년)",
    author: "Robert Waldinger & Marc Schulz (2023)",
    keyFinding: "85년간 수백 명을 추적한 결과, 인간을 행복하고 건강하게 만드는 핵심 요인은 부나 명예가 아니라 '좋은 인간관계'.",
    url: "https://news.harvard.edu/gazette/story/2017/04/over-nearly-80-years-harvard-study-has-been-showing-how-to-lead-a-healthy-and-happy-life/"
  },
  "REF-06": {
    id: "REF-06",
    title: "The Fearless Organization & Project Aristotle (심리적 안전감 연구)",
    author: "Amy C. Edmondson (Harvard) & Google People Operations",
    keyFinding: "탁월하고 행복한 팀의 제1 성공 요인은 '심리적 안전감(Psychological Safety)'. 비난 없이 질문과 실수를 공유할 수 있는 문화.",
    url: "https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/introduction/"
  },
  "REF-07": {
    id: "REF-07",
    title: "Turn the Job You Have into the Job You Want (잡 크래프팅 연구)",
    author: "Amy Wrzesniewski & Jane E. Dutton (Harvard Business Review, 2010)",
    keyFinding: "과업, 관계, 인지를 스스로 재설계하는 '잡 크래프팅'을 통해 수동적 업무를 의미 있는 소명으로 전환.",
    url: "https://hbr.org/2010/06/turn-the-job-you-have-into-the-job-you-want"
  },
  "REF-08": {
    id: "REF-08",
    title: "World Happiness Report 2026 (세계 행복 보고서 원문)",
    author: "UN SDSN, Oxford Wellbeing Research Centre, Gallup (2026)",
    keyFinding: "전 세계 147개국의 행복 순위 및 6대 핵심 지표(GDP, 사회적 지지, 건강수명, 자유, 관용, 부패 인식) 공식 데이터셋.",
    url: "https://worldhappiness.report/"
  },
  "REF-09": {
    id: "REF-09",
    title: "대한민국 행복지도: 한국형 행복지수의 개발과 응용",
    author: "이희철, 구교준, 김지원, 박차늠 (정책분석평가학회보, 2020)",
    keyFinding: "228개 시군구 데이터 기반 8대 도메인 지표화. Min-Max 정규화 및 Ward 군집분석(6개 군집)을 통해 '경제적 번영이 삶의 만족으로 직결되지 않음'을 실증.",
    url: "file:///C:/Users/user/Desktop/work/references/raw/korea_happiness_map_2020.pdf"
  },
  "REF-10": {
    id: "REF-10",
    title: "세계행복보고서 2026 기반 한국 행복지표의 구조적 분석: 클러스터링·회귀를 통한 격차 진단",
    author: "김병문, 김영식, 이상민 (Journal of Health Care and Life Science, 2026)",
    keyFinding: "WHR 2026 실측 분석: 핀란드와 한국의 1.724점 격차 중 GDP는 2.6%(0.045점)에 불과. 반면 사회적 지지(24.2%), 부패 인식(20.7%)이 핵심 격차 요인. 단순선형회귀에서 사회적 지지의 설명력(R²=0.689)이 최고.",
    url: "file:///C:/Users/user/Desktop/work/references/raw/whr_2026_korea_structural_analysis.pdf"
  }
};

// ==========================================================================
// 2. 테마 스위처 (Theme Switcher)
// ==========================================================================
let currentTheme = localStorage.getItem("lectureTheme") || "ppt";

function applyTheme(themeName) {
  currentTheme = themeName;
  localStorage.setItem("lectureTheme", themeName);

  const body = document.body;
  const revealEl = document.querySelector(".reveal");

  body.classList.remove("theme-ppt", "theme-starbucks", "theme-discord");
  revealEl.classList.remove("theme-ppt", "theme-starbucks", "theme-discord");

  const themeClass = `theme-${themeName}`;
  body.classList.add(themeClass);
  revealEl.classList.add(themeClass);

  // 버튼 active 표시
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-theme") === themeName);
  });

  // 차트 테마 업데이트
  updateChartColors();
}

// ==========================================================================
// 3. 인터랙티브 차트 (Chart.js 모션그래픽)
// ==========================================================================
let regressionChartInstance = null;
let gapChartInstance = null;

// 가상/실측 데이터셋 (WHR 2026 기반)
const regressionDatasets = {
  social: {
    label: "사회적 지지(Social Support) vs 행복점수",
    r2: "0.689 (설명력 68.9% - 1위)",
    slope: "y = 2.834x + 2.15",
    color: "#2563EB",
    points: [
      { x: 0.65, y: 3.8 }, { x: 0.72, y: 4.2 }, { x: 0.85, y: 4.6 },
      { x: 0.95, y: 5.1 }, { x: 1.10, y: 5.4 }, { x: 1.25, y: 5.7 },
      { x: 1.37, y: 6.04 }, // 한국
      { x: 1.45, y: 6.3 }, { x: 1.55, y: 6.8 }, { x: 1.65, y: 7.2 },
      { x: 1.79, y: 7.76 }  // 핀란드
    ],
    line: [{ x: 0.6, y: 3.85 }, { x: 1.85, y: 7.85 }]
  },
  gdp: {
    label: "1인당 GDP vs 행복점수",
    r2: "0.541 (설명력 54.1% - 3위)",
    slope: "y = 2.451x + 2.30",
    color: "#10B981",
    points: [
      { x: 0.50, y: 3.5 }, { x: 0.80, y: 4.5 }, { x: 1.10, y: 4.8 },
      { x: 1.30, y: 6.2 }, { x: 1.50, y: 5.6 }, { x: 1.70, y: 6.04 }, // 한국
      { x: 1.75, y: 7.76 }, // 핀란드
      { x: 1.85, y: 6.8 }, { x: 1.95, y: 6.4 }, { x: 2.05, y: 7.3 }
    ],
    line: [{ x: 0.4, y: 3.28 }, { x: 2.1, y: 7.45 }]
  },
  corruption: {
    label: "부패 인식(투명성) vs 행복점수",
    r2: "0.584 (설명력 58.4% - 2위)",
    slope: "y = 3.081x + 4.12",
    color: "#F59E0B",
    points: [
      { x: 0.05, y: 4.1 }, { x: 0.10, y: 4.7 }, { x: 0.149, y: 6.04 }, // 한국
      { x: 0.22, y: 5.9 }, { x: 0.35, y: 6.6 }, { x: 0.42, y: 7.1 },
      { x: 0.505, y: 7.76 } // 핀란드
    ],
    line: [{ x: 0.02, y: 4.18 }, { x: 0.55, y: 7.81 }]
  }
};

function initRegressionChart() {
  const ctx = document.getElementById("regressionChart");
  if (!ctx) return;

  const initial = regressionDatasets.social;

  regressionChartInstance = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: initial.label,
          data: initial.points,
          backgroundColor: initial.color,
          borderColor: initial.color,
          pointRadius: 6,
          pointHoverRadius: 8
        },
        {
          label: `회귀선 (${initial.slope})`,
          data: initial.line,
          type: "line",
          borderColor: initial.color,
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 800,
        easing: "easeOutQuart"
      },
      scales: {
        x: {
          title: { display: true, text: "해당 지표 점수 (독립변수 X)" },
          grid: { color: "rgba(150, 150, 150, 0.15)" }
        },
        y: {
          title: { display: true, text: "국가별 행복 점수 (종속변수 Y)" },
          min: 3.0,
          max: 8.5,
          grid: { color: "rgba(150, 150, 150, 0.15)" }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => `X: ${ctx.parsed.x.toFixed(2)}, 행복점수: ${ctx.parsed.y.toFixed(2)}`
          }
        }
      }
    }
  });
}

window.toggleRegression = function(key) {
  if (!regressionChartInstance) return;

  const data = regressionDatasets[key];
  if (!data) return;

  // 버튼 스타일 업데이트
  document.querySelectorAll(".btn-reg-toggle").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-key") === key);
  });

  // 설명 텍스트 업데이트
  const r2Label = document.getElementById("regressionR2Badge");
  const formulaLabel = document.getElementById("regressionFormula");
  if (r2Label) r2Label.innerText = `R² = ${data.r2}`;
  if (formulaLabel) formulaLabel.innerText = data.slope;

  // 차트 데이터 업데이트
  regressionChartInstance.data.datasets[0].label = data.label;
  regressionChartInstance.data.datasets[0].data = data.points;
  regressionChartInstance.data.datasets[0].backgroundColor = data.color;
  regressionChartInstance.data.datasets[0].borderColor = data.color;

  regressionChartInstance.data.datasets[1].label = `회귀선 (${data.slope})`;
  regressionChartInstance.data.datasets[1].data = data.line;
  regressionChartInstance.data.datasets[1].borderColor = data.color;

  regressionChartInstance.update();
};

function initGapChart() {
  const ctx = document.getElementById("gapChart");
  if (!ctx) return;

  gapChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "디스토피아 잔차 (37.1%)",
        "사회적 지지 (24.2%)",
        "부패 인식 (20.7%)",
        "삶의 선택 자유 (17.5%)",
        "1인당 GDP (2.6%)"
      ],
      datasets: [
        {
          label: "핀란드-한국 행복 격차(1.724점) 기여율 (%)",
          data: [37.1, 24.2, 20.7, 17.5, 2.6],
          backgroundColor: [
            "rgba(148, 163, 184, 0.8)",
            "rgba(37, 99, 235, 0.85)",
            "rgba(245, 158, 11, 0.85)",
            "rgba(16, 185, 129, 0.85)",
            "rgba(244, 63, 94, 0.85)"
          ],
          borderRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      animation: {
        duration: 1000
      },
      scales: {
        x: {
          max: 45,
          title: { display: true, text: "격차 기여율 (%)" },
          grid: { color: "rgba(150, 150, 150, 0.15)" }
        },
        y: {
          grid: { display: false }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function updateChartColors() {
  // 테마에 따른 축 글자색 및 격자 조정
  const isDark = currentTheme === "discord";
  const textColor = isDark ? "#DBDEE1" : "#475569";

  [regressionChartInstance, gapChartInstance].forEach((chart) => {
    if (chart) {
      if (chart.options.scales.x) chart.options.scales.x.ticks.color = textColor;
      if (chart.options.scales.y) chart.options.scales.y.ticks.color = textColor;
      chart.update();
    }
  });
}

// ==========================================================================
// 4. 레퍼런스 모달 로직
// ==========================================================================
function initReferenceModal() {
  const modalOverlay = document.getElementById("refModalOverlay");
  const modalBody = document.getElementById("refModalBody");
  const closeBtn = document.getElementById("refModalClose");

  if (!modalOverlay || !modalBody || !closeBtn) return;

  document.querySelectorAll(".ref-badge").forEach((badge) => {
    badge.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const refId = badge.getAttribute("data-ref");
      const refData = referenceStore[refId];

      if (refData) {
        modalBody.innerHTML = `
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 0.75rem;">
            <span style="background: rgba(37, 99, 235, 0.15); color: #2563EB; padding: 3px 10px; border-radius: 6px; font-weight: 700; font-size: 0.85rem;">${refData.id}</span>
            <span style="font-size: 0.88rem; opacity: 0.7;">${refData.author}</span>
          </div>
          <h3 style="font-size: 1.35rem; margin-bottom: 1rem; line-height: 1.4;">${refData.title}</h3>
          <div style="background: rgba(150, 150, 150, 0.08); padding: 1.1rem; border-radius: 10px; margin-bottom: 1.25rem;">
            <strong style="color: #2563EB; font-size: 0.88rem; display: block; margin-bottom: 6px;">📊 핵심 분석 및 시사점</strong>
            <p style="font-size: 0.95rem; line-height: 1.6; margin: 0;">${refData.keyFinding}</p>
          </div>
          <a href="${refData.url}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; color: #2563EB; font-size: 0.9rem; text-decoration: none; font-weight: 600;">
            🔗 원문 및 로컬 파일 열람하기 &rarr;
          </a>
        `;
        modalOverlay.classList.add("active");
      }
    });
  });

  closeBtn.addEventListener("click", () => modalOverlay.classList.remove("active"));
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      modalOverlay.classList.remove("active");
      e.stopPropagation();
    }
  });
}

// ==========================================================================
// 5. 초기화 진입점
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Reveal.js 초기화
  Reveal.initialize({
    hash: true,
    slideNumber: "c/t",
    controls: true,
    progress: true,
    center: true,
    transition: "slide",
    backgroundTransition: "fade",
    width: 1200,
    height: 700,
    margin: 0.06
  });

  // 테마 이벤트 연결
  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      applyTheme(theme);
    });
  });

  applyTheme(currentTheme);

  // 차트 및 모달 초기화
  initRegressionChart();
  initGapChart();
  initReferenceModal();

  // Reveal 슬라이드 변경 시 차트 리사이즈
  Reveal.on("slidechanged", () => {
    if (regressionChartInstance) regressionChartInstance.resize();
    if (gapChartInstance) gapChartInstance.resize();
  });
});
