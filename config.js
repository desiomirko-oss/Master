const APP_CONFIG = {
    tipoLogo: "testo",
    testoLogo: "RISTORANTE PRO",
    colori: { principale: "#c0392b", testo: "#1a1a1a" }
};

const MENU_DATA = {
    food: [
        { 
            id: "piatti", 
            piatti: [
                { 
                    n: "Tartare di Salmone", 
                    p: "14€", 
                    d: "Salmone fresco abbattuto, servito con granella di pistacchio e riduzione al lime.", 
                    a: "Pesce, Frutta a guscio", 
                    f: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
                    m: "modelli/salmone.glb", // Assicurati che il file esista!
                    glutenFree: true 
                }
            ]
        }
    ],
    drinks: [
        { 
            id: "cocktails", 
            piatti: [
                { 
                    n: "Gin Tonic Premium", 
                    p: "10€", 
                    d: "Gin botanico, acqua tonica superiore e bacche di ginepro fresche.", 
                    a: "", 
                    f: "", // Non serve per i drinks
                    m: "", 
                    bio: true,
                    analcolico: false
                }
            ]
        }
    ]
};
