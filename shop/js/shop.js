function loadItems() {
    return fetch('../data/data.json')
        .then(console.log);
}

loadItems();