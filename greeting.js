export function sayHello(name, time){

  if (time < 12){
    console.log("Good mornig");
  }else if (time < 18){
    console.log("Good afternoon");
  }else{
    console.log("good evening");
  }
}


sayHello("Karangwa", 14)