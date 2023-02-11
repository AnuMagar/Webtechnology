var Dog={
    name: "Jack",
    breed: "German Sheperd",
    age:11,

    eat: function(){
        console.log(name+ "is eating");
    },

    sleep: function(){
        console.log("Jack sleeps at 7pm");
    }
}

var Dog = new Dog();
Dog.age;
Dog.sleep();
Dog.eat();