const allTitles = document.querySelectorAll('.G222Heading1');
const allTitlesArea = document.querySelector('.contact_left');

var anchorElement = document.querySelectorAll('a');

console.log(allTitles);

for (var i =0; i< allTitles.length; i++) {
    console.log(allTitles[i].outerHTML);

    allTitlesArea.innerHTML += allTitles[i].outerHTML;

}

function addAnchorElement() {

    var listedItems = allTitlesArea.querySelectorAll('.G222Heading1');

    for (var j = 0; j < listedItems.length; j++) {
        console.log('Processing item:', listedItems[j]);

        var insideAnchorElement = listedItems[j].querySelector('a');

        if (insideAnchorElement) {
            nameToHref(insideAnchorElement);
            // TO-DO: bu kismi recursion bir sekilde cozume kavusturabilirsin.. cunku ikiden fazla a tag'i oldugunda is bi tik daha kotuye gidebiliyor..
            if (insideAnchorElement.querySelector('a')) {
                nameToHref(insideAnchorElement.querySelector('a'));
            }
        }
    }
}

function nameToHref(insideAnchorElement) {

    var nameValue = insideAnchorElement.getAttribute('name');
    if (nameValue) {
        insideAnchorElement.setAttribute('href', '#' + nameValue);
    }

    insideAnchorElement.setAttribute('name', 'anlamsiz');

    while (insideAnchorElement.nextSibling) {
        insideAnchorElement.appendChild(insideAnchorElement.nextSibling);
    }
}

addAnchorElement();

// For the note -> matbe regex can be used to accomplish the solution
/*
const allTitlesArea = document.querySelector('.contact_left');

// Function to add <a> tags around text
function addAnchorElements(searchText) {
    const listedItems = allTitlesArea.querySelectorAll('.G222Heading1');

    for (let j = 0; j < listedItems.length; j++) {
        const item = listedItems[j];
        wrapTextInAnchor(item, searchText);
    }
}

// Function to wrap text in <a> tags
function wrapTextInAnchor(element, searchText) {
    let content = element.innerHTML;
    
    // Create a regular expression to match the search text
    const regex = new RegExp(`(${searchText})`, 'gi');
    
    // Replace matching text with wrapped <a> tags
    content = content.replace(regex, (match) => {
        return `<a name="${match}" href="#${match}">${match}</a>`;
    });
    
    // Update the element's innerHTML with the new content
    element.innerHTML = content;
}

// Example usage
addAnchorElements('Lisanslama Politikası');
*/

