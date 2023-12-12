const Driver = class {
    constructor(id,fullName, gender, BD_year){
        this.id=id
        this.fullName=fullName
        this.gender=gender
        this.BD_year=BD_year
    }
    ages(){
        return new Date().getFullYear()-this.since
    }
} 