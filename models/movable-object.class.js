class MovableObject extends DrawableObjects {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity(){
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
            }
        },1000 / 25)
    }

    isAboveGround(){
        if(this instanceof ThrowableObjects){
            return true;
        } else {
            return this.y < 120;
        }
    }

    // Bessere Formel zur Kollisionsberechnung (Genauer)
    isColliding (mo) {
        return  this.x + this.width > mo.x &&
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height
    }

    hit(){
        this.energy -= 10;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead(){
        return this.energy == 0;
    }

    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit; // Diefferenz in Sekunden
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    moveRight(){
        this.x += this.speed;
    }

    moveLeft(){
        this.x -= this.speed;
    }

    playAnimation(images){
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}

