
// Perfected Palettes (Consistent colors across all components)
const themePalettes = {
    'black': {
        img: 'sneaker_black.png',
        model: 'Air Max 90 - Triple Black',
        colors: {
            '--page-bg': '#000000',
            '--card-bg': '#111114',
            '--text-main': '#ffffff',
            '--text-muted': '#a1a1a6',
            '--accent': '#ffffff' // Accent for Black is White
        }
    },
    'volt': {
        img: 'sneaker_volt.png',
        model: 'Air Max 90 - Volt',
        colors: {
            '--page-bg': '#0f172a', // Midnight Navy for pop
            '--card-bg': '#000000',
            '--text-main': '#ffffff',
            '--text-muted': '#e0e7ff',
            '--accent': '#DFFF00' // Exact Neon Volt
        }
    },
    'infrared': {
        img: 'sneaker_red.png',
        model: 'Air Max 90 - Infrared',
        colors: {
            '--page-bg': '#e0e7ff', // Light Indigo/Gray
            '--card-bg': '#ffffff',
            '--text-main': '#1d1d1f', // Strict Apple/Nike-style Black
            '--text-muted': '#64748b',
            '--accent': '#ff4d4d' // Exact Infrared Red
        }
    }
};

function changeTheme(themeKey) {
    const palette = themePalettes[themeKey];
    if (!palette) return;

    // 1. Update Product Image & Model Name
    const mainImg = document.getElementById('mainImage');
    const modelTitle = document.getElementById('modelName');
    if(mainImg && modelTitle) {
        mainImg.src = palette.img;
        modelTitle.innerText = palette.model;
    }

    // 2. 🏆 UPDATE CSS VARIABLES (change 2 - whole page shift)
    // Targeting the strict root HTML element
    const root = document.documentElement;
    if(root) {
        for (const [property, value] of Object.entries(palette.colors)) {
            root.style.setProperty(property, value);
        }
    }

    // 3. UI Updates (Active State & Accent Sync)
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
    
    const activeCircle = document.querySelector('.' + themeKey);
    if(activeCircle) {
        activeCircle.classList.add('active');
    }

    // Update 'Add to Bag' button color (Dynamic Accent)
    const buyBtn = document.getElementById('buyBtn');
    if(buyBtn) {
        if (themeKey === 'infrared') {
            buyBtn.className = 'btn btn-primary'; // Primary for white/red
        } else {
            buyBtn.className = 'btn btn-light';   // Light for dark themes
        }
    }
}