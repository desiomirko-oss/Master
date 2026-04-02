const APP_CONFIG = {
    testoLogo: "RESTAURANTE DOÑA LOLA",
    sottotitolo: "Recetas alegres de la abuela - dal 2011",
    colori: { principale: "#000000" }
};

const MENU_DATA = {
    // Ho rinominato 'cibo' in 'food' per matchare la chiamata renderCategories('food') in index.html
    food: [
        {
            id: "Pizzas",
            // Ho rinominato 'Italiano' in 'piatti' e usato chiavi minuscole (n, p, d)
            piatti: [
                { n: "Margarita", p: "9.90€", d: "Pomodoro, mozzarella, origano", sg: false, v: true, f: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=500" },
                { n: "Bacon", p: "11.90€", d: "Pomodoro, mozzarella, cipolla, bacon, origano", sg: false, v: false, f: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
                { n: "Funghi", p: "12.90€", d: "Pomodoro, mozzarella, cipolla, funghi, origano", sg: false, v: true, f: "" },
                { n: "Vegetariana", p: "11.90€", d: "Pomodoro, mozzarella, cipolla, peperoni, funghi, origano", sg: false, v: true, f: "" },
                { n: "Prosciutto", p: "12.90€", d: "Pomodoro, mozzarella, prosciutto cotto, origano", sg: false, v: false, f: "" },
                { n: "Chorizo", p: "12.90€", d: "Pomodoro, mozzarella, chorizo, origano", sg: false, v: false, f: "" },
                { n: "Diavola", p: "13.90€", d: "Pomodoro, mozzarella, chorizo piccante, peperone rosso, peperoncino", sg: false, v: false, f: "" },
                { n: "Carbonara", p: "13.90€", d: "Pomodoro, mozzarella, bacon, uovo, cipolla, origano", sg: false, v: false, f: "" },
                { n: "Gamberi", p: "13.90€", d: "Pomodoro, mozzarella, gamberi, aglio, prezzemolo", sg: false, v: false, f: "" },
                { n: "4 Formaggi", p: "13.90€", d: "Pomodoro, mozzarella, roquefort, brie, manchego, origano", sg: false, v: true, f: "" },
                { n: "Tonno e Gamberi", p: "14.90€", d: "Pomodoro, mozzarella, cipolla, tonno, gamberi, origano", sg: false, v: false, f: "" },
                { n: "Doña Lola", p: "15.90€", d: "Pomodoro, mozzarella, pollo al curry, bacon, cipolla, origano", sg: false, v: false, f: "" },
                { n: "Peperoni", p: "13.90€", d: "Pomodoro, mozzarella, peperoni, origano", sg: false, v: true, f: "" },
                { n: "Caprese", p: "15.90€", d: "Pomodoro, mozzarella, pomodorini, rucola e mozzarella fresca", sg: false, v: true, f: "" }
            ]
        },
        {
            id: "Pasta & Lasagna",
            piatti: [
                { n: "Bolognese", p: "12.90€", d: "Spaghetti o maccheroni alla bolognese", sg: false, v: false, f: "" },
                { n: "Carbonara", p: "14.90€", d: "Spaghetti o maccheroni alla carbonara", sg: false, v: false, f: "" },
                { n: "Marinara", p: "15.90€", d: "Spaghetti o maccheroni ai frutti di mare", sg: false, v: false, f: "" },
                { n: "Quattro Formaggi", p: "13.90€", d: "Spaghetti o maccheroni ai quattro formaggi", sg: false, v: true, f: "" },
                { n: "Verdura Fresca", p: "12.00€", d: "Spaghetti o maccheroni con verdure fresche", sg: false, v: true, f: "" },
                { n: "Tartufo e Funghi", p: "15.90€", d: "Spaghetti o maccheroni con tartufo e funghi", sg: false, v: true, f: "" },
                { n: "Gamberi e Aglio", p: "12.90€", d: "Spaghetti o maccheroni con gamberi e aglio", sg: false, v: false, f: "" },
                { n: "Lasagna Bolognese", p: "15.90€", d: "Lasagna classica al ragù", sg: false, v: false, f: "" },
                { n: "Lasagna Verdure", p: "14.90€", d: "Lasagna alle verdure", sg: false, v: true, f: "" }
            ]
        },
        {
            id: "Noodles",
            piatti: [
                { n: "Noodles Verdura e Gamberi", p: "16.00€", d: "Noodles con verdure e gamberi", sg: false, v: false, f: "" },
                { n: "Noodles Verdura e Manzo", p: "17.00€", d: "Noodles con verdure e carne di manzo", sg: false, v: false, f: "" },
                { n: "Noodles Misti", p: "18.00€", d: "Noodles con verdure, gamberi e manzo", sg: false, v: false, f: "" }
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
                    f: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500", 
                    analcolico: false, 
                    a: "Nessuno" 
                },
                { 
                    n: "Virgin Mojito", 
                    p: "6€", 
                    d: "Menta, lime, zucchero, soda.", 
                    f: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500", 
                    analcolico: true, 
                    a: "Nessuno" 
                }
            ]
        }
    ]
};
