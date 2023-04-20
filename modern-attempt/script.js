'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    'about',
    'news',
    'indiv-services',
    'prod-services',
    'careers',
    'contact',
  ];

  // Function to load JSON content
  function loadContent(sectionId, contentName) {
    fetch(`./content/${contentName}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error loading ${contentName}: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((content) => {
        const sectionContent = document.querySelector(`#${sectionId}-content`);
        sectionContent.innerHTML = `
          <h3>${content.title}</h3>
          <p>${content.content}</p>
        `;
      })
      .catch((error) => {
        console.error('Error loading content:', error);
      });
  }

  sections.forEach((sectionId) => {
    const tabs = document.querySelectorAll(
      `#${sectionId} .tabs .tab, #${sectionId} .tabs-drop-down .tab`
    );

    // Event listeners for all tabs
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove the 'active' class from all tabs in this section
        tabs.forEach((otherTab) => {
          otherTab.classList.remove('active');
        });

        // Add the 'active' class to the clicked tab
        tab.classList.add('active');

        const contentName = event.target.dataset.content;
        loadContent(sectionId, contentName);
      });
    });

    // Set the first tab as active and load its content by default
    if (tabs.length > 0) {
      tabs[0].classList.add('active');
      loadContent(sectionId, tabs[0].dataset.content);
    }
  });
});

// Add function for drop-down menu
const dropDownButtons = document.querySelectorAll('.drop-down-btn');
dropDownButtons.forEach((dropdownBtn) => {
  dropdownBtn.addEventListener('click', () => {
    const dropDown = dropdownBtn.nextElementSibling;
    if (dropDown.style.display === 'block') {
      dropDown.style.display = 'none';
    } else {
      dropDown.style.display = 'block';
    }
  });
});
