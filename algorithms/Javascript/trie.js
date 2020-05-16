function Trie() {
    const root = {};
    return { insert, search, startsWith, printRoot };

    function insert(word) {
        let curr = root;
        word.split('').forEach(ch => curr = curr[ch] = curr[ch] || {});
        curr.isWord = true;
    }

    function traverse(word) {
        let curr = root;
        for (var i = 0; i < word.length; i++) {
            if (!curr) return null;
            curr = curr[word[i]];
        }
        return curr;
    }

    function search(word) {
        let node = traverse(word);
        return !!node && !!node.isWord;
    }

    function startsWith(word) {
        return !!traverse(word);
    }
    function printRoot() {
        console.log(JSON.stringify(root, null, 2));
    }
}

let trie = new Trie();



const input = ["insert", "insert", "insert", "insert", "insert", "insert", "search", "search", "search", "search", "search", "search", "search", "search", "search", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith", "startsWith"]
const args = [["app"], ["apple"], ["beer"], ["add"], ["jam"], ["rental"], ["apps"], ["app"], ["ad"], ["applepie"], ["rest"], ["jan"], ["rent"], ["beer"], ["jam"], ["apps"], ["app"], ["ad"], ["applepie"], ["rest"], ["jan"], ["rent"], ["beer"], ["jam"]]
const output = []
for (let i = 0; i < input.length; i++) {
    output.push(trie[input[i]](args[i][0]))

}

trie.printRoot()
// console.log('output', output)
console.log(JSON.stringify(trie.root, null, 2))
