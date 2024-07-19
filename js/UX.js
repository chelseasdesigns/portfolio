const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            section.addEventListener('click', () => {
                section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        });