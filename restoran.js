// //Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.


const dishes = new Map();
dishes.set("Маргарита", "Виктор"),
    dishes.set("Пепперони", "Виктор"),
    dishes.set("Филадельфия", "Ольга"),
    dishes.set("Калифорния", "Ольга"),
    dishes.set("Тирамису", "Дмитрий"),
    dishes.set("Чизкейк", "Дмитрий")


const pizza = new Set().add("Маргарита").add("Пепперони");
const sushi = new Set().add("Филадельфия").add("Калифорния");
const deserts = new Set().add("Тирамису").add("Чизкейк");


const cooks = new Map();
cooks.set("Виктор", pizza),
    cooks.set("Ольга", sushi),
    cooks.set("Дмитрий", deserts)


const order1 = new Set().add("Пепперони").add("Тирамису");
const order2 = new Set().add("Калифорния").add("Маргарита");
const order3 = new Set().add("Чизкейк");


const clients = new Map();
clients.set("Алексей", order1),
    clients.set("Мария", order2),
    clients.set("Ирина", order3)


console.log(cooks.entries());
console.log(clients.entries());
console.log(`Блюда Виктора: ${[...cooks.get("Виктор")]}`);


