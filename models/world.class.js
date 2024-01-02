class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusbar = new Statusbar();
    ThrowableObject = [];

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.run();
        this.draw();
    }

    setWorld(){
        this.character.world = this;
    };

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 100);
    }

    checkCollisions(){
        this.level.enemies.forEach((enemy) => {
            if(this.character.isColliding(enemy)){
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowObjects(){
        if(this.keyboard.THROW) {
            let bottle = new ThrowableObjects(this.character.x + 100 , this.character.y + 100);
            this.ThrowableObject.push(bottle);
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);//Kamera wird zurück geschoben
        this.addToMap(this.statusbar); // So wird die Statusbar dauerhaft im Bild angezeigt
        this.ctx.translate(this.camera_x, 0);// kamera wird nach vrone geschoben

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.ThrowableObject);
        
        this.ctx.translate(-this.camera_x, 0);

        self = this;
        requestAnimationFrame(function(){
            self.draw();
    });
    }

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    
    addToMap(mo){
        if(mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        
        if(mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}