// Function to create and embed the Twitter feed
function embedTwitterFeed() {
    const container = document.getElementById('twitter-feed-container');

    // Create a new anchor element for the Twitter timeline
    const anchor = document.createElement('a');
    anchor.classList.add('twitter-timeline');
    anchor.dataset.width = '300';
    anchor.dataset.height = '400';
    anchor.href = 'https://twitter.com/YourWeatherChannel'; // Replace with the desired Twitter handle
    anchor.dataset.chrome = 'noheader nofooter noborders transparent';
    anchor.dataset.theme = 'dark';

    // Append the anchor element to the container
    container.appendChild(anchor);

    // Load the Twitter widget
    twttr.widgets.load();
}

// Call the function to embed the Twitter feed when the page is loaded
document.addEventListener('DOMContentLoaded', embedTwitterFeed);
