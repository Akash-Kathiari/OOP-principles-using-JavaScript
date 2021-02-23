class User{
    constructor(username, email, password) {
        this.username = username;
        this.email=email;
        this.password=password;
    }
    static countUsers(){
        console.log('there are 50 users');
    }
    register(){
        console.log(this.username+' is not registered');
    }
}

class Member extends Users{
    constructor(username, email, password, memberPackage) {
        super(username,email,password);
        this.package=memberPackage;
    }
    getPackage(){
        console.log(this.username+' is subscribed to the '+this.package+'package');
    }
}
let akash = new Member('akash', 'ak2378@njit.edu', 'password','premium');
console.log('getting akashs package');
akash.getPackage();