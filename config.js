const APP_CONFIG = {
    testoLogo: "AR MENU ELITE",
    logoURL: "", // Lascia vuoto per il testo, metti "logo.png" per l'immagine
    colori: { 
        principale: "#d4af37", 
        testo: "#f4f4f4", 
        sfondo: "#121212" 
    }
};

const MENU_DATA = {
    food: [
        { 
            id: "antipasti", 
            nome: { it: "Antipasti", es: "Entrantes" },
            foto: "https://images.unsplash.com/photo-1544124499-58912cbddade?w=800", // FOTO SOTTOCATEGORIA
            piatti: [
                { n: "Polpo alla Gallega", p: "23.00 €", d: "Polpo e patate", a: "Molluschi", f: "https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?w=800", m: "" }
            ]
        }
    ],
    drinks: [
        { 
            id: "vini", 
            nome: { it: "I Nostri Vini", es: "Vinos" },
            foto: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800", // FOTO SOTTOCATEGORIA
            piatti: [
                { n: "Vino Rosso", p: "18.00 €", d: "Calice di vino", a: "Solfiti", f: "", m: "" }
            ]
        }
    ]
};
