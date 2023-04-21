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

        // Check if content is an array, if not convert it to one
        const contentArray = Array.isArray(content) ? content : [content];

        sectionContent.innerHTML = contentArray
          .map(
            (section) => `
    ${section.title ? `<h2>${section.title}</h2>` : ''}
    ${section.heading ? `<h3>${section.heading}</h3>` : ''}
    ${section.content1 ? `<p>${section.content1}</p>` : ''}
    ${section.content2 ? `<p>${section.content2}</p>` : ''}
    ${section.content3 ? `<p>${section.content3}</p>` : ''}
    ${
      section.list
        ? `<div class="year-info-grid">${section.list
            .map(
              (item) =>
                `<div class="year-item">${item.year}</div><div class="info-item">${item.info}</div>`
            )
            .join('')}</div>`
        : ''
    }
  `
          )
          .join('');
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
    if (dropDown.style.display === 'flex') {
      dropDown.style.display = 'none';
    } else {
      dropDown.style.display = 'flex';
    }
  });
});
