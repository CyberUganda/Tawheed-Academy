document.addEventListener('DOMContentLoaded', function () {
    let currentLang = 'en';
    const langSwitchBtn = document.getElementById('langSwitch');

    // Auto-detect language based on location (simplified for demo)
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if (data.country === 'AE' || data.country === 'SA' || data.country === 'EG') {
                setLanguage('ar');
                currentLang = 'ar';
                langSwitchBtn.textContent = 'English';
            } else {
                setLanguage('en');
            }
        })
        .catch(() => setLanguage('en'));

    langSwitchBtn.addEventListener('click', function () {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(currentLang);
        langSwitchBtn.textContent = currentLang === 'en' ? 'Arabic' : 'English';
    });

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.querySelectorAll('[data-en], [data-ar]').forEach(element => {
            element.textContent = lang === 'en' ? element.dataset.en : element.dataset.ar;
        });
    }

    // Donation Form Submission
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        donationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert(currentLang === 'en' ? 'Thank you for your donation!' : 'شكرًا على تبرعك!');
            this.reset();
        });
    }
});