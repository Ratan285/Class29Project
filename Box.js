    class Block{
        constructor(x,y,width,height){
           var options = {
                restituion: 0.8,
                friction: 1,
                density: 1.0,
                isStatic:false

            }
            this.body= Bodies.rectangle(x,y,width,height,options);
            World.add(world,this.body);

            this.width = width;
            this.height = height;


    }
    display(){
        var pos = this.body.position;
        var angle = 1;

        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("grey");
        rect(0,0,this.width,this.height);

        pop();

    }
}

