
class Box {


    constructor(x, y, width, height){

        var options = {

            restitution:1,
            isStatic:true,

        }

        this.height = height
        this.width = width
        this.body = Bodies.rectangle(x, y, width, height)
        World.add(world, this.body)

    }
    display(){

            var pos = this.body.position
            //translate(this.position)
            //var angle = this.body.angle
            //rotate(this.body.angle)
            rectMode(CENTER)
            fill(255, 0, 0) 
            rect(pos.x, pos.y, this.width, this.height)

    }

}


