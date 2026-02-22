/* ═══════════════════════════════════════
   i18n TRANSLATIONS
═══════════════════════════════════════ */
const TRANSLATIONS = {
    en: {
        'step-of': (s, t) => `Step ${s} of ${t}`,
        sidebar: {
            1: { title: 'Your AI Coordinator',  desc: '"I analyze your responses in real-time to find the best clinics and save you up to 40 hours of searching."' },
            2: { title: 'Finding your range',   desc: '"Budget is key — I use it to filter out clinics that don\'t fit and surface the best value options for you."' },
            3: { title: 'Location matters',     desc: '"Seoul alone has over 500 clinics. I\'ll narrow it down to your preferred area."' },
            4: { title: 'Your priorities',      desc: '"Understanding what matters most helps me rank clinics in the right order for you."' },
            5: { title: 'Almost there!',        desc: '"Timing helps me show you clinics with current availability — so you\'re not waiting weeks for a slot."' },
        },
        questions: {
            1: 'Which medical field are you interested in?',
            2: 'What is your approximate budget?',
            3: 'Preferred clinic location in Korea?',
            4: 'What matters most to you when choosing?',
            5: 'When are you planning to visit Korea?',
        },
        q1: ['Dentistry', 'Plastic Surgery', 'Diagnostics', 'Other'],
        q2: { economy: 'Economy', standard: 'Standard', premium: 'Premium',
              economy_sub: 'Up to $2K', standard_sub: '$3K–$7K', premium_sub: '$10K+' },
        q3: [
            { label: 'Seoul',        sub: 'Most options' },
            { label: 'Busan',        sub: 'Coastal city' },
            { label: 'Any city',     sub: 'Flexible' },
            { label: 'Near airport', sub: 'Easy travel' },
        ],
        q4: [
            { label: 'Reputation',      sub: 'Awards & reviews' },
            { label: 'Best price',      sub: 'Value for money' },
            { label: 'Russian support', sub: 'Full communication' },
            { label: 'Fast booking',    sub: 'Within 2 weeks' },
        ],
        q5: [
            { label: 'ASAP',           sub: 'Within 1 month' },
            { label: 'In 1–3 months',  sub: 'Planning ahead' },
            { label: 'In 3–6 months',  sub: 'No rush' },
            { label: 'Just exploring', sub: 'No set date' },
        ],
        dropdown_header: 'Choose specialization',
        dropdown_items: ['IVF / Childbirth', 'Orthopedics', 'Cardiology', 'Neurology', 'Ophthalmology', 'Oncology', 'Rehabilitation'],
        btn_back: 'Back',
        btn_continue: 'Continue',
        btn_results: 'See My Results',
        alert_fill: 'Please fill in your name and phone / WhatsApp number.',
        contact_title: '📩 Get a free personal consultation',
        contact_desc:  'Our coordinator will contact you within 2 hours and help you choose the best option',
        contact_name:  'Your name',
        contact_phone: 'WhatsApp / Phone',
        contact_email: 'Email (optional)',
        contact_btn:   '✉️ Send — it\'s free',
        success_title: 'We\'ll be in touch soon!',
        success_desc:  'Our coordinator will contact you within 2 hours via WhatsApp or email.',
    },
    ru: {
        'step-of': (s, t) => `Шаг ${s} из ${t}`,
        sidebar: {
            1: { title: 'Ваш AI-координатор',      desc: '"Я анализирую ваши ответы в режиме реального времени, чтобы найти лучшие клиники и сэкономить вам до 40 часов поиска."' },
            2: { title: 'Определяем ваш бюджет',   desc: '"Бюджет — ключевой фактор. Я использую его, чтобы отфильтровать неподходящие клиники и найти лучшее соотношение цены и качества."' },
            3: { title: 'Локация важна',            desc: '"Только в Сеуле более 500 клиник. Я сужу поиск до вашего предпочтительного района."' },
            4: { title: 'Ваши приоритеты',          desc: '"Понимание того, что важно именно вам, помогает мне правильно ранжировать клиники."' },
            5: { title: 'Почти готово!',             desc: '"Сроки помогают мне показывать клиники с актуальной доступностью — чтобы вам не пришлось ждать."' },
        },
        questions: {
            1: 'Какую область здоровья вы хотели бы доверить корейским специалистам?',
            2: 'На какой ценовой сегмент медицинских учреждений вы ориентируетесь?',
            3: 'Где вам было бы удобнее остановиться для прохождения процедур?',
            4: 'Что является для вас определяющим фактором при выборе клиники?',
            5: 'В какой период вы рассматриваете возможность визита в Корею?',
        },
        q1: ['Стоматология', 'Пластическая хирургия', 'Диагностика', 'Другое'],
        q2: { economy: 'Эконом', standard: 'Стандарт', premium: 'Премиум',
              economy_sub: 'До $2K', standard_sub: '$3K–$7K', premium_sub: '$10K+' },
        q3: [
            { label: 'Сеул',               sub: 'Больше всего вариантов' },
            { label: 'Пусан',              sub: 'Город у моря' },
            { label: 'Любой город',        sub: 'Гибкий выбор' },
            { label: 'Рядом с аэропортом', sub: 'Удобный перелёт' },
        ],
        q4: [
            { label: 'Репутация',            sub: 'Награды и отзывы' },
            { label: 'Лучшая цена',          sub: 'Цена и качество' },
            { label: 'Поддержка на русском', sub: 'Полная коммуникация' },
            { label: 'Быстрая запись',       sub: 'В течение 2 недель' },
        ],
        q5: [
            { label: 'Как можно скорее',  sub: 'В течение месяца' },
            { label: 'Через 1–3 месяца',  sub: 'Планирую заранее' },
            { label: 'Через 3–6 месяцев', sub: 'Не спешу' },
            { label: 'Просто изучаю',     sub: 'Дата не определена' },
        ],
        dropdown_header: 'Выберите специализацию',
        dropdown_items: ['ЭКО / Роды', 'Ортопедия', 'Кардиология', 'Неврология', 'Офтальмология', 'Онкология', 'Реабилитация'],
        btn_back: 'Назад',
        btn_continue: 'Продолжить',
        btn_results: 'Показать результаты',
        alert_fill: 'Пожалуйста, заполните имя и номер телефона / WhatsApp.',
        contact_title: '📩 Получите бесплатную консультацию',
        contact_desc:  'Наш координатор свяжется с вами в течение 2 часов и поможет выбрать лучший вариант',
        contact_name:  'Ваше имя',
        contact_phone: 'WhatsApp / Телефон',
        contact_email: 'Email (необязательно)',
        contact_btn:   '✉️ Отправить — это бесплатно',
        success_title: 'Скоро свяжемся с вами!',
        success_desc:  'Координатор напишет вам в WhatsApp или на email в течение 2 часов.',
    },
    ko: {
        'step-of': (s, t) => `${s} / ${t} 단계`,
        sidebar: {
            1: { title: 'AI 코디네이터',        desc: '"실시간으로 응답을 분석하여 최적의 클리닉을 찾아드립니다. 최대 40시간의 검색 시간을 절약하세요."' },
            2: { title: '예산 범위 파악 중',     desc: '"예산은 핵심 요소입니다. 맞지 않는 클리닉을 걸러내고 최고의 가성비 옵션을 찾아드립니다."' },
            3: { title: '위치가 중요합니다',     desc: '"서울에만 500개 이상의 클리닉이 있습니다. 선호하는 지역으로 좁혀드리겠습니다."' },
            4: { title: '우선순위 파악 중',      desc: '"가장 중요한 것이 무엇인지 이해하면 올바른 순서로 클리닉을 추천해드릴 수 있습니다."' },
            5: { title: '거의 다 됐습니다!',     desc: '"일정을 알면 현재 예약 가능한 클리닉을 보여드릴 수 있습니다."' },
        },
        questions: {
            1: '어떤 의료 분야에 관심이 있으신가요?',
            2: '예산 범위는 어느 정도인가요?',
            3: '한국에서 선호하는 클리닉 위치는 어디인가요?',
            4: '클리닉 선택 시 가장 중요한 것은 무엇인가요?',
            5: '한국 방문은 언제 계획하고 계신가요?',
        },
        q1: ['치과', '성형외과', '건강검진', '기타'],
        q2: { economy: '경제적', standard: '일반', premium: '프리미엄',
              economy_sub: '$2K 이하', standard_sub: '$3K–$7K', premium_sub: '$10K 이상' },
        q3: [
            { label: '서울',        sub: '가장 많은 옵션' },
            { label: '부산',        sub: '해안 도시' },
            { label: '어느 도시든', sub: '유연하게' },
            { label: '공항 근처',   sub: '편리한 이동' },
        ],
        q4: [
            { label: '명성',          sub: '수상 경력 & 리뷰' },
            { label: '최저가',        sub: '가성비' },
            { label: '러시아어 지원', sub: '원활한 소통' },
            { label: '빠른 예약',     sub: '2주 이내' },
        ],
        q5: [
            { label: '최대한 빨리',      sub: '1개월 이내' },
            { label: '1~3개월 후',      sub: '미리 계획 중' },
            { label: '3~6개월 후',      sub: '여유 있게' },
            { label: '그냥 알아보는 중', sub: '날짜 미정' },
        ],
        dropdown_header: '전문 분야 선택',
        dropdown_items: ['시험관 시술 / 출산', '정형외과', '심장내과', '신경과', '안과', '종양내과', '재활치료'],
        btn_back: '이전',
        btn_continue: '계속',
        btn_results: '결과 보기',
        alert_fill: '이름과 전화번호 / WhatsApp을 입력해주세요.',
        contact_title: '📩 무료 개인 상담 받기',
        contact_desc:  '코디네이터가 2시간 이내에 연락드려 최선의 옵션을 찾아드립니다',
        contact_name:  '이름',
        contact_phone: 'WhatsApp / 전화번호',
        contact_email: '이메일 (선택)',
        contact_btn:   '✉️ 무료로 보내기',
        success_title: '곧 연락드리겠습니다!',
        success_desc:  '코디네이터가 2시간 이내에 WhatsApp 또는 이메일로 연락드립니다.',
    },
};

/* ═══════════════════════════════════════
   LANGUAGE SWITCHER
   ⚠️  setLang() НЕ пишет в localStorage —
       запись ТОЛЬКО в selectLang() при ручном выборе
═══════════════════════════════════════ */
let currentLang = 'ru';

function setLang(lang) {
    currentLang = lang;
    // ── НЕ ПИШЕМ localStorage здесь ──────────────────────
    // Запись только в selectLang() при ручном выборе пользователем
    // ─────────────────────────────────────────────────────

    const t = TRANSLATIONS[lang];

    // Активная кнопка языка (если используются .lang-btn)
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    // Прогресс и сайдбар
    updateProgress(currentQ);
    updateSidebar(currentQ);

    // Заголовки вопросов
    for (let i = 1; i <= TOTAL; i++) {
        const el = document.querySelector(`#q${i} .step-title`);
        if (el) el.innerHTML = t.questions[i];
    }

    // Q1 — кнопки (кроме Other)
    const q1Btns = document.querySelectorAll('#q1 .options-grid .option-btn:not(#other-btn) .opt-label');
    q1Btns.forEach((el, i) => { if (t.q1[i] !== undefined) el.textContent = t.q1[i]; });

    // Other label — не перезаписываем если юзер уже выбрал кастомную специализацию
    const otherLabelEl = document.getElementById('other-label');
    if (otherLabelEl && !otherLabelEl.dataset.custom) otherLabelEl.textContent = t.q1[3];

    // Q2 — пресеты бюджета
    const q2Btns = document.querySelectorAll('#q2 .options-grid .option-btn');
    ['economy', 'standard', 'premium'].forEach((k, i) => {
        const lbl = q2Btns[i] && q2Btns[i].querySelector('.opt-label');
        const sub = q2Btns[i] && q2Btns[i].querySelector('.opt-sub');
        if (lbl) lbl.textContent = t.q2[k];
        if (sub) sub.textContent = t.q2[k + '_sub'];
    });

    // Q3, Q4, Q5
    ['q3', 'q4', 'q5'].forEach(qId => {
        document.querySelectorAll(`#${qId} .options-grid .option-btn`).forEach((btn, i) => {
            const opts = t[qId];
            if (!opts || !opts[i]) return;
            const lbl = btn.querySelector('.opt-label');
            const sub = btn.querySelector('.opt-sub');
            if (lbl) lbl.textContent = opts[i].label;
            if (sub) sub.textContent = opts[i].sub;
        });
    });

    // Dropdown
    const dh = document.querySelector('.dropdown-header');
    if (dh) dh.textContent = t.dropdown_header;
    document.querySelectorAll('.dropdown-item .di-label').forEach((el, i) => {
        if (t.dropdown_items[i]) el.textContent = t.dropdown_items[i];
    });

    // Кнопки навигации
    document.querySelectorAll('.btn-back').forEach(b => {
        b.innerHTML = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg> ${t.btn_back}`;
    });
    document.querySelectorAll('.btn-continue').forEach(b => {
        const isLast = b.id === 'q5-next';
        b.innerHTML = `${isLast ? t.btn_results : t.btn_continue} <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>`;
    });

    // Контактная форма
    const selectors = {
        '.contact-block h3':        'contact_title',
        '.contact-block > div > p': 'contact_desc',
        '.btn-submit':              'contact_btn',
        '.success-msg h4':          'success_title',
        '.success-msg p':           'success_desc',
    };
    Object.entries(selectors).forEach(([sel, key]) => {
        const el = document.querySelector(sel);
        if (el) el.textContent = t[key];
    });
    const placeholders = {
        'c-name':  'contact_name',
        'c-phone': 'contact_phone',
        'c-email': 'contact_email',
    };
    Object.entries(placeholders).forEach(([id, key]) => {
        const el = document.getElementById(id);
        if (el) el.placeholder = t[key];
    });
}

/* ═══════════════════════
   STATE
═══════════════════════ */
const TOTAL = 5;
let currentQ = 1;
let answers  = {};
let dropdownOpen = false;

/* ═══════════════════════
   PROGRESS
═══════════════════════ */
function updateProgress(step) {
    const t   = TRANSLATIONS[currentLang];
    const pct = Math.round(step / TOTAL * 100);
    document.getElementById('bar-fill').style.width = pct + '%';
    document.getElementById('bar-pct-label').textContent = pct + '%';
    document.getElementById('step-label').textContent = t['step-of'](step, TOTAL);
}

function updateSidebar(step) {
    const s = TRANSLATIONS[currentLang].sidebar[step];
    document.getElementById('sidebar-title').textContent = s.title;
    document.getElementById('sidebar-desc').textContent  = s.desc;
}

/* ═══════════════════════
   NAVIGATION
═══════════════════════ */
function showQuestion(n) {
    document.querySelectorAll('.question-screen').forEach(el => el.classList.remove('active'));
    document.getElementById('q' + n).classList.add('active');
    updateProgress(n);
    updateSidebar(n);
    currentQ = n;
}

function goNext(fromQ) {
    closeDropdown();
    showQuestion(fromQ + 1);
}

function goBack() {
    if (currentQ > 1) showQuestion(currentQ - 1);
}

/* ═══════════════════════
   OPTION SELECTION
═══════════════════════ */
function selectOption(btn, qId) {
    btn.closest('.options-grid').querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    answers[qId] = btn.querySelector('.opt-label').textContent.trim();
    enableNext(qId + '-next');
}

function enableNext(btnId) {
    const btn = document.getElementById(btnId);
    if (btn) btn.disabled = false;
}

/* ═══════════════════════
   BUDGET (Q2)
═══════════════════════ */
function updateBudget(val) {
    const n = parseInt(val);
    document.getElementById('budget-display').textContent = '$' + n.toLocaleString() + (n >= 20000 ? '+' : '');
    answers.budget = val;
    enableNext('q2-next');
}

function setBudget(val, btn) {
    document.getElementById('budget-range').value = val;
    updateBudget(val);
    document.querySelectorAll('#q2 .options-grid .option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

document.getElementById('q2-next').disabled = false;

/* ═══════════════════════
   DROPDOWN (Other)
═══════════════════════ */
function positionDropdown() {
    const btn  = document.getElementById('other-btn');
    const dd   = document.getElementById('dropdown');
    const rect = btn.getBoundingClientRect();
    const w    = 280;
    let left   = rect.left + rect.width / 2 - w / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
    dd.style.left = left + 'px';
    dd.style.top  = (rect.bottom + 8) + 'px';
}

function toggleDropdown(e) {
    e.stopPropagation();
    dropdownOpen ? closeDropdown() : openDropdown();
}

function openDropdown() {
    dropdownOpen = true;
    positionDropdown();
    document.getElementById('dropdown').classList.add('open');
    document.getElementById('other-arrow').classList.add('rotated');
    document.querySelectorAll('#q1 .option-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('other-btn').classList.add('selected');
}

function closeDropdown() {
    dropdownOpen = false;
    document.getElementById('dropdown').classList.remove('open');
    const arr = document.getElementById('other-arrow');
    if (arr) arr.classList.remove('rotated');
}

function pickOther(el, label) {
    document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    const diLabel = el.querySelector('.di-label');
    const displayLabel = diLabel ? diLabel.textContent.trim() : label;
    const otherLabelEl = document.getElementById('other-label');
    otherLabelEl.textContent = displayLabel;
    otherLabelEl.dataset.custom = '1'; // не перезаписывать при смене языка
    answers.q1 = label;
    enableNext('q1-next');
    // Анимация иконки
    const newSrc = el.querySelector('.di-icon img').src;
    const iconEl = document.getElementById('other-icon');
    iconEl.classList.remove('icon-swap-in');
    iconEl.classList.add('icon-swap-out');
    setTimeout(() => {
        iconEl.src = newSrc;
        iconEl.classList.remove('icon-swap-out');
        iconEl.classList.add('icon-swap-in');
    }, 180);
    setTimeout(closeDropdown, 160);
}

document.addEventListener('click', e => {
    const dd = document.getElementById('dropdown');
    const ow = document.getElementById('other-wrapper');
    if (!dd.contains(e.target) && !ow.contains(e.target)) closeDropdown();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDropdown(); });
window.addEventListener('resize', () => { if (dropdownOpen) positionDropdown(); });
window.addEventListener('scroll', () => { if (dropdownOpen) positionDropdown(); }, true);

/* ═══════════════════════
   CONTACT SUBMIT
═══════════════════════ */
function submitContact() {
    const name  = document.getElementById('c-name').value.trim();
    const phone = document.getElementById('c-phone').value.trim();
    if (!name || !phone) {
        alert(TRANSLATIONS[currentLang].alert_fill);
        return;
    }
    document.getElementById('contact-form-wrap').style.display = 'none';
    document.getElementById('success-msg').classList.add('show');
}

/* ═══════════════════════════════════════
   LANG DROPDOWN (nav)
═══════════════════════════════════════ */
let langOpen = false;

function toggleLang(e) {
    e.stopPropagation();
    langOpen ? closeLangDD() : openLangDD();
}

function openLangDD() {
    langOpen = true;
    const dd = document.getElementById('lang-dropdown');
    if (dd) {
        dd.style.display = 'block';
        dd.classList.add('open');
    }
    const ch = document.getElementById('lang-chevron');
    if (ch) ch.style.transform = 'rotate(180deg)';
}

function closeLangDD() {
    langOpen = false;
    const dd = document.getElementById('lang-dropdown');
    if (dd) {
        dd.style.display = 'none';
        dd.classList.remove('open');
    }
    const ch = document.getElementById('lang-chevron');
    if (ch) ch.style.transform = 'rotate(0deg)';
}

function selectLang(code, flag, label, el) {
    // Обновляем кнопку в навигации
    const flagEl = document.getElementById('lang-flag');
    const currEl = document.getElementById('lang-current');
    if (flagEl) flagEl.textContent = flag;
    if (currEl) currEl.textContent = label;

    // Сбрасываем стили всех опций дропдауна
    document.querySelectorAll('.lang-opt').forEach(o => {
        o.style.background = 'transparent';
        const nameEl = o.querySelector('div > div:first-child');
        if (nameEl) nameEl.style.color = '#334155';
        const chk = o.querySelector('.lang-check');
        if (chk) chk.style.opacity = '0';
    });
    // Подсвечиваем выбранную
    if (el) {
        el.style.background = '#eff6ff';
        const selName = el.querySelector('div > div:first-child');
        if (selName) selName.style.color = '#0284c7';
        const selChk = el.querySelector('.lang-check');
        if (selChk) selChk.style.opacity = '1';
    }

    // ✅ Сохраняем в localStorage ТОЛЬКО при ручном выборе пользователем
    localStorage.setItem('kmedi_lang', code);

    setLang(code);
    setTimeout(closeLangDD, 150);
}

document.addEventListener('click', e => {
    const sw = document.getElementById('lang-switcher');
    if (sw && !sw.contains(e.target)) closeLangDD();
});

/* ═══════════════════════════════════════
   PAGE TRANSITIONS
═══════════════════════════════════════ */
function initTransitions() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link &&
            link.hostname === window.location.hostname &&
            !link.hash &&
            link.target !== '_blank') {
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => { window.location.href = link.href; }, 500);
        }
   
        const backBtn = e.target.closest('[data-back]');
        if (backBtn) {
            e.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => { history.back(); }, 500);
        }
    });
}

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.remove('fade-out', 'fade');
        void document.body.offsetWidth;
        document.body.classList.add('fade');
    }
});
initTransitions();

/* ═══════════════════════════════════════
   INIT — читаем localStorage, НЕ перезаписываем
   Единственная точка инициализации языка на странице
═══════════════════════════════════════ */
(function init() {
    const saved       = localStorage.getItem('kmedi_lang');
    const browserLang = (navigator.language || 'ru').slice(0, 2).toLowerCase();
    const supported   = ['en', 'ru', 'ko'];

    // Приоритет: 1) сохранённый в localStorage, 2) язык браузера, 3) ru
    const lang = (saved && supported.includes(saved))
        ? saved
        : (supported.includes(browserLang) ? browserLang : 'ru');

    const langMap = { ru: ['🇷🇺', 'RU'], en: ['🇬🇧', 'EN'], ko: ['🇰🇷', '한국어'] };

    // Синхронизируем кнопку навигации
    const flagEl = document.getElementById('lang-flag');
    const currEl = document.getElementById('lang-current');
    if (flagEl) flagEl.textContent = langMap[lang][0];
    if (currEl) currEl.textContent = langMap[lang][1];

    // Подсвечиваем активную опцию в дропдауне
    document.querySelectorAll('.lang-opt').forEach(o => {
        o.style.background = 'transparent';
        const chk = o.querySelector('.lang-check');
        if (chk) chk.style.opacity = '0';
    });
    const activeOpt = document.getElementById('opt-' + lang);
    if (activeOpt) {
        activeOpt.style.background = '#eff6ff';
        const nameEl = activeOpt.querySelector('div > div:first-child');
        if (nameEl) nameEl.style.color = '#0284c7';
        const chk = activeOpt.querySelector('.lang-check');
        if (chk) chk.style.opacity = '1';
    }

    // Применяем переводы — БЕЗ записи в localStorage
    setLang(lang);
})();