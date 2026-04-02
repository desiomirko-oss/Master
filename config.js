const APP_CONFIG = {
    testoLogo: "IL MIO RISTORANTE",
    colori: { principale: "#000000" }
};

const MENU_DATA = {
    food: [
        { 
            id: "Antipasti", 
            piatti: [ ]
        },
        { 
            id: "Primi", 
            piatti: [ /* altri piatti qui */
               { 
                    n: "Tagliere Nuovo", 
                    p: "18€", 
                    d: "Selezione di salumi e cose.", 
                    f: "link_foto.jpg", 
                    m: "", // Il tuo modello 3D
                    a: "Lattosio, Glutine" // Allergeni
                }
            
            ]
        }
    ],
    drinks: [
        { 
            id: "Cocktails", 
            piatti: [
                { 
                    n: "Mojito", 
                    p: "8€", 
                    d: "Menta, lime, zucchero, rum.", 
                    f: "foto_mojito.jpg", 
                    analcolico: false, // Per il filtro analcolico
                    a: "Nessuno" 
                }
            ]
        }
    ]
};
