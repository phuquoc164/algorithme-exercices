/**
 * Implémentez la fonction groupAnagrams(words) qui prend une liste de mots et regroupe les mots qui sont des anagrammes entre eux.
 * Exemple
 * console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
 * Résultat attendu:
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
*/

function groupAnagrams(words: string[]): string[][] {
    const wordsMap = new Map<string, string[]>();
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (wordsMap.has(sortedWord)) {
            wordsMap.get(sortedWord)!.push(word);
        } else {
            wordsMap.set(sortedWord, [word]);
        }
    }
    return Array.from(wordsMap.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
