const MENU_DATA = {
    food: [
        { 
            id: "Antipasti", 
            sottocategorie: [ // <--- Questo attiva la seconda pagina
                {
                    id: "Antipasti di Mare",
                    piatti: [
                        { n: "Crudo", p: "18€", d: "...", f: "...", m: "modello.glb", a: "Pesce" }
                    ]
                },
                {
                    id: "Antipasti di Terra",
                    piatti: [
                        { n: "Tagliere", p: "15€", d: "...", f: "...", a: "Lattosio" }
                    ]
                }
            ]
        },
        {
            id: "Primi", // Se non metti sottocategorie, va diretto ai piatti
            piatti: [
                { n: "Pasta", p: "12€", d: "...", f: "...", a: "Glutine" }
            ]
        }
    ],
    drinks: [
        { 
            id: "Cocktails", 
            piatti: [
                { n: "Mojito", p: "8€", d: "...", f: "...", analcolico: true, a: "Nessuno" }
            ]
        }
    ]
};
