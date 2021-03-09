function Car(name, fuelType, distance, fuelAmount, price){
  this.name = name;
  this.fuelType = fuelType;
  this.distance = distance;
  this.fuelAmount = fuelAmount;
  this.price = price;
}

var models = ['Toyota1','Toyota2','Toyota3','Toyota3','Mercedes1','Mercedes','Audi1','Audi2','BMW1','BMW2','Subaru1','Subaru2','Nissan1','Nissan2'];
var petrolConsumption = [4.5,7.3,'none',5.7,12.2,7.5,8.5,6.5,8.7];
var dieselConsumption = ['none',8.4,10.3,5.7,9.1,6.3,9.8,3.2,5.9];

$(document).ready(function(){
  console.log(models,petrolConsumption,dieselConsumption);

  $('#fuelForm').submit(function(event){
    event.preventDefault();
    var selectModel = $('#cars').val();
    console.log(selectModel);
    if(selectModel === "Choose..."){
      alert("Please choose a model!");
    }

  });
});