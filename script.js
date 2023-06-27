document.addEventListener('DOMContentLoaded', function() {
    let typewriters = document.getElementsByClassName('typed');

    for (let i = 0; i < typewriters.length; i++) {
        typeText(typewriters[i]);
    }

    function typeText(typewriter) {
        let childNodes = typewriter.childNodes;
        let textNodes = [];

        for (let i = 0; i < childNodes.length; i++) {
            let childNode = childNodes[i];
            if (childNode.nodeType === Node.TEXT_NODE) {
                textNodes.push(childNode);
            }
        }

        for (let i = 0; i < textNodes.length; i++) {
            typeNodeText(textNodes[i]);
        }
    }

    
    function typeNodeText(node) {
        let text = node.textContent;
        node.textContent = ''; // Clear existing text

        let index = 0;

        function type() {
            node.textContent += text.charAt(index);
            index++;
            if (index < text.length) {
                var delay = Math.random() * 75 + 10;
                setTimeout(type, delay);
            }
        }

        type();
    }
});