const express = require("express")
const cors = require("cors")
const session = require("express-session")
const app = express()
const dbconfig = require("./config/bd.config");
const conString = `postgres://${dbconfig.USER}:${dbconfig.PASSWORD}@${dbconfig.HOST}/${dbconfig.DB}`;
const db = require("./models")
const cookieParser = require("cookie-parser")
const path = require('path');
// const Product = db.product
const FirstArticle = db.firstArticle
const SecondArticle = db.secondArticle
const ThirdArticle = db.thirdArticle
const FourthArticle = db.fourthArticle
const goods_first_article = require('./seed/First_Product_Article_seed')
const goods_second_article = require('./seed/Second_Product_Article_seed')
const goods_third_article = require('./seed/Third_Product_Article_seed')
const goods_fourth_article = require('./seed/Fourth_Product_Article_seed')

// const goods = require('./seed/product-seeder-new')
var corsOptions = {
    origin: "http://localhost:5173",//Дозволяємо запити лише з цього домену
    credentials: true // Дозволяємо передачу кукі
}
// 1-) Connection details
const conObject = {
    user: 'postgres',
    password: 'kolaps888',
    host: 'localhost',
    port: '5432',
    database: 'wallpapers'
}
// 2-) Create an instance of connect-pg-simple and pass it session
const pgSession = require('connect-pg-simple')(session)

// 3-) Create a config option for store
const pgStoreConfig = {
    pgPtomise: require('pg-promise')({ promiseLib: require('bluebird') })({
        conObject
    }),
    conObject: conObject
}

app.use(cors(corsOptions));//Додаємо middleware для обробки CORS
//parse requests of content-type - application/json
app.use(express.json())//express middleware
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// 4-) use the store configuration to pgSession instance
app.use(session({
    store: new pgSession(pgStoreConfig),
    secret: 'secret',
    resave: true,//don't resave a session that hasn't been modified
    saveUninitialized: false,// don't save the initial session if the session object is unmodified (i.e the user did not log in)
    cookie: { maxAge: 180 * 60 * 10 }
}))
// app.use(session({
//     store: new (require('connect-pg-simple')(session))({
//         conString: conString,
//     }),
//     secret: "mysecret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 180 * 60 * 10 }
// }))//Сесії зберігаються на сервері в бд та в кукі-з клієнтської сторони, в якому є ідентифікатор сесії, завдяки якому можна знайти дані в бд


// app.use(function (req, res, next) {
//     res.locals.session = req.session
//     next()
// })//Дозволяє отримати доступ до сесії в кожному маршруті, якщо використовується res.render для шаблонів
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Credentials", "true");

    next();
});

// db.sequelize.sync()
// .then(()=>{
//     return Product.bulkCreate(goods)
// })


// db.sequelize.sync()
//   .then(() => {
//     return Promise.all([
//         FirstArticle.bulkCreate(goods_first_article),
//         SecondArticle.bulkCreate(goods_second_article),
//         ThirdArticle.bulkCreate(goods_third_article),
//         FourthArticle.bulkCreate(goods_fourth_article)

//     ]);
//   })
//   .catch(err => {
//     console.error('Помилка:', err);
//   });

require("./routes/auth.routes")(app)
require("./routes/cart.routes")(app)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})