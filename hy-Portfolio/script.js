document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Text Reveal
    setTimeout(() => {
        document.querySelectorAll('.reveal-text').forEach(el => el.classList.add('active'));
    }, 200);

    // 2. Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // 모든 애니메이션 대상 감시
    document.querySelectorAll('.reveal-fade, .work-item, .info-section, .contact-cta').forEach(el => {
        observer.observe(el);
    });
});

// 이메일 복사 함수
function copyEmail() {
    const email = "hi@email.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    });
}

// 기존 코드와 충돌을 방지하는 안전한 방식
window.addEventListener('scroll', function() {
    const btn = document.getElementById("scrollTopBtn");
    if (btn) {
        if (window.scrollY > 500) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}