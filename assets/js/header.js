// Define navigation items data
const navItems = [
    { text: 'Home page', href: 'index.html' },
    { text: 'FAQ', href: 'faq.html' },
    { text: 'Github', href: 'https://github.com/aiogram/aiogram' },
    { text: 'Documentation', href: 'https://docs.aiogram.dev/en/latest/' },
    { text: 'Contacts', href: 'contacts.html' }
];

// Function to generate navigation items
function generateNavItems() {
    const navList = document.getElementById('nav-list');
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        li.appendChild(a);
        navList.appendChild(li);
    });
}

// Function to add logo to header
function addLogo() {
    const header = document.getElementById('main-header');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo');
    const logoLink = document.createElement('a');
    logoLink.href = './index.html'; // Replace with the actual URL you want to link to
    const logoImg = document.createElement('img');
    logoImg.src = 'assets/images/github.png'; // Replace with actual path to your logo
    logoImg.alt = 'Logo';
    logoLink.appendChild(logoImg); // Append the <img> element to the <a> element
    logoContainer.appendChild(logoLink); // Append the <a> element to the logoContainer
    header.insertBefore(logoContainer, header.firstChild);
}


window.onload = (event) => {
    addLogo();
    generateNavItems();
};
