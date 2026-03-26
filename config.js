/* CONFIGURAZIONE PROTOTIPO ELITE (Prompt 1) */
const APP_CONFIG = {
    testoLogo: "AR MENU ELITE",
    colori: { 
        principale: "#d4af37", // Oro Metallico
        testo: "#f4f4f4",      // Avorio
        sfondo: "#121212"      // Antracite scuro
    }
};

/* TRADUZIONI (Prompt 3) */
const UI_TRANSLATIONS = {
    it: { home: "Benvenuto", cat: "Menu", food: "Cucina Gourmet", drinks: "Mixology & Vini", ar: "SCOPRI IN 3D", install: "SCARICA APP", install_desc: "Vivi l'esperienza completa installando l'app sul tuo smartphone.", btn_web: "Continua nel browser" },
    es: { home: "Bienvenido", cat: "Menú", food: "Cocina Gourmet", drinks: "Mixology & Vinos", ar: "DESCUBRE EN 3D", install: "INSTALAR APP", install_desc: "Vive la experiencia completa instalando la app en tu smartphone.", btn_web: "Continuar en web" }
};

/* SELEZIONE PIATTI PROTOTIPO (Prompt 2) */
const MENU_DATA = {
    food: [
        { 
            id: "signature", 
            nome: { it: "Piatti Signature", es: "Platos Signature" },
            piatti: [
                { n: "Pulpo a la Gallega", p: "23.00 €", d: "Polpo tenero su letto di patate schiacciate, pimenton de la Vera e olio EVO.", a: "Molluschi", f: "https://images.unsplash.com/photo-1599481238505-b8b0537a3f77?w=800", m: "test.glb" },
                { n: "Secreto Ibérico", p: "21.90 €", d: "Taglio nobile di maiale iberico grigliato, servito con verdure baby croccanti.", a: "", f: "https://images.unsplash.com/photo-1544124499-58912cbddade?w=800", m: "", glutenFree: true },
                { n: "Salmón a la Mostaza", p: "21.90 €", d: "Salmone fresco in crosta di erbe con riduzione alla senape antica.", a: "Pesce, Senape", f: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800", m: "", glutenFree: true }
            ]
        },
        { 
            id: "tradizione", 
            nome: { it: "Tradizione & Riso", es: "Tradición y Arroz" },
            piatti: [
                { n: "Paella de Marisco", p: "18.90 €", d: "Il classico della costa: riso bomba, gamberi, cozze e calamari freschi.", a: "Pesce, Crostacei", f: "https://images.unsplash.com/photo-1534080564607-c9275469479c?w=800", m: "" },
                { n: "Lasagna de Verduras", p: "14.90 €", d: "Pasta fresca artigianale con ortaggi di stagione e besciamella leggera.", a: "Glutine, Latticini", f: "", m: "", bio: true }
            ]
        }
    ],
    drinks: [
        { 
            id: "cantina", 
            nome: { it: "Selezione Cantina", es: "Selección Bodega" },
            piatti: [
                { n: "Habla de Ti", p: "23.00 €", d: "Sauvignon Blanc. Elegante, fresco e intensamente aromatico.", a: "Solfiti", f: "", m: "", bio: true },
                { n: "Muga Crianza", p: "36.00 €", d: "Rioja d'eccellenza. Note di frutti rossi e vaniglia.", a: "Solfiti", f: "", m: "" },
                { n: "Protos Roble", p: "20.00 €", d: "Ribera del Duero dal carattere deciso e persistente.", a: "Solfiti", f: "", m: "" }
            ]
        }
    ]
};
