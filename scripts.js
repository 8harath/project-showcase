document.addEventListener('DOMContentLoaded', () => {
    const projectDetailsModal = document.getElementById('project-details-modal');
    const projectDetails = document.getElementById('project-details');

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

    window.showProjectDetails = showProjectDetails;
    window.closeProjectDetails = closeProjectDetails;

    // Add event listener for closing the modal when clicking outside the content
    projectDetailsModal.addEventListener('click', (event) => {
        if (event.target === projectDetailsModal) {
            closeProjectDetails();
        }
    });

    // Add ARIA roles for accessibility
    projectDetailsModal.setAttribute('role', 'dialog');
    projectDetailsModal.setAttribute('aria-modal', 'true');
    projectDetails.setAttribute('role', 'document');
});
