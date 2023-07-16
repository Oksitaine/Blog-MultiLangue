
const dictionaries = {
    en: () => import("./../dictionoaries/en.json").then((module) => module.default),
    fr: () => import("./../dictionoaries/fr.json").then((module) => module.default),
    de: () => import("./../dictionoaries/de.json").then((module) => module.default)
}

const getDictionary = async (local : string) => {
    if(!local || local === undefined){
        return dictionaries["en"]()
    } else {
        return dictionaries[local as "fr" | "en" | "de"]()
    }
}

export default getDictionary