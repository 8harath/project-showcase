document.addEventListener('DOMContentLoaded', () => {
    const projectDetailsModal = document.getElementById('project-details-modal');
    const projectDetails = document.getElementById('project-details');
    const searchBar = document.getElementById('search-bar');
    const filterSelect = document.getElementById('filter-select');
    const loadMoreButton = document.getElementById('load-more-button');
    const contactForm = document.getElementById('contact-form');
    let visibleProjects = 12;

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

    function filterProjects() {
        const searchTerm = searchBar.value.toLowerCase();
        const filterValue = filterSelect.value;
        const projectBoxes = document.querySelectorAll('.project-box');

        projectBoxes.forEach(box => {
            const title = box.querySelector('h2').textContent.toLowerCase();
            const technologies = box.querySelector('p').textContent.toLowerCase();
            const matchesSearch = title.includes(searchTerm);
            const matchesFilter = filterValue === 'all' || technologies.includes(filterValue.toLowerCase());

            if (matchesSearch && matchesFilter) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    }

    function loadMoreProjects() {
        const projectBoxes = document.querySelectorAll('.project-box');
        const totalProjects = projectBoxes.length;

        for (let i = visibleProjects; i < visibleProjects + 4 && i < totalProjects; i++) {
            projectBoxes[i].style.display = 'block';
        }

        visibleProjects += 4;

        if (visibleProjects >= totalProjects) {
            loadMoreButton.style.display = 'none';
        }
    }

    function handleFormSubmission(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        console.log('Form submitted:', { name, email, message });
        contactForm.reset();
    }

    searchBar.addEventListener('input', filterProjects);
    filterSelect.addEventListener('change', filterProjects);
    loadMoreButton.addEventListener('click', loadMoreProjects);
    contactForm.addEventListener('submit', handleFormSubmission);

    window.showProjectDetails = showProjectDetails;
    window.closeProjectDetails = closeProjectDetails;
});
