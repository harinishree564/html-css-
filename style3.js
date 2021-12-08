/*spread operator*/
const One = [1, 2, 3];
const Two = [4, 5, 6];
const numbersCombined = [...One, ...Two];
document.write(numbersCombined);

/*DESTRUCKTING*/
const vehicles = {
    brand: 'maruti',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
    const {brand,type} = vehicles;
    console.log(vehicles);


    let one=2;
    let two='2';
    if(one === two){

    
    console.log("true");}
    else{
        console.log("false");
    }


       /* rest operator*/
const add=(...args) =>{
    let result=0;
    for(let arg of args)result+=arg;
    return console.log(result);
};
add(5,10,5,15);


/*alias
const vehicle=['one','two','three'];

const [car, suv,truck] = vehicle;
console.log('$(car)','$(truck)');
*/