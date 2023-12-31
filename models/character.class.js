class Character extends MovableObject {
    height = 300;
    width = 160;
    y = 80;
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

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];

    walking_sound = new Audio('audio/character_running.wav');
    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.walking_sound.pause();
            //Change the value of the x axis by pressing the right arrow
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }

            //Change the value of the x axis by pressing the left arrow
            if(this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.walking_sound.play();
            }

            //changes the value of the speedY variable, causing the character to jump
            if(this.world.keyboard.UP && !this.isAboveGround()){
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        },1000 / 60);

        setInterval(() => {
            //Jump Animation
            if(this.isAboveGround()){
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                //Walk Animation
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        },70);
    }

    jump(){
        this.speedY = 30;
    }
}