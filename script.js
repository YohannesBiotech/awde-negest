// --- Language Translation Dictionary ---
const translations = {
    en: {
        title: "Awde Negest",
        subtitle: "Ethiopian Ancient Astrology Calculator",
        nameLabel: "Your Name",
        namePlaceholder: "Type Your Name...",
        motherLabel: "Mother's Name",
        motherPlaceholder: "Type mother's name...",
        calcBtn: "Calculate Your Astrology Sign",
        clearBtn: "Clear",
        enterBtn: "Enter ⏎",
        closeKeyboard: "❌ Close Keyboard",
        backspaceBtn: "⌫ Backspace",
        alertText: "Please enter both names.",
        nonAmharicAlert: "Please use only Amharic letters.",
        resultPrefix: "Your Astrological Star:",
        contactBtn: "Contact Us",
        developerLink: "Contact the Developer: linktr.ee/yohannesbiotech"
    },
    am: {
        title: "ዓውደ ነገሥት",
        subtitle: "ጥንታዊ የኢትዮጵያ ኮከብ ቆጠራ",
        nameLabel: "የእርስዎ ስም",
        namePlaceholder: "ስም ያስገቡ...",
        motherLabel: "የእናት ስም",
        motherPlaceholder: "የእናት ስም ያስገቡ...",
        calcBtn: "ኮከብ አስላ",
        clearBtn: "አጥፋ",
        enterBtn: "አስገባ ⏎",
        closeKeyboard: "❌ ኪቦርድ ዝጋ",
        backspaceBtn: "⌫ አጥፋ",
        alertText: "እባክዎ ሁለቱንም ስሞች ያስገቡ።",
        nonAmharicAlert: "እባክዎ የአማርኛ ፊደላትን ብቻ ይጠቀሙ።",
        resultPrefix: "የእርስዎ ኮከብ ቆጠራ ውጤት፦",
        contactBtn: "እኛን ለማግኘት",
        developerLink: "አበልጻጊውን ለማግኘት፥ linktr.ee/yohannesbiotech"
    }
};

let currentLang = 'am';

// Safely updates text to prevent JavaScript from crashing if an ID is missing
function safeUpdate(id, text) {
    const el = document.getElementById(id);
    if (el) el.innerText = text;
}

function switchLanguage() {
    const selectEl = document.getElementById('languageSelect');
    if (selectEl) {
        currentLang = selectEl.value;
    }

    // Update all text elements
    safeUpdate('t-title', translations[currentLang].title);
    safeUpdate('t-subtitle', translations[currentLang].subtitle);
    safeUpdate('t-nameLabel', translations[currentLang].nameLabel);
    safeUpdate('t-motherLabel', translations[currentLang].motherLabel);
    safeUpdate('t-calcBtn', translations[currentLang].calcBtn);
    safeUpdate('t-clearBtn', translations[currentLang].clearBtn);
    safeUpdate('closeKeyboard', translations[currentLang].closeKeyboard);
    safeUpdate('t-enterBtn', translations[currentLang].enterBtn);
    safeUpdate('t-backspaceBtn', translations[currentLang].backspaceBtn);
    safeUpdate('t-contactBtn', translations[currentLang].contactBtn);
    safeUpdate('t-developerLink', translations[currentLang].developerLink);

    // Update placeholders
    const personName = document.getElementById('personName');
    const motherName = document.getElementById('motherName');
    if (personName) personName.placeholder = translations[currentLang].namePlaceholder;
    if (motherName) motherName.placeholder = translations[currentLang].motherPlaceholder;

    // Refresh result box text if it is open
    const resultBox = document.getElementById('resultBox');
    if (resultBox && !resultBox.classList.contains('hidden')) {
        calculateAstrology(); 
    }
}

// Automatically apply the default language when the page loads
window.onload = switchLanguage;

// --- Amharic Alphabet Data ---
const amharicData = [
    { base: 'ሀ', family: ['ሀ','ሁ','ሂ','ሃ','ሄ','ህ','ሆ'], value: 1 },
    { base: 'ለ', family: ['ለ','ሉ','ሊ','ላ','ሌ','ል','ሎ','ሏ'], value: 2 },
    { base: 'ሐ', family: ['ሐ','ሑ','ሒ','ሓ','ሔ','ሕ','ሖ'], value: 3 },
    { base: 'መ', family: ['መ','ሙ','ሚ','ማ','ሜ','ም','ሞ','ሟ'], value: 4 },
    { base: 'ሠ', family: ['ሠ','ሡ','ሢ','ሣ','ሤ','ሥ','ሦ'], value: 5 },
    { base: 'ረ', family: ['ረ','ሩ','ሪ','ራ','ሬ','ር','ሮ','ሯ'], value: 6 },
    { base: 'ሰ', family: ['ሰ','ሱ','ሲ','ሳ','ሴ','ስ','ሶ','ሷ'], value: 7 },
    { base: 'ሸ', family: ['ሸ','ሹ','ሺ','ሻ','ሼ','ሽ','ሾ','ሿ'], value: 7 },
    { base: 'ቀ', family: ['ቀ','ቁ','ቂ','ቃ','ቄ','ቅ','ቆ','ቈ','ቊ','ቋ','ቌ','ቍ'], value: 8 },
    { base: 'በ', family: ['በ','ቡ','ቢ','ባ','ቤ','ብ','ቦ','ቧ'], value: 9 },
    { base: 'ተ', family: ['ተ','ቱ','ቲ','ታ','ቴ','ት','ቶ','ቷ'], value: 10 },
    { base: 'ቸ', family: ['ቸ','ቹ','ቺ','ቻ','ቼ','ች','ቾ','ቿ'], value: 10 },
    { base: 'ኀ', family: ['ኀ','ኁ','ኂ','ኃ','ኄ','ኅ','ኆ','ኈ','ኊ','ኌ','ኍ'], value: 20 },
    { base: 'ነ', family: ['ነ','ኑ','ኒ','ና','ኔ','ን','ኖ','ኗ'], value: 30 },
    { base: 'ኘ', family: ['ኘ','ኙ','ኚ','ኛ','ኜ','ኝ','ኞ','ኟ'], value: 30 },
    { base: 'አ', family: ['አ','ኡ','ኢ','ኣ','ኤ','እ','ኦ'], value: 40 },
    { base: 'ከ', family: ['ከ','ኩ','ኪ','ካ','ኬ','ክ','ኮ','ኰ','ኲ','ኳ','ኴ','ኵ'], value: 50 },
    { base: 'ኸ', family: ['ኸ','ኹ','ኺ','ኻ','ኼ','ኽ','ኾ'], value: 50 },
    { base: 'ወ', family: ['ወ','ዉ','ዊ','ዋ','ዌ','ው','ዎ'], value: 60 },
    { base: 'ዐ', family: ['ዐ','ዑ','ዒ','ዓ','ዔ','ዕ','ዖ'], value: 70 },
    { base: 'ዘ', family: ['ዘ','ዙ','ዚ','ዛ','ዜ','ዝ','ዞ','ዟ'], value: 80 },
    { base: 'ዠ', family: ['ዠ','ዡ','ዢ','ዣ','ዤ','ዥ','ዦ','ዧ'], value: 80 },
    { base: 'የ', family: ['የ','ዩ','ዪ','ያ','ዬ','ይ','ዮ'], value: 90 },
    { base: 'ደ', family: ['ደ','ዱ','ዲ','ዳ','ዴ','ድ','ዶ','ዷ'], value: 100 },
    { base: 'ጀ', family: ['ጀ','ጁ','ጂ','ጃ','ጄ','ጅ','ጆ','ጇ'], value: 100 },
    { base: 'ገ', family: ['ገ','ጉ','ጊ','ጋ','ጌ','ግ','ጎ','ጓ','ጐ','ጒ','ጔ','ጕ'], value: 200 },
    { base: 'ጠ', family: ['ጠ','ጡ','ጢ','ጣ','ጤ','ጥ','ጦ','ጧ'], value: 300 },
    { base: 'ጨ', family: ['ጨ','ጩ','ጪ','ጫ','ጬ','ጭ','ጮ','ጯ'], value: 300 },
    { base: 'ጰ', family: ['ጰ','ጱ','ጲ','ጳ','ጴ','ጵ','ጶ','ጷ'], value: 400 },
    { base: 'ጸ', family: ['ጸ','ጹ','ጺ','ጻ','ጼ','ጽ','ጾ','ጿ'], value: 500 },
    { base: 'ፀ', family: ['ፀ','ፁ','ፂ','ፃ','ፄ','ፅ','ፆ'], value: 600 },
    { base: 'ፈ', family: ['ፈ','ፉ','ፊ','ፋ','ፌ','ፍ','ፎ','ፏ'], value: 700 },
    { base: 'ፐ', family: ['ፐ','ፑ','ፒ','ፓ','ፔ','ፕ','ፖ','ፗ'], value: 800 },
    { base: 'ቨ', family: ['ቨ','ቩ','ቪ','ቫ','ቬ','ቭ','ቮ','ቯ'], value: 9 }
];

const charToNumberMap = {};
amharicData.forEach(item => {
    item.family.forEach(char => {
        charToNumberMap[char] = item.value;
    });
});

const starNames = {
    1: "ሐመል እሳት (Aries)",
    2: "ሠውር መሬት(Taurus)",
    3: "ገውዝ ነፋስ (Gemini)",
    4: "ሸርጣን ውኃ (Cancer)",
    5: "አሰድ እሳት (Leo)",
    6: "ሰንቡላ መሬት (Virgo)",
    7: "ሚዛን ነፋስ (Libra)",
    8: "አቅራብ ውኃ (Scorpio)",
    9: "ቀውሰ እሳት (Sagittarius)",
    10: "ጀዲ መሬት (Capricorn)",
    11: "ደለዊ ነፋስ (Aquarius)",
    12: "ሑት ውኃ (Pisces)"
};

// --- Keyboard Logic ---
let activeInput = null;
const keyboard = document.getElementById('keyboard');
const keysContainer = document.getElementById('keysContainer');
const personNameInput = document.getElementById('personName');
const motherNameInput = document.getElementById('motherName');

personNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        motherNameInput.focus(); 
    }
});

motherNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateAstrology(); 
    }
});

function openKeyboardFor(inputId) {
    activeInput = document.getElementById(inputId);
    document.body.classList.add('keyboard-open'); 
    showBaseKeyboard();
    
    setTimeout(() => {
        activeInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function keyboardEnter() {
    if (activeInput && activeInput.id === 'personName') {
        openKeyboardFor('motherName');
    } else if (activeInput && activeInput.id === 'motherName') {
        calculateAstrology();
    }
}

function showBaseKeyboard() {
    keyboard.classList.remove('hidden');
    keysContainer.innerHTML = '';
    
    amharicData.forEach(item => {
        let btn = document.createElement('button');
        btn.className = 'key';
        btn.innerText = item.base;
        btn.onclick = () => showFamilyKeyboard(item.family);
        keysContainer.appendChild(btn);
    });
}

function showFamilyKeyboard(familyArray) {
    keysContainer.innerHTML = '';
    familyArray.forEach(char => {
        let btn = document.createElement('button');
        btn.className = 'key';
        btn.innerText = char;
        btn.onclick = () => {
            if (activeInput) activeInput.value += char;
            showBaseKeyboard(); 
        };
        keysContainer.appendChild(btn);
    });
}

function closeKeyboard() {
    keyboard.classList.add('hidden');
    document.body.classList.remove('keyboard-open'); 
    activeInput = null;
}

function backspace() {
    if (activeInput && activeInput.value.length > 0) {
        activeInput.value = activeInput.value.slice(0, -1);
    }
}

function clearInputs() {
    personNameInput.value = '';
    motherNameInput.value = '';
    document.getElementById('resultBox').classList.add('hidden');
    closeKeyboard();
}

// --- Awde Negest Math Logic ---
function reduceToTwelve(num) {
    return num % 12 === 0 ? 0 : num % 12;
}

function calculateWordValue(nameStr) {
    let sumValue = 0;
    const letters = nameStr.split(''); 
    
    for (let ch of letters) {
        if (charToNumberMap[ch] !== undefined) {
            let value = charToNumberMap[ch];
            if (value > 12) {
                value = reduceToTwelve(value);
            }
            sumValue += value;
        }
    }
    return sumValue;
}

function finalReduce(num) {
    while (num > 12) {
        num = reduceToTwelve(num);
    }
    return num === 0 ? 12 : num;
}

function isAmharicOnly(str) {
    return /^[\u1200-\u137F\s]+$/.test(str);
}

function calculateAstrology() {
    closeKeyboard();
    
    const name1 = document.getElementById('personName').value.trim();
    const name2 = document.getElementById('motherName').value.trim();
    
    if (!name1 || !name2) {
        alert(translations[currentLang].alertText);
        return;
    }

    if (!isAmharicOnly(name1) || !isAmharicOnly(name2)) {
        alert(translations[currentLang].nonAmharicAlert);
        return;
    }

    let initialSum1 = calculateWordValue(name1);
    let initialSum2 = calculateWordValue(name2);

    let finalValue1 = finalReduce(initialSum1);
    let finalValue2 = finalReduce(initialSum2);

    let combinedValue = finalValue1 + finalValue2;
    let finalCombinedValue = finalReduce(combinedValue);

    let starName = starNames[finalCombinedValue] || "Unknown";

    const resultBox = document.getElementById('resultBox');
    const prefix = translations[currentLang].resultPrefix;
    
    resultBox.innerHTML = `${prefix}<br><br> <strong>${finalCombinedValue} - ${starName}</strong>`;
    resultBox.classList.remove('hidden');
}
