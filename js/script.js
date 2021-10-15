function Car(name, distance,fuelType, fuelAmount, price){
  this.name = name;
  this.distance = distance;
  this.fuelType = fuelType;
  this.fuelAmount = fuelAmount;
  this.price = price;
}

var models = ['Toyota1','Toyota2','Toyota3','Mercedes1','Mercedes2','Audi1','Audi2','BMW1','BMW2','Subaru1','Subaru2','Nissan1','Nissan2'];
var petrolValues = [4.5,7.3,'none',5.7,12.2,5.7,12.2,5.7,12.2,7.5,8.5,6.5,8.7];
var dieselValues = ['none',8.4,10.3,5.7,9.1,5.7,9.1,5.7,9.1,6.3,9.8,3.2,5.9];

$(document).ready(function(){
  console.log(models,petrolValues,dieselValues);

  $('#petrol').click(function(){
    console.log("i did it");
    $('#cars option[value = "Toyota1"]').removeAttr('disabled');
    $('#cars option[value = "Toyota3"]').attr('disabled','disabled');
  });
  $('#diesel').click(function(){
    console.log("i did it again");
    $('#cars option[value = "Toyota1"]').attr('disabled','disabled');
    $('#cars option[value = "Toyota3"]').removeAttr('disabled');
  });  
  $('#calculate').click(function(){
    
  });

  

  $('#fuelForm').submit(function(event){
    event.preventDefault();
    var selectModel = $('#cars option:selected').val();
    console.log(selectModel);
    var modelName = $('#cars option:selected').text();
    console.log(modelName);
    let petrolCheck= document.querySelector("#petrol").checked;
    console.log("petrolcheck", petrolCheck);
    let dieselCheck= document.querySelector("#diesel").checked;
    console.log("dieselcheck", dieselCheck);
    if(petrolCheck === false && dieselCheck === false){
      alert("Please choose fuel type!")
      return false;
    }else if(selectModel === 'Choose...'){
      alert("Please choose a model!");
      return false;
    }
    
    var inputDistance = parseInt($('#distance').val());
    console.log(inputDistance);


    var modelIndex = models.indexOf(selectModel);
    console.log(modelIndex);


    if(petrolCheck){
      console.log("bless");
      var typePetrol = document.querySelector("#petrol").value;
      console.log(typePetrol);  
      var petrolConsumption = parseFloat(petrolValues[modelIndex]).toFixed(3);
      console.log(petrolConsumption);  
      var petrolNeeded = ((petrolConsumption*inputDistance)/100)
      console.log(petrolNeeded);
      var petrolPrice =parseInt(petrolNeeded*135);
      console.log(petrolPrice);
    }else if(dieselCheck){
      console.log("Bariki");
      var typeDiesel = document.querySelector("#diesel").value;
      console.log(typeDiesel);  
      var dieselConsumption = parseFloat(dieselValues[modelIndex]).toFixed(3);
      console.log(dieselConsumption);  
      var dieselNeeded = ((dieselConsumption*inputDistance)/100)
      console.log(dieselNeeded);
      var dieselPrice =parseInt(dieselNeeded*117);
      console.log(dieselPrice);
    }
    var newCar = new Car(modelName,inputDistance,typeDiesel||typePetrol,dieselNeeded||petrolNeeded,dieselPrice||petrolPrice,);
    console.log(newCar);
    document.getElementById('fuelForm').reset();
    $('ul#result').append('<li>' + "Car Model : " + newCar.name + '</li>' +
    '<li>' + "Distance : " + newCar.distance + ' Km' + '</li>' +
    '<li>' + "Fuel Type : " + newCar.fuelType + '</li>'+
    '<li>' + "Amount of Fuel Needed :" + newCar.fuelAmount + 'Litres'+'</li>' +
    '<li>' + "Estimated Price : Ksh." + newCar.price + '</li>' +
    '<button type="button" class="btn btn-success " id="finish">Finish</button>')    
   $('#finish').click(function(){
    location.reload();
   });
   $('#calculate').hide();

  });
  $('button.submit').click(function(event){
    event.preventDefault();
    var inputName = document.getElementById('name').value;
    $('#contactForm').hide();
    $('.message').append('<p class="bg-secondary">Thank you for your enquiry ' + inputName + '. We will get back to you as soon as possible!</p>')
  
  })
});