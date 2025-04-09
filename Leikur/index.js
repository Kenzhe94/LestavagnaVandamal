const c = document.getElementById('leikbord');
const ctx = c.getContext('2d');

let ground = new Image();
ground.src = 'Img/BackgroundMyndLestaTenar.png'


class element{
    constructor (options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.image = options.image;
        this.title = options.title;
    }
    draw(ctx){
        if(this.image){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        else{
            ctx.fillStyle = '#aaa';
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
}

const JB = new element({
    x: 100,
    y: 500,
    width: 25,
    height: 45,
})


function loop(){
    ctx.drawImage(ground,0,0);
    JB.draw(ctx);
    window.requestAnimationFrame(loop);
}
loop();