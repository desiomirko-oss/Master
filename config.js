const APP_CONFIG = {
    testoLogo: "MAESTRO AR",
    colori: { principale: "#c0392b" }
};

const MENU_DATA = {
    food: [
        { 
            id: "piatti", 
            piatti: [
                { 
                    n: "Salmone scottato", 
                    p: "16€", 
                    d: "Salmone fresco con crosta di sesamo e asparagi.", 
                    f: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600",
                    m: "test.glb", 
                    glutenFree: true // Abilita il filtro GF
                }
            ]
        }
    ],
    drinks: [
        { 
            id: "bar", 
            piatti: [
                { 
                    n: "Cocktail del Bosco", 
                    p: "9€", 
                    d: "Frutti rossi bio, soda e menta.", 
                    f: "", 
                    m: "", 
                    bio: true,       // Abilita filtro Bio
                    analcolico: true // Abilita filtro Analcolico
                }
            ]
        }
    ]
};
