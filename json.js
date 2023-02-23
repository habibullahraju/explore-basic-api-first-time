const user = {
    id:1,name: 'raju ahmed', job: 'actor'
}
const stringifyed = JSON.stringify(user)
// console.log(stringifyed);
const shop = {
    name: 'ecommerce',
    address: {
        streat: 'kochukhet road',
        isOpen: true,
        product: ['laptop', 'mic', 'earphone', 'charger'],
    },
};
const convertJSON = JSON.stringify(shop);
console.log(convertJSON);
const JSONtoOb = JSON.parse(convertJSON);
console.log(JSONtoOb);