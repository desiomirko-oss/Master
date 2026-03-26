const APP_CONFIG = {
    testoLogo: "RISTORANTE AR",
    colori: { principale: "#c0392b" }
};

const MENU_DATA = {
    food: [
        { 
            id: "piatti", 
            piatti: [
                { 
                    n: "Salmone al Lime", 
                    p: "14€", 
                    d: "Trancio di salmone fresco con riduzione al lime e pepe rosa.", 
                    f: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
                    m: "test.glb", // DEVE ESSERE NELLA STESSA CARTELLA
                    glutenFree: true 
                }
            ]
        }
    ],
    drinks: [
        { 
            id: "drink-list", 
            piatti: [
                { n: "Mojito", p: "8€", d: "Menta, lime, rum.", f: "", m: "", bio: true }
            ]
        }
    ]
};
