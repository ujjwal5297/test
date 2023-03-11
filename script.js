// Get the navbar element
const navbar = document.querySelector('.navbar-nav');

// Create an array of menu items
const menuItems = [
  { text: 'Home', link: '#' },
  { text: 'Contact Us', link: '#' },
  { text: 'Find Meals', link: '#' },
  { text: 'Random Meal Generator', link: '#' },
];

// Loop through the menu items and create the navbar links
menuItems.forEach((item) => {
  const link = document.createElement('a');
  link.classList.add('nav-link');
  link.href = item.link;
  link.textContent = item.text;

  const listItem = document.createElement('li');
  listItem.classList.add('nav-item');
  listItem.appendChild(link);

  navbar.appendChild(listItem);
});
