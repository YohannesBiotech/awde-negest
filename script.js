// Database of Amharic letters, their families, and your specific numeric values
const amharicData = [
    { base: 'ሀ', family: ['ሀ','ሁ','ሂ','ሃ','ሄ','ህ','ሆ'], value: 1 },
    { base: 'ለ', family: ['ለ','ሉ','ሊ','ላ','ሌ','ል','ሎ'], value: 2 },
    { base: 'ሐ', family: ['ሐ','ሑ','ሒ','ሓ','ሔ','ሕ','ሖ'], value: 3 },
    { base: 'መ', family: ['መ','ሙ','ሚ','ማ','ሜ','ም','ሞ'], value: 4 },
    { base: 'ሠ', family: ['ሠ','ሡ','ሢ','ሣ','ሤ','ሥ','ሦ'], value: 5 },
    { base: 'ረ', family: ['ረ','ሩ','ሪ','ራ','ሬ','ር','ሮ'], value: 6 },
    { base: 'ሰ', family: ['ሰ','ሱ','ሲ','ሳ','ሴ','ስ','ሶ'], value: 7 },
    { base: 'ሸ', family: ['ሸ','ሹ','ሺ','ሻ','ሼ','ሽ','ሾ'], value: 7 },
    { base: 'ቀ', family: ['ቀ','ቁ','ቂ','ቃ','ቄ','ቅ','ቆ'], value: 8 },
    { base: 'በ', family: ['በ','ቡ','ቢ','ባ','ቤ','ብ','ቦ'], value: 9 },
    { base: 'ተ', family: ['ተ','ቱ','ቲ','ታ','ቴ','ት','ቶ'], value: 10 },
    { base: 'ቸ', family: ['ቸ','ቹ','ቺ','ቻ','ቼ','ች','ቾ'], value: 10 },
    { base: 'ኀ', family: ['ኀ','ኁ','ኂ','ኃ','ኄ','ኅ','ኆ'], value: 20 },
    { base: 'ነ', family: ['ነ','ኑ','ኒ','ና','ኔ','ን','ኖ'], value: 30 },
    { base: 'ኘ', family: ['ኘ','ኙ','ኚ','ኛ','ኜ','ኝ','ኞ'], value: 30 },
    { base: 'አ', family: ['አ','ኡ','ኢ','ኣ','ኤ','እ','ኦ'], value: 40 },
    { base: 'ከ', family: ['ከ','ኩ','ኪ','ካ','ኬ','ክ','ኮ'], value: 50 },
    { base: 'ኸ', family: ['ኸ','ኹ','ኺ','ኻ','ኼ','ኽ','ኾ'], value: 50 },
    { base: 'ወ', family: ['ወ','ዉ','ዊ','ዋ','ዌ','ው','ዎ'], value: 60 },
    { base: 'ዐ', family: ['ዐ','ዑ','ዒ','ዓ','ዔ','ዕ','ዖ'], value: 70 },
    { base: 'ዘ', family: ['ዘ','ዙ','ዚ','ዛ','ዜ','ዝ','ዞ'], value: 80 },
    { base: 'ዠ', family: ['ዠ','ዡ','ዢ','ዣ','ዤ','ዥ','ዦ'], value: 80 },
    { base: 'የ', family: ['የ','ዩ','ዪ','ያ','ዬ','ይ','ዮ'], value: 90 },
    { base: 'ደ', family: ['ደ','ዱ','ዲ','ዳ','ዴ','ድ','ዶ'], value: 100 },
    { base: 'ጀ', family: ['ጀ','ጁ','ጂ','ጃ','ጄ','ጅ','ጆ'], value: 100 },
    { base: 'ገ', family: ['ገ','ጉ','ጊ','ጋ','ጌ','ግ','ጎ'], value: 200 },
    { base: 'ጠ', family: ['ጠ','ጡ','ጢ','ጣ','ጤ','ጥ','ጦ'], value: 300 },
    { base: 'ጨ', family: ['ጨ','ጩ','ጪ','ጫ','ጬ','ጭ','ጮ'], value: 300 },
    { base: 'ጰ', family: ['ጰ','ጱ','ጲ','ጳ','ጴ','ጵ','ጶ'], value: 400 },
    { base: 'ጸ', family: ['ጸ','ጹ','ጺ','ጻ','ጼ','ጽ','ጾ'], value: 500 },
    { base: 'ፀ', family: ['ፀ','ፁ','ፂ','ፃ','ፄ','ፅ','ፆ'], value: 600 },
    { base: 'ፈ', family: ['ፈ','ፉ','ፊ','ፋ','ፌ','ፍ','ፎ'], value: 700 },
    { base: 'ፐ', family: ['ፐ','ፑ','ፒ','ፓ','ፔ','ፕ','ፖ'], value: 800 },
    { base: 'ቨ', family: ['ቨ','ቩ','ቪ','ቫ','ቬ','ቭ','ቮ'], value: 9 }
];

// Create a flat map for instant value lookups during calculation
const charToNumberMap = {};
amharicData.forEach(item => {
    item.family.forEach(char => {
        charToNumberMap[char] = item.value;
    });
});

const starNames = {
    1: "Aries (Hamel Esat)",
    2: "Taurus (Sewur Meret)",
    3: "Gemini (Gewz Nefas)",
    4: "Cancer (Shertan Wuha)",
    5: "Leo (Ased Esat)",
    6: "Virgo (Senbula Meret)",
    7: "Libra (Mizan Nefas)",
    8: "Scorpio (Aqirab Wuha)",
    9: "Sagittarius (Kews Esat)",
    10: "Capricorn (Jedi Meret)",
    11: "Aquarius (Delewi Nefas)",
    12: "Pisces (Hut Wuha)"
};

// --- Keyboard Logic ---
let activeInput = null;
const keyboard = document.getElementById('keyboard');
const keysContainer = document.getElementById('keysContainer');

document.getElementById('personName').addEventListener('click', function() {
    activeInput = this;
    showBaseKeyboard();
});

document.getElementById('motherName').addEventListener('click', function() {
    activeInput = this;
    showBaseKeyboard();
});

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
            showBaseKeyboard(); // Return to base characters after typing
        };
        keysContainer.appendChild(btn);
    });
}

function closeKeyboard() {
    keyboard.classList.add('hidden');
    activeInput = null;
}

function backspace() {
    if (activeInput && activeInput.value.length > 0) {
        activeInput.value = activeInput.value.slice(0, -1);
    }
}

function clearInputs() {
    document.getElementById('personName').value = '';
    document.getElementById('motherName').value = '';
    document.getElementById('resultBox').classList.add('hidden');
    closeKeyboard();
}

// --- Awde Negest Algorithm (Replicated from your Python) ---

function reduceToTwelve(num) {
    if (num % 12 === 0) {
        return 0;
    } else {
        return num % 12;
    }
}

function calculateWordValue(nameStr) {
    let sumValue = 0;
    // Split the name string directly into individual characters
    const letters = nameStr.split(''); 
    
    for (let ch of letters) {
        if (charToNumberMap[ch] !== undefined) {
            let value = charToNumberMap[ch];
            if (value > 12) {
                value = reduceToTwelve(value);
            }
            sumValue += value;
        } else {
            console.log(`Unrecognized letter skipped: ${ch}`);
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

function calculateAstrology() {
    closeKeyboard();
    
    const name1 = document.getElementById('personName').value;
    const name2 = document.getElementById('motherName').value;
    
    if (!name1 || !name2) {
        alert("Please enter both names.");
        return;
    }

    // Step 1: Calculate initial sums
    let initialSum1 = calculateWordValue(name1);
    let initialSum2 = calculateWordValue(name2);

    // Step 2: Reduce sums
    let finalValue1 = finalReduce(initialSum1);
    let finalValue2 = finalReduce(initialSum2);

    // Step 3: Combine and reduce
    let combinedValue = finalValue1 + finalValue2;
    let finalCombinedValue = finalReduce(combinedValue);

    // Step 4: Map to Star Name
    let starName = starNames[finalCombinedValue] || "Unknown";

    // Step 5: Display Result
    const resultBox = document.getElementById('resultBox');
    resultBox.innerHTML = `Your Astrological Star:<br><br> <strong>${finalCombinedValue} - ${starName}</strong>`;
    resultBox.classList.remove('hidden');
}