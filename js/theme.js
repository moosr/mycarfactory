$('[data-toggle=offcanvas]').click(function() {
  $('.row-offcanvas').toggleClass('active');
});

$('.btn-toggle').click(function() {
  $(this).find('.btn').toggleClass('active').toggleClass('btn-default').toggleClass('btn-primary');
});

$(document).ready(function() {
	console.log("ready");
	$('#carfactory').submit(function(event){
		event.preventDefault();
		var frm = $(this);
		createFactory(frm);
	})
});

function div_show() {
document.getElementById('abc').style.display = "block";
}

function createFactory(frm){
	var make = frm.find('select[name="make"]').val();
	var model = frm.find('select[name="model"]').val();
	var color = frm.find('select[name="color"]').val();
	var quantity = frm.find('input[name="quantity"]').val();

	console.log(make + ' ' + model + ' ' +color +' ' +quantity);
}

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

$('#openmodal').click(function(){
	$('#overlay').fadeIn(400, function(){	
	});
	$('modal').fadeIn(800);
})

$('#closemodal').click(function(){
	$('#overlay').fadeOut(400, function(){
	});
	$('modal').fadeOut(800);
})
