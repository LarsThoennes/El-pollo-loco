class StatusbarBottle extends DrawableObjects {
    percentage = 0;
    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png',
    ];

    constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 0;
        this.y = 0;
        this.width = 200;
        this.height = 70;
        this.setPercentage(0);
     }

     setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        console.log(percentage);
    }

    resolveImageIndex(){
        if(this.percentage == 0) {
            return 0;
        } else if(this.percentage > 20) {
            return 1;
        } else if(this.percentage > 40) {
            return 2;
        } else if(this.percentage > 60) {
            return 3;
        } else if(this.percentage > 80) {
            return 4;
        } else {
            return 5;
        } 
    }

}
