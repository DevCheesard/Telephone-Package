class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    AddPhoneNumber(number) {
      this.phoneNumbers.push(number);
    }
  
    RemovePhoneNumber(number) {
      this.phoneNumbers = this.phoneNumbers.filter(n => n !== number);
    }
  
    DialPhoneNumber(number) {
      if (!this.phoneNumbers.includes(number)) {
        console.log("Invalid phone number");
        return;
      }
      this.notifyObservers(number);
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(o => o !== observer);
    }
  
    notifyObservers(number) {
      this.observers.forEach(observer => observer.update(number));
    }
  }
  
  class Observer {
    constructor() {}
    update(number) {
      console.log(number);
    }
  }
  
  class DiallingObserver {
    constructor() {}
    update(number) {
      console.log(`Now dialling ${number}`);
    }
  }
  
  const phone = new Telephone();
  const observer1 = new Observer();
  const observer2 = new DiallingObserver();
  phone.addObserver(observer1);
  phone.addObserver(observer2);
  
  phone.AddPhoneNumber("2347023232");
  phone.DialPhoneNumber("2347023232");