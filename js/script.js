document.addEventListener("DOMContentLoaded", (e) => {
    "use strict";
    e.preventDefault();

    // function User(name, id) {
    //     this.name = name;
    //     this.id = id;
    //     this.human = true;
    //     this.hello = function() {
    //         console.log(`Hello ${this.name}`);
    //     };
    // }

    // User.prototype.exit = function(name) {
    //     console.log(`Пользователь ${this.name} вышел из системы.`);
    // };

    // const ivan = new User("Ivan", 28);
    // const alex = new User("Alex", 20);

    // ivan.exit();

    // ivan.hello();
    // alex.hello();

    // console.log(ivan);
    // console.log(alex);

    function Car(mark, color, speed){
        this.mark = mark;
        this.color = color;
        this.speed = speed;
        this.user = false;

        this.engineStart = function(){
            if(this.user) {
                console.log('двигатель был запущен');
            } else {
                console.log('невозможно запустить двигатель без водителя');
            }

        };
    }

    const ww = new Car('Wolkswagen', 'red', 0);

    Car.prototype.engineOff = function(){
        if (this.user && this.speed == 0){
            console.log('двигатель был выключен');
        } else {
            console.log(`невозможно выключить двигатель пока машина едет, скиньте скорость до ${0}`);
        }
    };

    Car.prototype.carColor = function() {
        if (this.color == "red") {
            console.log(`Цвет машины: ${this.color}`);
        } else {
            console.log("Цвет машины не соответствует описанию, попробуйте другой");
        }
    }

    console.dir(Car);

    function showCarColor() {
        ww.color = "purple";
        console.log(ww.carColor());
    }

    function showResult(){
        ww.speed = 10;
        ww.user = false; 
        console.log(ww.engineStart()); //попытка запустить двигатель без водителя
        ww.user = true; 
        console.log(ww.engineStart()); //попытка запустить двигатель с водителем
        
        console.log(ww.engineOff()); //попытка выключить двигатель на скорости > 0
        ww.speed = 0;
        console.log(ww.engineOff()); //попытка выключить двигатель на скорости 0
    
    }
    
    showCarColor();
    showResult();
});


