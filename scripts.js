document.addEventListener('DOMContentLoaded', () => {
    const projectDetailsModal = document.getElementById('project-details-modal');
    const projectDetails = document.getElementById('project-details');
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    function showProjectDetails(projectId) {
        const projectData = getProjectData(projectId);
        populateProjectDetails(projectData);
        openModal();
    }

    function getProjectData(projectId) {
        const projects = [
            {
                id: 1,
                title: 'Project 1',
                description: 'An expanded description of Project 1.',
                images: ['project1-1.jpg', 'project1-2.jpg'],
                technologies: 'HTML, CSS, JavaScript',
                link: 'https://github.com/user/project1'
            },
            {
                id: 2,
                title: 'Project 2',
                description: 'An expanded description of Project 2.',
                images: ['project2-1.jpg', 'project2-2.jpg'],
                technologies: 'React, Node.js',
                link: 'https://github.com/user/project2'
            },
            {
                id: 3,
                title: 'Project 3',
                description: 'An expanded description of Project 3.',
                images: ['project3-1.jpg', 'project3-2.jpg'],
                technologies: 'Python, Django',
                link: 'https://github.com/user/project3'
            },
            {
                id: 4,
                title: 'Project 4',
                description: 'An expanded description of Project 4.',
                images: ['project4-1.jpg', 'project4-2.jpg'],
                technologies: 'Java, Spring Boot',
                link: 'https://github.com/user/project4'
            },
            {
                id: 5,
                title: 'Project 5',
                description: 'An expanded description of Project 5.',
                images: ['project5-1.jpg', 'project5-2.jpg'],
                technologies: 'C#, .NET',
                link: 'https://github.com/user/project5'
            },
            {
                id: 6,
                title: 'Project 6',
                description: 'An expanded description of Project 6.',
                images: ['project6-1.jpg', 'project6-2.jpg'],
                technologies: 'Ruby on Rails',
                link: 'https://github.com/user/project6'
            },
            {
                id: 7,
                title: 'Project 7',
                description: 'An expanded description of Project 7.',
                images: ['project7-1.jpg', 'project7-2.jpg'],
                technologies: 'PHP, Laravel',
                link: 'https://github.com/user/project7'
            },
            {
                id: 8,
                title: 'Project 8',
                description: 'An expanded description of Project 8.',
                images: ['project8-1.jpg', 'project8-2.jpg'],
                technologies: 'Angular, TypeScript',
                link: 'https://github.com/user/project8'
            },
            {
                id: 9,
                title: 'Project 9',
                description: 'An expanded description of Project 9.',
                images: ['project9-1.jpg', 'project9-2.jpg'],
                technologies: 'Vue.js, Firebase',
                link: 'https://github.com/user/project9'
            },
            {
                id: 10,
                title: 'Project 10',
                description: 'An expanded description of Project 10.',
                images: ['project10-1.jpg', 'project10-2.jpg'],
                technologies: 'Swift, iOS',
                link: 'https://github.com/user/project10'
            },
            {
                id: 11,
                title: 'Project 11',
                description: 'An expanded description of Project 11.',
                images: ['project11-1.jpg', 'project11-2.jpg'],
                technologies: 'Kotlin, Android',
                link: 'https://github.com/user/project11'
            },
            {
                id: 12,
                title: 'Project 12',
                description: 'An expanded description of Project 12.',
                images: ['project12-1.jpg', 'project12-2.jpg'],
                technologies: 'Go, Docker',
                link: 'https://github.com/user/project12'
            }
        ];

        return projects.find(project => project.id === projectId);
    }

    function populateProjectDetails(projectData) {
        projectDetails.innerHTML = `
            <h2>${projectData.title}</h2>
            <p>${projectData.description}</p>
            <div class="project-images">
                ${projectData.images.map(image => `<img src="${image}" alt="${projectData.title}">`).join('')}
            </div>
            <p><strong>Technologies used:</strong> ${projectData.technologies}</p>
            <a href="${projectData.link}" target="_blank">View Project</a>
        `;
    }

    function openModal() {
        projectDetailsModal.style.display = 'block';
        setTimeout(() => {
            projectDetailsModal.style.opacity = '1';
        }, 10);
    }

    function closeProjectDetails() {
        projectDetailsModal.style.opacity = '0';
        setTimeout(() => {
            projectDetailsModal.style.display = 'none';
        }, 300);
    }

    function toggleTheme() {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            themeIcon.src = 'night-icon.png';
        } else {
            themeIcon.src = 'day-icon.png';
        }
    }

    themeToggleButton.addEventListener('click', toggleTheme);

    window.showProjectDetails = showProjectDetails;
    window.closeProjectDetails = closeProjectDetails;
});
