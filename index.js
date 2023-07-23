// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    set diameter(input){
        return this.radius = input/2
    }
    get circumference(){
        return this.radius * Math.PI * 2
    }
    set circumference(input){
        return this.radius = input/(Math.PI * 2)
    }
    get area(){
        return (this.radius**2) * Math.PI
    }
    set area(input){
        return this.radius = Math.sqrt(input/(Math.PI))
    }
}