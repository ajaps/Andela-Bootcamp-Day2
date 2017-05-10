function Car(carName, carModel, carType){
  if(arguments.length>0){
    this.name = carName;
    this.model = carModel;
    this.isSaloon = true;
    this.numOfWheels = 4;
    this.numOfDoors = 4;
    this.speed = '0 km/h';
  }
  else{
    this.name = 'General';
    this.model = 'GM';
  }

  //Checks if car name is Porshe, Koenigsegg or others and then sets the equivalent number of doors
  if(this.name ==='Porshe' || this.name==='Koenigsegg'){
    this.numOfDoors = 2;
  }

  //Checks if car is a Trailer
  if(carType === 'trailer'){
    this.isSaloon = false;
    this.numOfWheels = 8;
    this.carType = 'trailer';
  }
}
//creates a method for class Car
Car.prototype.drive = function(speed){

  //Checks if property carType of class Car is set, if yes - then its a trailer
  if(this.carType){
    this.speed = (11 * speed)+' km/h';
  }
  else{
    this.speed = (50 * speed)+' km/h';
  }
  return this
}


module.exports = {
  Car:Car
}