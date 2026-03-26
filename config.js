/* CONFIGURAZIONE PROTOTIPO ELITE */
const APP_CONFIG = {
    testoLogo: "AR MENU ELITE",
    colori: { 
        principale: "#d4af37", // Oro
        testo: "#f4f4f4",      // Avorio
        sfondo: "#121212"      // Antracite
    }
};

const UI_TRANSLATIONS = {
    it: { home: "Home", cat: "Menu", food: "Cucina", drinks: "Cantina", ar: "VEDI IN 3D", install: "INSTALLA APP", install_desc: "Scarica l'app per un'esperienza fluida.", btn_web: "Continua nel browser" },
    es: { home: "Inicio", cat: "Menú", food: "Cocina", drinks: "Bodega", ar: "VER EN 3D", install: "INSTALAR APP", install_desc: "Descarga la app para una experiencia fluida.", btn_web: "Continuar en web" }
};

const MENU_DATA = {
    food: [
        { 
            id: "entrantes", 
            nome: { it: "Antipasti Gourmet", es: "Entrantes" },
            piatti: [
                { n: "Pulpo a la Gallega", p: "23.00 €", d: "Polpo tenero, patate, pimenton e olio EVO.", a: "Molluschi", f: "https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?w=800", m: "test.glb" },
                { n: "Gambas al Pil-Pil", p: "12.90 €", d: "Gamberi all'aglio piccanti in olio bollente.", a: "Crostacei", f: "", m: "" }
            ]
        },
        { 
            id: "pescados", 
            nome: { it: "Dal Mare", es: "Pescados" },
            piatti: [
                { n: "Salmón a la Mostaza", p: "21.90 €", d: "Salmone fresco con riduzione alla senape.", a: "Pesce, Senape", f: "", m: "", glutenFree: true },
                { n: "Lubina Thai", p: "22.90 €", d: "Branzino con verdure e aromi orientali.", a: "Pesce, Soia", f: "", m: "" }
            ]
        },
        { 
            id: "carnes", 
            nome: { it: "Le Carni", es: "Carnes" },
            piatti: [
                { n: "Secreto Ibérico", p: "21.90 €", d: "Taglio pregiato di maiale iberico alla griglia.", a: "", f: "", m: "", glutenFree: true },
                { n: "Entrecot de Ternera", p: "23.90 €", d: "Controfiletto di vitello ai ferri.", a: "", f: "", m: "" }
            ]
        }
    ],
    drinks: [
        { 
            id: "vinos_blancos", 
            nome: { it: "Vini Bianchi", es: "Vinos Blancos" },
            piatti: [
                { n: "Habla de Ti", p: "23.00 €", d: "Sauvignon Blanc aromatico.", a: "Solfiti", f: "", m: "", bio: true },
                { n: "Campo Fiori", p: "17.00 €", d: "Frizzante semi-dolce.", a: "Solfiti", f: "", m: "" }
            ]
        },
        { 
            id: "vinos_tintos", 
            nome: { it: "Vini Rossi", es: "Vinos Tintos" },
            piatti: [
                { n: "Protos Roble", p: "20.00 €", d: "Ribera del Duero deciso.", a: "Solfiti", f: "", m: "" },
                { n: "Muga Crianza", p: "36.00 €", d: "Rioja d'eccellenza.", a: "Solfiti", f: "", m: "" }
            ]
        }
    ]
};
