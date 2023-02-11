var emp ={
    id,
    name,
    salary,

    emp(id,name,salary){
        this.id = id;
        this.name =name;
        this.salary =salary;
    },

    work: function(){
        console.log("The employee is working")
    }
}

var employee = new emp(80, "Jack", 30000);
employee