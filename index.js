class Telephone{
    constructor(){
        this.phoneNumbers= [];
        this.observers = [];
    }
    addObserver(observer){
        this.observers.push(observer);
    }
    removeObserver(observer){
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }
    addPhoneNumber(phoneNumber){
        this.phoneNumbers.push(phoneNumber);
    }
    removePhoneNummber(phoneNumber){
        this.phoneNumbers = this.phoneNumbers.filter(num  => num !== phoneNumber)
    }
    dialPhoneNumber(phoneNumber){
        switch(true){
            case this.phoneNumbers.includes(phoneNumber):
    
    console.log(`Dailling ${phoneNumber}`);
    this.notifyObservers(phoneNumber);
    break;
  default:
    console.log("This  number not found.");
    break;
        
    }
}
}

class PhoneObserver{
    update(phoneNumber){
        console.log(`Phone number: ${phoneNumber}`)
    }
}

class CustomObserver{
    update(phoneNumber){
        console.log(`Now Dailing: ${phoneNumber}`)

    }
}
let telephone = new Telephone()
let phoneObserver =new PhoneObserver()
let customObserver = new CustomObserver()

telephone.addObserver(phoneObserver)//adds new observrs 
telephone.addObserver(customObserver)

telephone.addPhoneNumber(2347023232)
telephone.dialPhoneNumber(2347023232)
 