export class TermReplacer {
    static _regexCache = null;
    static _lookupCache = null;
    static _lastDictionary = null;

    /**
     * Replaces terms in the text with their values from the dictionary.
     * Respects HTML tags (does not replace inside tags).
     * @param {string} text - The input text (potentially HTML).
     * @param {Object} dictionary - Map of terms to replace (English -> German).
     * @returns {string} The text with terms replaced.
     */
    static replaceTerms(text, dictionary) {
        if (!text || !dictionary) return text;

        // Check if we can reuse the cached regex and lookup
        if (this._lastDictionary !== dictionary || !this._regexCache || !this._lookupCache) {
            const keys = Object.keys(dictionary).sort((a, b) => b.length - a.length);
            if (keys.length === 0) return text;

            const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const pattern = keys.map(escapeRegExp).join("|");

            // Construct a regex that matches any of the terms as whole words.
            // We use 'i' flag for case-insensitivity to match "morningstar" with "Morningstar".
            this._regexCache = new RegExp(`\\b(${pattern})\\b`, 'gi');

            // Create a lowercase lookup map to handle case-insensitive matches
            this._lookupCache = {};
            for (const [key, value] of Object.entries(dictionary)) {
                this._lookupCache[key.toLowerCase()] = value;
            }

            this._lastDictionary = dictionary;
        }

        // Split by HTML tags to only replace in text content
        // This regex captures the tags so we can interleave them back
        const parts = text.split(/(<[^>]*>)/g);

        return parts.map(part => {
            if (part.startsWith("<")) return part; // It's a tag, return as is

            // Replace terms in the text content
            return part.replace(this._regexCache, (match) => {
                // Look up the translation using the lowercase match
                return this._lookupCache[match.toLowerCase()] || match;
            });
        }).join("");
    }
}
