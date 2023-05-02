'use strict';
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navHeight = nav.getBoundingClientRect().height;
const mainSections = document.querySelectorAll('.main-section');
const sections = [
  'about',
  'news',
  'indiv-services',
  'prod-services',
  'careers',
  'contact',
];
// Dynamic menu bar
const floatingMenu = function (entries) {
  const [entry] = entries;
  console.log(navHeight);
  if (!entry.isIntersecting) nav.classList.add('floating');
  else nav.classList.remove('floating');
};

const headerObserver = new IntersectionObserver(floatingMenu, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Revealing sections
const revealMainSections = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const mainSectionObserver = new IntersectionObserver(revealMainSections, {
  root: null,
  threshold: 0.25,
});

mainSections.forEach(function (mainSection) {
  mainSectionObserver.observe(mainSection);
  mainSection.classList.add('section-hidden');
});

// Function to load JSON content by section and tab name
// function loadContent(sectionId, contentName) {
//   fetch(`./content/${contentName}.json`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           `Error loading ${contentName}: ${response.statusText}`
//         );
//       }
//       return response.json();
//     })
//     .then((content) => {
//       const sectionContent = document.querySelector(`#${sectionId}-content`);

// Function refactored using async/await
async function loadContent(sectionId, contentName) {
  try {
    const response = await fetch(`./content/${contentName}.json`);

    if (!response.ok) {
      throw new Error(`Error loading ${contentName}: ${response.statusText}`);
    }

    const content = await response.json();
    const sectionContent = document.querySelector(`#${sectionId}-content`);

    // Check if content is an array, if not convert it to one
    const contentArray = Array.isArray(content) ? content : [content];

    const titleDiv = document.createElement('div');
    const scrollDiv = document.createElement('div');
    scrollDiv.classList.add('scroll-container');

    contentArray.forEach((section) => {
      if (section.title) {
        titleDiv.innerHTML += `<h2>${section.title}</h2>`;
      }

      scrollDiv.innerHTML += `
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
          `;
    });

    sectionContent.innerHTML = '';
    sectionContent.appendChild(titleDiv);
    sectionContent.appendChild(scrollDiv);
  } catch (error) {
    console.error('Error loading content:', error);
  }
}
//     .catch((error) => {
//       console.error('Error loading content:', error);
//     });
// }

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
    const [defaultTab] = tabs;
    defaultTab.classList.add('active');
    loadContent(sectionId, defaultTab.dataset.content);
  }
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
