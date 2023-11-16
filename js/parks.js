

// Function to handle click on the button
    function highlightLastItems() {
    const parkContainers = document.querySelectorAll('div[id^="park"]');

    parkContainers.forEach(container => {
    const lastLi = container.querySelector('ul li:last-child');
    lastLi.classList.toggle('highlight-background');
});
}

    // Function to handle click on h3 elements
    function boldFont(event) {
    const ul = event.target.nextElementSibling;
    const lis = ul.querySelectorAll('li');

    lis.forEach(li => {
    li.style.fontWeight = 'bold';
});
}

    // Function to handle click on li elements
    function blueFontColor(event) {
    const firstLi = event.currentTarget.parentElement.querySelector('li:first-child');
    firstLi.style.color = 'blue';
}

    // Add event listeners
    document.getElementById('highlightButton').addEventListener('click', highlightLastItems);

    const parkHeadings = document.querySelectorAll('h3[id^="park"]');
    parkHeadings.forEach(heading => {
    heading.addEventListener('click', boldFont);
});

    const allListItems = document.querySelectorAll('ul li');
    allListItems.forEach(li => {
    li.addEventListener('click', blueFontColor);
    });
