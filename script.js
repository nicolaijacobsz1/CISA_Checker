function loadXML() {
    fetch('data.xml')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            displayHashes(data);
        })
        .catch(error => console.error("Failed to load or parse XML: ", error));
}

function displayHashes(xmlData) {
    const hashes = xmlData.getElementsByTagName('hash');
    const hashList = document.getElementById('hashList');
    hashList.innerHTML = ''; // Clear existing list items

    for (let i = 0; i < hashes.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = hashes[i].textContent;
        hashList.appendChild(listItem);
    }
}
