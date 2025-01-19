const { showProjectDetails, getProjectData, populateProjectDetails, openModal, closeProjectDetails, filterProjects, loadMoreProjects, handleFormSubmission } = require('../scripts');

describe('showProjectDetails', () => {
    it('should call getProjectData and populateProjectDetails with the correct projectId', () => {
        const projectId = 1;
        const projectData = { id: 1, title: 'Project 1' };
        jest.spyOn(global, 'getProjectData').mockReturnValue(projectData);
        jest.spyOn(global, 'populateProjectDetails');
        jest.spyOn(global, 'openModal');

        showProjectDetails(projectId);

        expect(getProjectData).toHaveBeenCalledWith(projectId);
        expect(populateProjectDetails).toHaveBeenCalledWith(projectData);
        expect(openModal).toHaveBeenCalled();
    });
});

describe('getProjectData', () => {
    it('should return the correct project data for a given projectId', () => {
        const projectId = 1;
        const projectData = getProjectData(projectId);

        expect(projectData).toEqual({
            id: 1,
            title: 'Project 1',
            description: 'An expanded description of Project 1.',
            images: ['project1-1.jpg', 'project1-2.jpg'],
            technologies: 'HTML, CSS, JavaScript',
            link: 'https://github.com/user/project1'
        });
    });
});

describe('populateProjectDetails', () => {
    it('should populate the project details modal with the correct data', () => {
        const projectData = {
            id: 1,
            title: 'Project 1',
            description: 'An expanded description of Project 1.',
            images: ['project1-1.jpg', 'project1-2.jpg'],
            technologies: 'HTML, CSS, JavaScript',
            link: 'https://github.com/user/project1'
        };
        document.body.innerHTML = '<div id="project-details"></div>';

        populateProjectDetails(projectData);

        const projectDetails = document.getElementById('project-details');
        expect(projectDetails.innerHTML).toContain(projectData.title);
        expect(projectDetails.innerHTML).toContain(projectData.description);
        expect(projectDetails.innerHTML).toContain(projectData.technologies);
        expect(projectDetails.innerHTML).toContain(projectData.link);
    });
});

describe('openModal', () => {
    it('should display the project details modal', () => {
        document.body.innerHTML = '<div id="project-details-modal" style="display: none; opacity: 0;"></div>';
        const projectDetailsModal = document.getElementById('project-details-modal');

        openModal();

        expect(projectDetailsModal.style.display).toBe('block');
        setTimeout(() => {
            expect(projectDetailsModal.style.opacity).toBe('1');
        }, 10);
    });
});

describe('closeProjectDetails', () => {
    it('should hide the project details modal', () => {
        document.body.innerHTML = '<div id="project-details-modal" style="display: block; opacity: 1;"></div>';
        const projectDetailsModal = document.getElementById('project-details-modal');

        closeProjectDetails();

        expect(projectDetailsModal.style.opacity).toBe('0');
        setTimeout(() => {
            expect(projectDetailsModal.style.display).toBe('none');
        }, 300);
    });
});

describe('filterProjects', () => {
    it('should filter projects based on search term and filter value', () => {
        document.body.innerHTML = `
            <input type="text" id="search-bar" value="Project 1">
            <select id="filter-select">
                <option value="all">All</option>
            </select>
            <div class="project-box">
                <h2>Project 1</h2>
                <p>HTML, CSS, JavaScript</p>
            </div>
            <div class="project-box">
                <h2>Project 2</h2>
                <p>React, Node.js</p>
            </div>
        `;
        const searchBar = document.getElementById('search-bar');
        const filterSelect = document.getElementById('filter-select');
        const projectBoxes = document.querySelectorAll('.project-box');

        filterProjects();

        expect(projectBoxes[0].style.display).toBe('block');
        expect(projectBoxes[1].style.display).toBe('none');
    });
});

describe('loadMoreProjects', () => {
    it('should load more projects and hide the load more button when all projects are visible', () => {
        document.body.innerHTML = `
            <div class="project-box" style="display: none;"></div>
            <div class="project-box" style="display: none;"></div>
            <div class="project-box" style="display: none;"></div>
            <div class="project-box" style="display: none;"></div>
            <button id="load-more-button" style="display: block;"></button>
        `;
        const loadMoreButton = document.getElementById('load-more-button');
        const projectBoxes = document.querySelectorAll('.project-box');

        loadMoreProjects();

        expect(projectBoxes[0].style.display).toBe('block');
        expect(projectBoxes[1].style.display).toBe('block');
        expect(projectBoxes[2].style.display).toBe('block');
        expect(projectBoxes[3].style.display).toBe('block');
        expect(loadMoreButton.style.display).toBe('none');
    });
});

describe('handleFormSubmission', () => {
    it('should handle form submission and reset the form', () => {
        document.body.innerHTML = `
            <form id="contact-form">
                <input type="text" name="name" value="John Doe">
                <input type="email" name="email" value="john@example.com">
                <textarea name="message">Hello</textarea>
            </form>
        `;
        const contactForm = document.getElementById('contact-form');
        const event = { preventDefault: jest.fn() };

        handleFormSubmission(event);

        expect(event.preventDefault).toHaveBeenCalled();
        expect(contactForm.reset).toHaveBeenCalled();
    });
});
