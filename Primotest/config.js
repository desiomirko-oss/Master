/* CONFIGURAZIONE BRANDING (Prompt 1) */
const APP_CONFIG = {
    testoLogo: "RESTAURANTE EL GUSTO",
    colori: { 
        principale: "#e67e22", // Arancione caldo dai toni del menu
        testo: "#1a1a1a" 
    }
};

/* TRADUZIONI INTERFACCIA (Prompt 3) */
const UI_TRANSLATIONS = {
    it: { home: "Home", cat: "Categorie", food: "Cucina", drinks: "Cantina", ar: "VEDI SUL TAVOLO", install: "INSTALLA APP", install_desc: "Vuoi installare l'app per usarla offline?", btn_web: "Continua via Web" },
    es: { home: "Inicio", cat: "Categorías", food: "Cocina", drinks: "Bodega", ar: "VER EN MESA", install: "INSTALAR APP", install_desc: "¿Quieres instalar la app para usarla offline?", btn_web: "Continuar en web" }
};

/* DATA ENTRY DAI MENU ORIGINALI (Prompt 2) */
const MENU_DATA = {
    food: [
        { 
            id: "entrantes", 
            nome: { it: "Antipasti", es: "Entrantes" },
            piatti: [
                { n: "Pan de Ajo con Mozzarella", p: "5.90 €", d: "Pane all'aglio con mozzarella fusa.", a: "Glutine, Latticini", f: "", m: "" },
                { n: "Bruschetta de Hummus", p: "6.90 €", d: "Pane tostato con crema di ceci.", a: "Glutine, Sesamo", f: "", m: "", bio: true },
                { n: "Pulpo a la Gallega", p: "23.00 €", d: "Polpo alla gallega con patate e pimenton.", a: "Molluschi", f: "https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?w=600", m: "test.glb" }
            ]
        },
        { 
            id: "pescados", 
            nome: { it: "Pesce", es: "Pescados" },
            piatti: [
                { n: "Salmón fresco en salsa de Mostaza", p: "21.90 €", d: "Salmone fresco, salsa senape, aneto e patate.", a: "Pesce, Senape", f: "", m: "", glutenFree: true },
                { n: "Lubina Thai", p: "22.90 €", d: "Branzino Thai con verdure, sesamo e salsa soja.", a: "Pesce, Soia, Sesamo", f: "", m: "" },
                { n: "Paella de Marisco", p: "18.90 €", d: "Paella ai frutti di mare (min. 2 persone).", a: "Pesce, Crostacei", f: "", m: "" }
            ]
        },
        { 
            id: "carnes", 
            nome: { it: "Carne", es: "Carnes" },
            piatti: [
                { n: "Secreto Ibérico", p: "21.90 €", d: "Taglio pregiato di maiale con verdure e patate.", a: "", f: "", m: "", glutenFree: true },
                { n: "Entrecot de Ternera", p: "23.90 €", d: "Controfiletto di vitello alla griglia.", a: "", f: "", m: "" }
            ]
        },
        { 
            id: "pasta", 
            nome: { it: "Pasta & Burger", es: "Pasta y Hamburguesa" },
            piatti: [
                { n: "Lasagna Verduras", p: "14.90 €", d: "Lasagna alle verdure fresche.", a: "Glutine, Latticini", f: "", m: "", bio: true },
                { n: "Hamburguesa de Angus", p: "14.90 €", d: "Angus 180g, bacon, cheddar e patate fritte.", a: "Glutine, Latticini", f: "", m: "" }
            ]
        }
    ],
    drinks: [
        { 
            id: "vinos", 
            nome: { it: "Vini", es: "Vinos" },
            piatti: [
                { n: "Protos (Ribera)", p: "20.00 €", d: "Tempranillo D.O. Ribera del Duero.", a: "Solfiti", f: "", m: "" },
                { n: "Habla de Ti", p: "23.00 €", d: "Sauvignon bianco aromatico.", a: "Solfiti", f: "", m: "", bio: true },
                { n: "Lambrusco", p: "17.00 €", d: "Vino frizzante italiano.", a: "Solfiti", f: "", m: "" }
            ]
        }
    ]
};
