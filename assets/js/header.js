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

window.onload = (event) => {
    generateNavItems();
};