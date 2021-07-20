let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let products = [
    // BREAKFAST
    {
        id: 101,
        name: "Яйця з хрустким беконом та бурячковим айолі",
        categories: "breakfast",
        new: true,
        price: 109,
        weight: 495,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/02/yajczya-benedykt-z-hrustkym-bekonom-ta-buryachkovym-ajoli-500x500.png.pagespeed.ce.ue01rqWRbz.png",
        // image: "./image/101.jpg",
        title:
            "Варені яйця/скрембл/яєчня, хрусткий бекон, хумус власного виробництва, припущені на вогні помідори чері, пряне броколі, халумі, салат мікс, боби едамаме, оливкова олія, орегано, сушена цибуля, мікрогрін, паприка шматочками, кунжут, соус бурячковий айолі",
    },
    {
        id: 102,
        name: "Лосось з кіноа, яйцями та авокадоі",
        categories: "breakfast",
        new: true,
        price: 119,
        weight: 480,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/02/losos-z-kinoa-yajczyamy-pashot-ta-avokado-copy-500x500.png",
        title:
            "Лосось, лайм, авокадо, варені яйця/скрембл/яєчня, паніні, крем-сир з зеленю, кіноа, салат мікс, гранат, помідори чері, оливкова олія, орегано, сушена цибуля, мікрогрін, паприка шматочками, кунжут, соус Голандез",
    },
    {
        id: 103,
        name: "Яєчний скрембл з запеченим бататом та бобами в соусі",
        categories: "breakfast",
        new: true,
        price: 119,
        weight: 450,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/02/yayechnyj-skrembl-z-zapechenym-batatom-ta-bobamy-v-sousi-500x500.png",
        title:
            "Скрембл із трьох яєць, тайський соус з перцем гриль, пармезан, авокадо, крем-сир із зеленню, запечений батат, боби в соусі, салат мікс, помідори чері, оливкова олія, паніні, сушена цибуля, орегано, паприка шматочками, мікрогрін, кунжут",
    },
    {
        id: 104,
        name: "Вівсянка з льоном та бринзою під соусом Голандез",
        categories: "breakfast",
        new: true,
        price: 79,
        weight: 720,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/02/vivsyanka-z-lonom-ta-brynzoyu-pid-sousom-golandez-500x500.png",
        title:
            "Вівсяні пластівці, бринза, припущені на вогні помідори чері, яєчня, печериці гриль, льон, сушена цибуля, орегано, паприка шматочками, мікрогрін, соус Голандез",
    },
    {
        id: 105,
        name: "Вівсянка на кокосовому молоці з карамелізованою грушею",
        categories: "breakfast",
        new: true,
        price: 89,
        weight: 570,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/02/vivsyanka-na-kokosovomu-moloczi-z-karamelizovanoyu-grusheyu--500x500.png",
        title:
            "Вівсяні пластівці, кокосове молоко, чіа, карамелізована груша, ягоди (сезонні), солодкий мигдаль, м'ята, цукор",
    },
    // SALATPASTA
    {
        id: 201,
        name: "Салат паста з кальмаром гриль",
        categories: "salatPasta",
        new: true,
        xit: false,
        price: 169,
        weight: 475,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/z-kalmarom-gryl-500x500.png",
        title:
            "Лінгвіні, кальмар гриль, кабачок, аспарагус, салат мікс, в’ялені томати, лимон, паприка шматочками, мікрогрін, салат мікс, соус часниковий, соус Вок",
    },
    {
        id: 202,
        name: "Салат паста Фіскі",
        categories: "salatPasta",
        new: true,
        xit: false,
        price: 144,
        weight: 420,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/fiski-500x500.png",
        title:
            "Лінгвіні, макрель гриль, лимон, в’ялені томати, цукровий горох, морква, цибуля, часник, салат мікс, помідори чері, паприка шматочками, соус вершково-шафрановий, соус Вок",
    },
    {
        id: 203,
        name: "Салат паста з яловичиною",
        categories: "salatPasta",
        new: true,
        xit: false,
        price: 139,
        weight: 465,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/z-yalovychynoyu-500x500.png.pagespeed.ce.R_8O-8i2Hf.png",
        title:
            "Лінгвіні, яловичина в кисло-солодкому соусі, цибуля, морква, печериці, в’ялені томати, часник, салат мікс, помідори чері, боби едамаме, кунжут, соус кисло-солодкий, соус вершковий",
    },
    {
        id: 204,
        name: "Салат паста Сод Лакс",
        categories: "salatPasta",
        new: true,
        xit: false,
        price: 149,
        weight: 475,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/sod-laks-500x500.png",
        title:
            "Лінгвіні, лосось гриль в кисло-солодкому соусі, лимон, печериці, аспарагус, часник, салат мікс, помідори чері, паприка шматочками, кунжут, соус вершково-шафрановий, соус Вок",
    },
    {
        id: 205,
        name: "Салат паста Карбонара",
        categories: "salatPasta",
        new: true,
        xit: false,
        price: 109,
        weight: 360,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/karbonara-500x500.png",
        title:
            "Лінгвіні, бекон, пармезан, базилік, цибуля, салат мікс, помідори чері, кунжут, соус Карбонара, соус Вершковий",
    },
    {
        id: 206,
        name: "Салат паста Тропікана",
        categories: "salatPasta",
        new: false,
        xit: true,
        price: 129,
        weight: 585,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/tropikana-1-500x500.png",
        title:
            "Лінгвіні, куряче філе, ананас, горох цукровий, броколі, салат мікс (сезонний), боби едамаме, помідори, насіння кунжуту, соус манго-чілі",
    },
    {
        id: 207,
        name: "Салат паста з лососем у вершковому соусі",
        categories: "salatPasta",
        new: false,
        xit: true,
        price: 174,
        weight: 530,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/z-lososem-u-vershkovovmu-sousi-500x500.png",
        title:
            "Лінгвіні, вершковий соус (додається під час приготування), лосось гриль, кабачок, печериці, горох цукровий, перець солодкий, цибуля, морква, лайм, паприка сушена, салат мікс, томати, соус вершковий з апельсиновою цедрою",
    },
    {
        id: 208,
        name: "Салат паста Чікен Базиліко",
        categories: "salatPasta",
        new: false,
        xit: true,
        price: 129,
        weight: 550,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/chiken-bazyliko-1-500x500.png.pagespeed.ce.6C6r5fQoza.png",
        title:
            "Фарфале, куряче філе, печериці, помідори коктейльні, базилік, сир пармезан, соус томатний",
    },
    {
        id: 209,
        name: "Салат паста Вега Грін",
        categories: "salatPasta",
        new: false,
        xit: false,
        price: 99,
        weight: 420,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/vega-grin-1-500x500.png.pagespeed.ce.tH4rtOv1bm.png",
        title:
            "Лінгвіні, броколі, квасоля спаржева, цвітна капуста, печериці, кукурудза бейбі, морква, цибуля, салат мікс, помідори, боби едамаме, насіння кунжуту, соус Якіторі (додається під час приготування)",
    },
    {
        id: 210,
        name: "Салат паста з креветками",
        categories: "salatPasta",
        new: false,
        xit: false,
        price: 174,
        weight: 400,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/z-krevetkamy-1-500x500.png",
        title:
            "Лінгвіні, креветки тигрові,  броколі, квасоля спаржева, цвітна капуста, салат мікс, помідори, соус Вок, боби едамаме, насіння кунжуту, цибуля, морква, соус кисло-солодкий",
    },
    {
        id: 211,
        name: "Салат паста з морепродуктами",
        categories: "salatPasta",
        new: false,
        xit: false,
        price: 179,
        weight: 490,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/z-moreproduktamy-1-500x500.png",
        title:
            "Лінгвіні, мідії, тигрові креветки, кальмари, броколі, квасоля спаржева, цвітна капуста, салат мікс, помідори, боби едамаме, насіння кунжуту, соус Вок , соус кисло-солодкий",
    },
    {
        id: 212,
        name: "Салат паста Пан Азія",
        categories: "salatPasta",
        new: false,
        xit: false,
        price: 119,
        weight: 490,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/pan-aziya-1-500x500.png",
        title:
            "Лінгвіні, індичка, кукурудза бебі, горох цукровий, броколі, квасоля спаржева, капуста цвітна, боби едамаме, насіння кунжуту, салат мікс, помідори, соус Вок, соус Тайський",
    },
    // SALAT
    {
        id: 301,
        name: "Салат з куркою та полуницею",
        categories: "salat",
        new: false,
        xit: false,
        weeklyspecial: true,
        price: 129,
        weight: 355,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/07/z-kurkoyu-ta-nektarynom-sajt-500x500.png",
        title:
            "Курка, полуниця, чері, вершковий сир, шпинат бейбі, рукола, мікрогрін, мигдалеві пластівці, кунжут чорний, крутони з білої чіабати, соус з полуниці",
    },
    {
        id: 302,
        name: "Салат Фінський",
        categories: "salat",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 159,
        weight: 430,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/salat_finskiy-500x500.png.pagespeed.ce.TYfS2rVGyM.png",
        title:
            "Салат мікс, лосось гриль у кисло-солодкому соусі, лимон, картопля гриль, буряк запечений, аспарагус, огірок слайсами, паприка шматочками, соус Фіш",
    },
    {
        id: 303,
        name: "Салат з макреллю і картоплею",
        categories: "salat",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 159,
        weight: 525,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/z-makrellyu-ta-kartopleyu-500x500.png",
        title:
            "Салат мікс, макрель гриль, лимон, картопля гриль, кабачок гриль, цукровий горох, помідор, сушена цибуля, соус Ред",
    },
    {
        id: 304,
        name: "Салат Вега",
        categories: "salat",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 139,
        weight: 495,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/vega-500x500.png",
        title:
            "Салат мікс, цукровий горох, перець гриль, бейбі кукурудза, кабачок гриль, картопля гриль, помідори чері, боби едамаме, мікрогрін, кунжут, соус Ред",
    },
    {
        id: 305,
        name: "Салат з в’яленою олениною",
        categories: "salat",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 169,
        weight: 340,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/z-v_yalenoyu-olenynoyu-500x500.png",
        title:
            "Салат мікс, в’ялена оленина, бринза, в’ялені томати, помідори чері, крутони з житнього хліба, мікрогрін, соус з журавлини",
    },
    {
        id: 306,
        name: "Салат Цезар з індичкою",
        categories: "salat",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 139,
        weight: 429,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/czezar-z-indychkoyu-1-500x500.png.pagespeed.ce.dBSg052KCk.png",
        title:
            "Салат мікс, індичка, горох цукровий, помідори коктейльні, боби едамаме, сухарики, яйця перепелині, пармезан, соус Цезар Грін",
    },
    {
        id: 307,
        name: "Салат з лососем та авокадо",
        categories: "salat",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 164,
        weight: 361,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/z-lososem-ta-avokado-2-500x500.png",
        title:
            "Салат мікс, лосось, авокадо, манго, огірок, боби едамаме, лайм, насіння кунжуту, соус Грін",
    },
    {
        id: 308,
        name: "Салат з креветками та манго",
        categories: "salat",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 199,
        weight: 360,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/z-krevetkamy-ta-mango-1-500x500.png",
        title:
            "Салат мікс, креветка тигрова, манго, авокадо, начос, помідори коктейльні, лайм, насіння кунжуту, медово-лимонна заправка",
    },
    {
        id: 309,
        name: "Салат з авокадо та куркою",
        categories: "salat",
        new: false,
        xit: true,
        weeklyspecial: false,
        price: 135,
        weight: 390,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/z-avokado-ta-kurkoyu-2-500x500.png.pagespeed.ce.w1eNo9NPcd.png",
        title:
            "Салат мікс, куряче філе, авокадо, виноград, сир фета, помідори коктейльні, насіння кунжуту, лимонно-гірчична заправка",
    },
    {
        id: 310,
        name: "Салат Цезар",
        categories: "salat",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 119,
        weight: 410,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/czezar-1-500x500.png",
        title:
            "Салат мікс, куряче філе, помідори, сухарики, яйце, сир пармезан, соус Цезар",
    },
    {
        id: 311,
        name: "Салат Манзо Гриль",
        categories: "salat",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 129,
        weight: 350,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/manzo-gryl-1-500x500.png",
        title:
            "Салат мікс, яловичина вирізка, перець гострий червоний, помідори, сухарики, цибуля маринована, соус перцевий",
    },
    {
        id: 312,
        name: "Салат Тоскана Гриль",
        categories: "salat",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 139,
        weight: 450,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/toskana-gryl-1-500x500.png.pagespeed.ce.JnwscLFa1j.png",
        title:
            "Салат мікс, куряче філе, помідори коктейльні, баклажани гриль, перець болгарський гриль, кабачок гриль, фета в травах, лимонно-гірчична заправка  ",
    },
    // sandwich
    {
        id: 401,
        name: "Фіт сендвіч Сілд Брод",
        categories: "sandwich",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 109,
        weight: 495,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/sild-brod-500x500.png",
        title:
            "Паніні, оселедець, цибуля фіолетова маринована, огірок квашений, яйце, листя салату, соус Фіш",
    },
    {
        id: 402,
        name: "Фіт сендвіч з яловичиною і в’яленими томатами",
        categories: "sandwich",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 129,
        weight: 285,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/z-yalovychynoyu-ta-v_yalenymy-tomatamy-500x500.png",
        title:
            "Паніні, яловичина, в’ялені томати, халумі, листя салату, соус Тайський з перцем гриль",
    },
    {
        id: 403,
        name: "Фіт сендвіч з лососем",
        categories: "sandwich",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 119,
        weight: 310,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/z-lososem-500x500.png",
        title:
            "Паніні, крем-сир, лосось, листя салату, помідори, огірок, соус Тартар",
    },
    {
        id: 404,
        name: "Фіт сендвіч Вега Гриль",
        categories: "sandwich",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 74,
        weight: 290,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/vega-gryl-1-500x500.png",
        title:
            "Паніні, кабачок гриль, баклажан гриль, перець  гриль,  сир фета, листя салату, соус Тартар",
    },
    {
        id: 405,
        name: "Фіт сендвіч з куркою",
        categories: "sandwich",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 99,
        weight: 300,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/z-kurkoyu-1-500x500.png",
        title: "Паніні, куряче філе, помідор, листя салату, сир фета, соус Цезар",
    },
    // soup
    {
        id: 501,
        name: "Суп бурячковий з бринзою",
        categories: "soup",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 59,
        weight: 380,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/buryachkovyj-z-brynzoyu-500x500.png",
        title: "Буряк, цибуля, морква, бринза, вершки, грецький горіх, мікрогрін, орегано",
    },
    {
        id: 502,
        name: "Томатний суп з сочевицею",
        categories: "soup",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 59,
        weight: 380,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/tomatnyj-sup-z-sochevyczeyu-500x500.png",
        title: "Томати, сочевиця, цибуля, морква, часник, вершки, насіння кунжуту, оливкова олія, мікрогрін",
    },
    // dessert
    {
        id: 601,
        name: "Матча Кап",
        categories: "dessert",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 69,
        weight: 135,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/matcha-kap-500x500.png",
        title: "Вершковий крем на основі матчі, печиво Орео, кавовий сироп, гранола, топінг вишневий",
    },
    {
        id: 602,
        name: "Печиво вівсяне з кіноа",
        categories: "dessert",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 39,
        weight: 150,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/12/admin-ajax.png",
        title: "Вівсяні пластівці, борошно пшеничне, кіноа, масло вершкове, яйце, насіння кунжуту, журавлина, цукор, кориця",
    },
    {
        id: 603,
        name: "Блубері Пай",
        categories: "dessert",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 59,
        weight: 150,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/bluberi-paj-1-500x500.png",
        title: "Маскарпоне, сир кисломолочний, чорниця, печиво, вершки, яйце, цукор",
    },
    {
        id: 604,
        name: "Чері Пай",
        categories: "dessert",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 59,
        weight: 150,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/cheri-paj-1-500x500.png",
        title: "Шоколад чорний, печиво Орео, вишня, вершки, яйце, цукор, масло вершкове",
    },

    // drinks
    {
        id: 701,
        name: "Напій швепі",
        categories: "drinks",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 46,
        weight: 450,
        image: "https://www.tomatina.ua/wp-content/uploads/2021/03/xphoto_2021-03-18_10-17-11-500x500.jpg.pagespeed.ic.HF9Acm-Yow.webp",
        title: "М'якоть лимону, вода, цукор",
    },
    {
        id: 702,
        name: "Напій обліпиха-апельсин",
        categories: "drinks",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 46,
        weight: 450,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/oblipyhovo_apelsynovyj-500x500.png",
        title: "Обліпиха, апельсин, вода, цукор",
    },
    {
        id: 703,
        name: "Напій манго-ананас",
        categories: "drinks",
        new: true,
        xit: false,
        weeklyspecial: false,
        price: 46,
        weight: 450,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/mango_ananas-500x500.png",
        title: "Ананас, манго, вода, цукор",
    },
    {
        id: 704,
        name: "Напій ягідний",
        categories: "drinks",
        new: false,
        xit: true,
        weeklyspecial: false,
        price: 46,
        weight: 450,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/yagidnyj-500x500.png",
        title: "Сік яблучний, малина, полуниця, вода, цукор",
    },
    {
        id: 705,
        name: "Фреш апельсиновий",
        categories: "drinks",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 79,
        weight: 300,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/xfresh_apelsynovyj-500x500.png.pagespeed.ic.PrNyf1Ia77.png",
        title: "Апельсин",
    },
    {
        id: 706,
        name: "Фреш морквяний",
        categories: "drinks",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 43,
        weight: 300,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/fresh_morkvyanyj-500x500.png",
        title: "Морква",
    },
    {
        id: 707,
        name: "Фреш яблучний",
        categories: "drinks",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 49,
        weight: 300,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/fresh_yabluchnyj-500x500.png",
        title: "Морква",
    },
    {
        id: 708,
        name: "Фреш грейпфрутовий",
        categories: "drinks",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 79,
        weight: 300,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/11/fresh_grejpfrutovyj-500x500.png",
        title: "Морква",
    },
    {
        id: 709,
        name: "Вода газована Аква Мінерале",
        categories: "drinks",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 29,
        weight: 500,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/12/mineralna_voda_aqua_minerale_gazovana-500x500.png",
        title: "Вода",
    },
    {
        id: 710,
        name: "Вода негазована Аква Мінерале",
        categories: "drinks",
        new: false,
        xit: false,
        weeklyspecial: false,
        price: 29,
        weight: 500,
        image: "https://www.tomatina.ua/wp-content/uploads/2020/12/mineralna_voda_aqua_minerale_negazovana-500x500.png",
        title: "Вода",
    },
];

app.get("/", (req, res) => {
    res.send("Hello API");
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/products/:id", (req, res) => {
    console.log(req.params);
    let product = products.find((product) => {
        return product.id === Number(req.params.id);
    });
    res.send(product);
});

app.post("/products", (req, res) => {
    let product = {
        id: Date.now(),
        name: req.body.name,
    };
    products.push(product);
    res.sendStatus(product);
});

app.put("/products/:id", (req, res) => {
    let product = products.find((product) => {
        return product.id === Number(req.params.id);
    });
    product.name = req.body.name;
    res.sendStatus(200);
});

app.delete("/products/:id", (req, res) => {
    products = products.filter((product) => {
        return product.id !== Number(req.params.id);
    });
    res.sendStatus(200);
});

app.listen(3012, () => {
    console.log("API app started");
});
