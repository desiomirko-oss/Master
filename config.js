const APP_CONFIG = {
    tipoLogo: "testo", // o "immagine"
    testoLogo: "TRATTORIA DA MARIO", 
    urlLogoImmagine: "logo.png",
    sfondo: { tipo: "colore", colore: "#ffffff" },
    colori: { principale: "#e67e22", testo: "#2c3e50", pulsanteAR: "#e67e22" }
};

const UI_TRANSLATIONS = {
    it: { home: "← Home", cat: "← Categorie", ar: "VEDI IN 3D", food: "CUCINA", drinks: "CANTINA" },
    en: { home: "← Home", cat: "← Categories", ar: "3D VIEW", food: "FOOD", drinks: "DRINKS" }
};

const MENU_DATA = {
    food: [
        { 
            id: "antipasti", 
            nome: { it: "Antipasti", en: "Starters" }, 
            foto: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=500",
            piatti: [
                { 
                    n: { it: "Bruschetta Classica", en: "Classic Bruschetta" }, 
                    p: "6.00€", 
                    d: { it: "Pomodoro fresco e basilico.", en: "Fresh tomato and basil." }, 
                    a: "🌾", 
                    f: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=600",
                    m: "modelli/bruschetta.glb" 
                }
            ]
        }
    ],
    drinks: []
};
