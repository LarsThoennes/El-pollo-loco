class Character extends MovableObject {
    height = 300;
    width = 160;
    y = 140;
    speed = 15;
    world;
    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate(){
        setInterval(() => {
            //Change the value of the x axis by pressing the right arrow
            if(this.world.keyboard.RIGHT){
                this.x += this.speed;
                this.otherDirection = false;
            }

            //Change the value of the x axis by pressing the left arrow
            if(this.world.keyboard.LEFT){
                this.x -= this.speed;
                this.otherDirection = true;
            }
        },1000 / 60);

        setInterval(() => {
            //Walk Animation
            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        },70);
        
    }

    jump(){

    }
}