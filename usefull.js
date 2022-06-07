toUpperCase

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
const map2 = names.map(
    x => x.charAt(0).toUpperCase() + x.slice(1)
);