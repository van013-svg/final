// Navigation handler for the Explore button
document.addEventListener("DOMContentLoaded", () => {
    // 1. Find the button using its class name
    const exploreBtn = document.querySelector('.explore-btn');
    
    // 2. Add the click functionality safely if the button exists on the page
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            // Change this path to the exact relative path of the file in your repo
            window.location.href = '../viz_1/index.html'; 
        });
    }
});