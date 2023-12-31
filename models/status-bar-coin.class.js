class StatusbarCoin extends DrawableObjects {
     percantage = 0;
     IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
     ];

     constructor(){
        super();
        this.loadImages(this.IMAGES);
        this.x = 0;
        this.y = 100;
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