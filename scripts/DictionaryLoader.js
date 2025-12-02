export class DictionaryLoader {
    static _cache = null;

    /**
     * Loads official translations from the lang-de-pf2e module.
     * @returns {Promise<Object>} A map of English terms to German translations.
     */
    static async loadOfficialTranslations() {
        if (this._cache) return this._cache;

        const dictionary = {};
        const packDir = "modules/lang-de-pf2e/translation/de/compendium";

        try {
            console.log("Phil's Journal Translator | Loading official translations...");
            // Use FilePicker to list files in the directory
            const browseResult = await FilePicker.browse("user", packDir);
            const files = browseResult.files.filter(f => f.endsWith(".json"));

            // Allowed file patterns (Regex)
            // We only want to load translations for specific game entities to avoid generic terms.
            const allowedPatterns = [
                /.*-bestiary\.json$/,       // All Bestiaries (Monsters)
                /^pf2e\.equipment-srd\.json$/, // Items/Equipment
                /^pf2e\.spells-srd\.json$/,    // Spells
                /^pf2e\.hazards\.json$/,       // Hazards
                /^pf2e\.vehicles\.json$/,      // Vehicles
                /^pf2e\.deities\.json$/,       // Deities
                /^pf2e\.ancestries\.json$/,    // Ancestries
                /^pf2e\.backgrounds\.json$/,   // Backgrounds
                /^pf2e\.heritages\.json$/,     // Heritages
                /^pf2e\.classes\.json$/,       // Classes
                /^pf2e\.kingmaker-features\.json$/, // Kingmaker Kingdom Rules
                /^pf2e\.adventure-specific-actions\.json$/, // Specific Adventure Actions

                // Re-added per user request to cover more terms (Crafting, Prone, etc.)
                // Must be paired with blocklist to avoid "Stand" -> "Aufstehen"
                /^pf2e\.actionspf2e\.json$/,   // Actions (Crafting, etc.)
                /^pf2e\.classfeatures\.json$/, // Class Features
                /^pf2e\.journals\.json$/,      // Journal UI (Classes, etc.)
                /^pf2e\.conditionitems\.json$/,// Conditions (Prone, Flat-footed)
                /^pf2e\.feats-srd\.json$/,     // Feats
                /^pf2e\.npc-gallery\.json$/    // NPCs
            ];

            // Terms to explicitly exclude from the dictionary (blocklist)
            // These are generic terms found in the above files that cause bad translations.
            const blockedTerms = new Set([
                "I", "A", "An", "The", "In", "On", "At", "To", "For", "Of", "With", "By",
                "Stand", "Cause", "Classes", "Turn", "Round", "Level", "Die", "Hit", "Miss",
                "Name", "Description", "Source", "Type", "Traits", "Rarity", "Price", "Usage", "Bulk",
                "Stride", "Strike", "Step", "Interact", "Drop", "Leap", "Escape", "Seek"
            ]);

            for (const file of files) {
                // Check if file matches any allowed pattern
                const fileName = file.split("/").pop(); // Get just the filename
                if (!allowedPatterns.some(pattern => pattern.test(fileName))) {
                    continue;
                }

                try {
                    const response = await fetch(file);
                    const json = await response.json();

                    // Structure is usually { "entries": { "English Name": { "name": "German Name" } } }
                    if (json.entries) {
                        for (const [key, value] of Object.entries(json.entries)) {
                            // Only add if there is a translation and it's different
                            if (value.name && key !== value.name) {
                                // Skip blocked terms
                                if (blockedTerms.has(key)) continue;

                                // Skip very short terms (<= 2 chars) to avoid false positives like "I", "A", "Of"
                                // unless they are specifically whitelisted (none for now)
                                if (key.length <= 2) continue;

                                dictionary[key] = value.name;
                            }
                        }
                    }
                } catch (err) {
                    console.warn(`Phil's Journal Translator | Failed to load ${file}:`, err);
                }
            }
            console.log(`Phil's Journal Translator | Loaded ${Object.keys(dictionary).length} official translations.`);
        } catch (err) {
            console.error("Phil's Journal Translator | Error loading official translations:", err);
            // Return empty dictionary on error to allow the app to continue
            return {};
        }

        this._cache = dictionary;
        return dictionary;
    }
}
