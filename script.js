const allTitles = document.querySelectorAll('.G222Heading1');
const allTitlesArea = document.querySelector('.contact_left');

var anchorElement = document.querySelectorAll('a');

console.log(allTitles);

for (var i =0; i< allTitles.length; i++) {
    console.log(allTitles[i].outerHTML);

    anchorElement = allTitles[i].querySelector('a');
    if (anchorElement) {
        newHrefValue = (extractFragment(anchorElement.getAttribute('href')));
        anchorElement.setAttribute('href', '#' + newHrefValue);
        anchorElement.setAttribute('name', newHrefValue);
    }
    
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

    insideAnchorElement.setAttribute('name', 'none');

    while (insideAnchorElement.nextSibling) {
        insideAnchorElement.appendChild(insideAnchorElement.nextSibling);
    }
}

addAnchorElement();

function extractFragment(href) {
    var hashIndex = href.indexOf('#');
    return hashIndex !== -1 ? href.substring(hashIndex + 1) : '';
}

// this function helps to remove elements that don't have a tag
/*
function filterAllTitlesArea () {
    var listedItems = allTitlesArea.querySelectorAll('.G222Heading1');

    for (var i = 0; i < listedItems.length; i++) {
        var insideAnchorElement = listedItems[i].querySelector('a');

        if (!insideAnchorElement) {
            listedItems[i].remove();
        }

    }
}

filterAllTitlesArea();
*/

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

