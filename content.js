// content.js

// Function to remove elements with a specific class
function removeAdElements() {
    var targetClass = 'ad_inside_text_story'; // Define the target class

    // Define a function to handle mutations
    function handleMutations(mutationsList, observer) {
        for(var mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Check if any added nodes have the target class
                mutation.addedNodes.forEach(function(node) {
                    if (node.classList && node.classList.contains(targetClass)) {
                        node.parentNode.removeChild(node); // Remove the node
                    }
                });
            }
        }
    }

    // Create a mutation observer instance
    var observer = new MutationObserver(handleMutations);

    // Start observing the document body for mutations
    observer.observe(document.body, { childList: true, subtree: true });
}

// Call the function to remove ad elements
removeAdElements();
