const APP_CONFIG = {
    testoLogo: "RESTAURANTE DOÑA LOLA", // [cite: 1]
    sottotitolo: "Recetas alegres de la abuela - dal 2011", // [cite: 1]
    colori: { principale: "#000000" }
};

const MENU_DATA = {
    cibo: [
        {
            id: "Pizzas", // [cite: 2, 5]
            Italiano: [
                { N: "Margarita", P: "9.90€", D: "Pomodoro, mozzarella, origano", sg: false, v: true }, // 
                { N: "Bacon", P: "11.90€", D: "Pomodoro, mozzarella, cipolla, bacon, origano", sg: false, v: false }, // 
                { N: "Funghi", P: "12.90€", D: "Pomodoro, mozzarella, cipolla, funghi, origano", sg: false, v: true }, // 
                { N: "Vegetariana", P: "11.90€", D: "Pomodoro, mozzarella, cipolla, peperoni, funghi, origano", sg: false, v: true }, // 
                { N: "Prosciutto", P: "12.90€", D: "Pomodoro, mozzarella, prosciutto cotto, origano", sg: false, v: false }, // 
                { N: "Chorizo", P: "12.90€", D: "Pomodoro, mozzarella, chorizo, origano", sg: false, v: false }, // 
                { N: "Diavola", P: "13.90€", D: "Pomodoro, mozzarella, chorizo piccante, peperone rosso, peperoncino", sg: false, v: false }, // 
                { N: "Carbonara", P: "13.90€", D: "Pomodoro, mozzarella, bacon, uovo, cipolla, origano", sg: false, v: false }, // 
                { N: "Gamberi", P: "13.90€", D: "Pomodoro, mozzarella, gamberi, aglio, prezzemolo", sg: false, v: false }, // 
                { N: "4 Formaggi", P: "13.90€", D: "Pomodoro, mozzarella, roquefort, brie, manchego, origano", sg: false, v: true }, // 
                { N: "Tonno e Gamberi", P: "14.90€", D: "Pomodoro, mozzarella, cipolla, tonno, gamberi, origano", sg: false, v: false }, // 
                { N: "Doña Lola", P: "15.90€", D: "Pomodoro, mozzarella, pollo al curry, bacon, cipolla, origano", sg: false, v: false }, // 
                { N: "Peperoni", P: "13.90€", D: "Pomodoro, mozzarella, peperoni, origano", sg: false, v: true }, // 
                { N: "Caprese", P: "15.90€", D: "Pomodoro, mozzarella, pomodorini, rucola e mozzarella fresca", sg: false, v: true } // 
            ]
        },
        {
            id: "Pasta & Lasagna", // [cite: 3, 7]
            Italiano: [
                { N: "Bolognese", P: "12.90€", D: "Spaghetti o maccheroni alla bolognese", sg: false, v: false }, // [cite: 10]
                { N: "Carbonara", P: "14.90€", D: "Spaghetti o maccheroni alla carbonara", sg: false, v: false }, // [cite: 10]
                { N: "Marinara", P: "15.90€", D: "Spaghetti o maccheroni ai frutti di mare", sg: false, v: false }, // [cite: 10]
                { N: "Quattro Formaggi", P: "13.90€", D: "Spaghetti o maccheroni ai quattro formaggi", sg: false, v: true }, // [cite: 10]
                { N: "Verdura Fresca", P: "12.00€", D: "Spaghetti o maccheroni con verdure fresche", sg: false, v: true }, // [cite: 10]
                { N: "Tartufo e Funghi", P: "15.90€", D: "Spaghetti o maccheroni con tartufo e funghi", sg: false, v: true }, // [cite: 10]
                { N: "Gamberi e Aglio", P: "12.90€", D: "Spaghetti o maccheroni con gamberi e aglio", sg: false, v: false }, // [cite: 10]
                { N: "Lasagna Bolognese", P: "15.90€", D: "Lasagna classica al ragù", sg: false, v: false }, // [cite: 10]
                { N: "Lasagna Verdure", P: "14.90€", D: "Lasagna alle verdure", sg: false, v: true } // [cite: 10]
            ]
        },
        {
            id: "Noodles", // [cite: 11]
            Italiano: [
                { N: "Noodles Verdura e Gamberi", P: "16.00€", D: "Noodles con verdure e gamberi", sg: false, v: false }, // [cite: 11]
                { N: "Noodles Verdura e Manzo", P: "17.00€", D: "Noodles con verdure e carne di manzo", sg: false, v: false }, // [cite: 11]
                { N: "Noodles Misti", P: "18.00€", D: "Noodles con verdure, gamberi e manzo", sg: false, v: false } // [cite: 11]
            ]
        },
        {
            id: "Insalate", // [cite: 12]
            Italiano: [
                { N: "Insalata Mista con Tonno", P: "12.90€", D: "Insalata mista classica con tonno", sg: true, v: false }, // [cite: 13]
                { N: "Insalata Peperoni e Tonno", P: "10.90€", D: "Peperoni arrostiti marinati con tonno", sg: true, v: false }, // [cite: 13]
                { N: "Insalata César", P: "13.90€", D: "Lattuga, pollo, crostini e salsa Caesar", sg: false, v: false }, // [cite: 13]
                { N: "Insalata Formaggio di Capra", P: "14.00€", D: "Insalata con formaggio di capra caldo", sg: true, v: true }, // [cite: 13]
                { N: "Insalata Doña Lola", P: "14.90€", D: "Specialità della casa", sg: true, v: false } // [cite: 13]
            ]
        },
        {
            id: "Hamburger", // [cite: 14]
            Italiano: [
                { 
                    N: "Pollo Croccante", 
                    P: "15.90€", 
                    D: "Pomodoro, lattuga, formaggio di capra e cipolla caramellata", // [cite: 17, 18]
                    sg: false, v: false 
                },
                { 
                    N: "Manzo", 
                    P: "15.90€", 
                    D: "Pomodoro, lattuga, cipolla rossa, bacon e formaggio americano", // [cite: 23, 24]
                    sg: false, v: false 
                }
            ]
        }
    ]
};
    drinks: [
        { 
            id: "Cocktails", 
            piatti: [
                { 
                    n: "Mojito", 
                    p: "8€", 
                    d: "Menta, lime, zucchero, rum.", 
                    f: "foto_mojito.jpg", 
                    analcolico: false, 
                    a: "Nessuno" 
                },
                { 
                    n: "Virgin Mojito", 
                    p: "6€", 
                    d: "Menta, lime, zucchero, soda.", 
                    f: "foto_virgin.jpg", 
                    analcolico: true, 
                    a: "Nessuno" 
                }
            ]
        }
    ]
};
