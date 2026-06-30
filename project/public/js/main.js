document.addEventListener('DOMContentLoaded', function() {
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const isInViewport = (el) => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0 && r.left < window.innerWidth && r.right > 0;
    };

    const observeReveal = () => {
        document.querySelectorAll('.reveal').forEach((el) => {
            if (!el.dataset.revealObserved) {
                el.dataset.revealObserved = 'true';
                io.observe(el);
                if (isInViewport(el)) {
                    el.classList.add('reveal-visible');
                }
            }
        });
    };

    setTimeout(observeReveal, 100);
    
    const mo = new MutationObserver(observeReveal);
    mo.observe(document.body, { childList: true, subtree: true });
});

function toggleFAQ(index) {
    const content = document.querySelector(`[data-content-index="${index}"]`);
    const icon = document.querySelector(`[data-icon-index="${index}"]`);
    
    if (content && icon) {
        if (content.classList.contains('max-h-0')) {
            content.classList.remove('max-h-0', 'opacity-0');
            content.classList.add('max-h-96', 'opacity-100');
            icon.classList.add('rotate-180');
        } else {
            content.classList.add('max-h-0', 'opacity-0');
            content.classList.remove('max-h-96', 'opacity-100');
            icon.classList.remove('rotate-180');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('cookie-banner');
    if (banner && document.cookie.indexOf('aksamPerformance') < 0) {
        banner.classList.remove('hidden');
    }
    
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            const expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 1);
            document.cookie = 'aksamPerformance=1; path=/; expires=' + expiryDate.toGMTString();
            banner.classList.add('hidden');
        });
    }
    
    if (rejectBtn && banner) {
        rejectBtn.addEventListener('click', function() {
            banner.classList.add('hidden');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const demarrageActivite = document.querySelector('select[name$="[demarrageActivite]"]');
    const insuranceFields = document.getElementById('insurance-history-fields');
    const activiteAssuree = document.querySelector('select[name$="[activiteAssuree]"]');
    const assuranceResilie = document.querySelector('select[name$="[assuranceResilie]"]');
    const motifField = document.getElementById('motif-resiliation-field');
    
    function updateInsuranceFields() {
        if (demarrageActivite && insuranceFields) {
            if (demarrageActivite.value === 'oui') {
                insuranceFields.style.display = 'none';
            } else {
                insuranceFields.style.display = '';
            }
        }
    }
    
    function updateMotifField() {
        if (motifField && activiteAssuree && assuranceResilie) {
            if (activiteAssuree.value !== 'non' && assuranceResilie.value === 'oui') {
                motifField.style.display = '';
            } else {
                motifField.style.display = 'none';
            }
        }
    }
    
    if (demarrageActivite) {
        demarrageActivite.addEventListener('change', function() {
            updateInsuranceFields();
            if (this.value === 'oui') {
                if (activiteAssuree) activiteAssuree.value = '';
                if (assuranceResilie) assuranceResilie.value = '';
                if (motifField) motifField.style.display = 'none';
            }
        });
    }
    
    if (assuranceResilie) {
        assuranceResilie.addEventListener('change', updateMotifField);
    }
    
    if (activiteAssuree) {
        activiteAssuree.addEventListener('change', updateMotifField);
    }
    
    updateInsuranceFields();
    updateMotifField();
});