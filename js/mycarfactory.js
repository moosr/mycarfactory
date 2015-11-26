function Car(make, model, color) {
	this.make = make;
	this.model = model;
	this.color = color;
}
function CarFactory(make, model, number, color) {
	this.make = make;
	this.model = model; 
	this.number = number;
	this.color = color;
}
CarFactory.prototype.manufacture = function() {
	this.cars=[];
	for (var i=0; i<this.number;i++){
		var automobile = new Car(this.make,this.model,this.color);
		this.cars.push(automobile);
	}
	console.log(this.cars);

}
CarFactory.prototype.repaint = function(newcolor) {
	for(var j=0; j<this.cars.length; j++) {
		(this.cars[j].color=newcolor);
	}


}
var factory1 = new CarFactory("honda","civic",20,"blue");
console.log(factory1);
factory1.manufacture();
factory1.repaint("red");
console.log(factory1);