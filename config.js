const APP_CONFIG = {
    tipoLogo: "testo",
    testoLogo: "RISTORANTE PRO",
    colori: { principale: "#c0392b", testo: "#1a1a1a" }
};

const MENU_DATA = {
    food: [
        { 
            id: "antipasti", 
            nome: "Antipasti", 
            piatti: [
                { 
                    n: "Tartare di Salmone", 
                    p: "14€", 
                    d: "Salmone fresco, avocado e lime.", 
                    a: "Pesce", 
                    f: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
                    m: "modelli/salmone.glb",
                    glutenFree: true // QUESTO ATTIVA IL FILTRO
                },
                { 
                    n: "Lasagna Emiliana", 
                    p: "12€", 
                    d: "Ragù classico e besciamella.", 
                    a: "Glutine, Latte", 
                    f: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600",
                    m: "",
                    glutenFree: false 
                }
            ]
        }
    ],
    drinks: [
        { 
            id: "cocktails", 
            nome: "Cocktails", 
            piatti: [
                { 
                    n: "Mojito Bio", 
                    p: "8€", 
                    d: "Menta fresca bio, lime, zucchero di canna.", 
                    a: "", 
                    f: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600",
                    m: "",
                    bio: true,
                    analcolico: false
                },
                { 
                    n: "Fruit Punch", 
                    p: "7€", 
                    d: "Mix di frutta fresca di stagione.", 
                    a: "", 
                    f: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600",
                    m: "",
                    bio: false,
                    analcolico: true
                }
            ]
        }
    ]
};
