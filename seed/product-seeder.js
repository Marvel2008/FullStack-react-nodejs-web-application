
const goods = [
    {
        name: "Блекаут твін двосторонній",
        imagePATH: "Rectangle(2).jpg",
        material: "Поліестер",
        producer: "Германія",
        price: 1650,
        amount: 300,
        color: ["#C02E38","#83948E","#9E92B6","#975E3A","#131919"],
        protection: "8/10",
        care: "Прати при 18 градусах",
        data_button: "color--black"
    },
    {
        name: "Блекаут твін двосторонній",
        imagePATH: "Rectangle(3).jpg",
        material: "Поліестер",
        producer: "Германія",
        price: 1750,
        amount: 220,
        color: ["#C02E38","#83948E","#9E92B6","#131919"],
        protection: "9/10",
        care: "Прати при 18 градусах",
        data_button: "color--black-another",

    },
    {
        name: "Блекаут твін двосторонній",
        imagePATH: "Rectangle(4).jpg",
        material: "Поліестер",
        producer: "Германія",
        price: 1500,
        amount: 420,
        color:["#83948E","#9E92B6","#975E3A","#131919"],
        protection: "6/10",
        care: "Прати при 18 градусах",
        data_button: "color--green",

    },
    {
        name: "Блекаут твін двосторонній",
        imagePATH: "Rectangle(1).jpg",
        material: "Поліестер",
        producer: "Германія",
        price: 1950,
        amount: 300,
        color: ["#C02E38","#9E92B6","#975E3A","#131919"],
        protection: "10/10",
        care: "Прати при 18 градусах",
        data_button: "collor--black--bright",
    }
];

// products.bulkCreate(goods)
// .then(() => {
//     console.log("Products have been saved to the database.");
// })
// .catch(error => {
//     console.error("Error saving products to the database: ", error);
// });
module.exports = goods

