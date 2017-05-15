const app = "I don't do much."

var pbj = {
	bread: "white",
	ingredirnts: ["peant butter", "jelly"],
	cut: "traingles"

};

// function Sandwich(bread, ingredients, cut) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.cut = cut;
//   this.serve = function() {
//   	console.log("here's your " + this.name + " enjoy!")
//   };
// };

function Sandwich(bread, ingredients, name){
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describ = function() {
  	firstsIngredients =  this.ingredients.slice(0, -1).join(", ");
  	last =  this.ingredients.slice(-1);
  	console.log("Enjoy your " + this.name + " with " + firstsIngredients + " and, " + last + " !")
  }
}

var blt = new Sandwich("white", ["meat", "lettuce", "tomato", "mayo"], "rectangle");
var rebun = new Sandwich("rye", ["crown beef", "sourcraut","swiss", "russian dressing"], "diagonal");

// var pbj = {
// 	bread: "white",
// 	ingredients: ["peant butter", "jelly"],
// 	cut: "traingles",
// 	name: "peant butter and jelly",
// 	serve: function(){
// 		console.log("here's your " + this.name + " enjoy!");
// 	}
// };

function serve() {
	if(arguments.length > 0){
      var customers = Array.prototype.slice.call(arguments);
      var last = customers.pop();
      console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
	} else {
       console.log(this.name + ". Order up!");
	};
	
}
// var blt = {
//    bread: "white",
//    ingredients: ["meat", "lettuce", "tomato", "mayo"],
//    cut: "rectangle",
//    name: "BLT",
//    serve: function() {
//    	 console.log("here's your " + this.name + "")
//    }
// };

var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
var pbj = new Sandwich("white", ["peant butter", "raspberry jam"], "Peant Butter & Jelly");
serve.call(gc);
serve.call(pbj, "Mushkie", "Moishy", "sarah");
serve.apply(gc, ["Moishy", "momo", "kplo"]);
serve.apply(pbj);

function DeliveryFood(customer, table) {
	console.log("Delivering " + this.name + " to " + customer + " at table " + table);
}

DeliveryFood.call(gc, "Moishy", "4");
DeliveryFood.apply(pbj, ["Mushkie", "5"]);



var sald = {
	name: "Greek Sald",
	ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"]
};

gc.describ.call(sald);
var describSald = gc.describ.bind(sald);
sald.describ = gc.describ.bind(sald);

function VisitTable() {
	console.log("The servent is visiting " + this.name " at table number: " + this.tableNumber);
};

function Customer(name, tableNumber) {
	this.name = name;
	this.tableNumber = tableNumber;
};

var moishy = new Customer("Moishy", "4");
var visitMoishy =  VisitTable.bind(moishy);
setTimeout(visitMoishy, 1000);