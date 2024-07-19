// 1 = All Projects
// 2 = UX Projects
// 3 = Front-End Projects
// 4 = Exploratory Projects

document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.tags button');
    const projects = document.querySelectorAll('.project-wrapper');

    btns.forEach(btn => {
        btn.addEventListener('click', filterProjects);
    });

    function setActiveBtn(e) {
        btns.forEach(btn => {
            btn.classList.remove('btn-clicked');
        });
        e.target.classList.add('btn-clicked');
    }

    function filterProjects(e) {
        setActiveBtn(e);
        const btnCategory = e.target.getAttribute('data-btn');
        
        projects.forEach(project => {
            const projectCategories = project.getAttribute('data-category').split(' ');
            
            if (btnCategory === '1') {
                project.classList.remove('project-shrink');
                project.classList.add('project-expand');
            } else {
                if (projectCategories.includes(btnCategory)) {
                    project.classList.remove('project-shrink');
                    project.classList.add('project-expand');
                } else {
                    project.classList.remove('project-expand');
                    project.classList.add('project-shrink');
                }
            }
        });
    }

    // Initially show all projects
    btns[0].click();
});

