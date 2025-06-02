document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu
    const checkBox = document.getElementById('check');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            checkBox.checked = false;
        });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const target = targetId === 'top' ? document.body : document.getElementById(targetId);
            
            if (target) {
                const offset = targetId === 'top' ? 0 : 100;
                const targetPosition = targetId === 'top' ? 0 : target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Controle do tema
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(themeIcon, savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeIcon, newTheme);
    });
});

function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    } else {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }
}

// Easter egg
function dontclickhere() {
    Swal.fire({
        title: 'Você tem certeza?',
        text: "Esta página pode causar epilepsia e convulsões, pois apresenta vários efeitos! Esta ação não pode ser desfeita.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim, tenho certeza!',
        cancelButtonText: 'Não'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Are you sure??',
                text: "This page can cause epilepsy and seizures due to several effects! This is the second confirmation.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, I am sure!',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: '¿Seguro?',
                        text: "Esta página puede causar epilepsia y convulsiones debido a varios efectos! Esta es la tercera confirmación.",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Sí, estoy seguro!',
                        cancelButtonText: 'No'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: 'É sério você quer continuar mesmo?',
                                text: "Esta página pode causar epilepsia e convulsões, pois apresenta vários efeitos! Esta é a última confirmação.",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonText: 'Sim',
                                cancelButtonText: 'Não'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.href = "../pages/pedro.html";
                                } else {
                                    Swal.fire('Você decidiu não continuar.');
                                }
                            });
                        } else {
                            Swal.fire('Você decidiu não continuar.');
                        }
                    });
                } else {
                    Swal.fire('Você decidiu não continuar.');
                }
            });
        } else {
            Swal.fire('Você decidiu não continuar.');
        }
    });
}