//Task 1: Working with Array

function getProductsByCategory(products, category) {
    return products.filter(product => product,category === category);
}

console.log(getProductsByCategory(products, "Electronics"));

//Task 2: Array Methods - Map

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product, 
        price: product.price - (product.price * discountRate)
    }

    ) )
}

console.log(applyDiscount(products, .1));

//Task 3: Array Methods - Reduce
let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales) {
    return sales.reduce((total, sale)=> total + sale, 0)
}
console.log(calculateTotalRevenue(sales));

//Task 4: Object Manipulation
let employee = {
    name: "John Doe",
    salary: 50000,
    position: "Manager"
};
console.log(employee) //First time to see no change
function updateSalary(employee, percentageIncrease) {
    employee.salary = employee.salary + (employee.salary * percentageIncrease)
};
console.log(employee) //To see the change worker.

//Task 5: Finding an Object in an Array
let orders = [
    { id: 101, customer: "Alice", total: 300 },
    {id: 102, customer: "Bob", total: 200 },
    { id: 103, customer: "Charlie", total: 200 }
];
function findOrders(orders, orderID) {
    return orders.find(order => order.id === orderID)
}
some_order = findOrders(orders, 101)
console.log(`${some_order.customer} has an order id: ${some_order.id}, with a total of $${some_order.total}`)

//Task 6: Using Object Methods
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push(( name, quantity ));
    },
    removeLatestItem() {
        this.items.pop();
    },
    removeFirstItem() {
        this.items.shift();
    }
};
inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
inventory.addItem("Mouse", 3)
console.log(inventory.items); //Viewing all Items
inventory.removeLatestItem(); //Removing Latest
console.log(inventory.items); //View Items Remaining
inventory.removeFirstItem(); //Removing First Item
console.log(inventory.items) //View Items Removed

//Task 7: Using the find Method:
let employees = [
    {name: "Alice", position: "Developer", slaary: 70000},
    {name: "Bob", position: "Designer", salary:  60000},
    {name: "Charlie", position: "Manager", salary: 90000}
];
function findEmployees(employees, name) {
    return employees.find(employee => employee.name === name)
}
console.log(findEmployees(employees, "Charlie"))

//Task 8: Combining Arrays and Objects
let orders1 = [
    {id: 1, customer: "Alice"},
    {id: 2, customer: "Bob"}
];
let orders2 = [
    {id: 3, customer: "Charlie"},
    {id: 4, customer: "David"}
];
function combineOrders(order1, order2) {
    return [...order1, ...order2]
}
console.log(combineOrders(orders1, orders2));