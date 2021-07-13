let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber)
let registeredEarly = true;
let runnerAge = 25; 

if (registeredEarly === true && runnerAge >= 18){
  raceNumber += 1000;
  //console.log(raceNumber);
}
else{
  console.log('Runner is not an adult and did not register early')
}

if (runnerAge > 18 && registeredEarly === true){
  console.log(`Runner with ${raceNumber} would start race at 9:30 am`)
}
else if (runnerAge > 18 && registeredEarly === false){
  console.log(`Runner with ${raceNumber} would start race at 11:00 am`)
}
else if (runnerAge < 18) {
  console.log(`Runner with ${raceNumber} would start race at 12:30 pm`)
}
else if (runnerAge = 18 && registeredEarly === true){
  console.log('Please see the registration desk')
}
else if (runnerAge = 18 && registeredEarly === false){
  console.log('Please see the registration desk')
}
else{
  console.log('Please see the registration desk')
}