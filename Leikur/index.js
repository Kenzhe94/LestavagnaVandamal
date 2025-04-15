var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.7.1.js";
document.getElementsByTagName("head")[0].appendChild(script);

const c = document.getElementById('leikbord');
const ctx = c.getContext('2d');
const uppText = document.getElementById('atburdarTexti');

var levelCounter = 0;
var score = 0;
let boolGeraEkkert = false;
let boolTakaíStöng = false;


let ground = new Image();
ground.src = 'Img/Gummibackground.png'
let kettir = new Image();
kettir.src = 'Img/folk/7_gamalt_folk.png'
let leikskoliMynd = new Image();
leikskoliMynd.src = 'Img/Leikskóli.png'
let spitaliMynd = new Image();
spitaliMynd.src = 'Img/Spítali.png'


document.getElementById("pullLever").addEventListener('click',() => {boolTakaíStöng=true});
document.getElementById("noPullLever").addEventListener('click',() => {boolGeraEkkert=true});
document.getElementById("næstaBorð").addEventListener("click", switchToNextLevel);

class element{
    constructor (options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.image = options.image;
        this.title = options.title;
        this.numPeople = options.num;
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

class LevelBoard{
    constructor(options){
        this.boardLevel = options.boardLevel;
        this.boardVal1 = options.Val1;
        this.boardVal2 = options.Val2;
        this.boardUpp = options.boardUpp;
    }
}
const JB = new element({
    x: 100,
    y: 500,
    width: 300,
    height: 175,
    image: kettir
})

const lest = new element({
    x: 100,
    y: 200,
    width: 120,
    height: 55 
})

// const JB = {
//     x: 100,
//     y: 500,
//     width: 25,
//     height: 45,
//     runningFrames: [],
//     frameIndex:0,
//     frameDelay:3,
//     frameCounter:0
// };
// function preLoadImages(){
//     for(let i = 1; i<=5; i++){
//         const img = new Image();
//         img.src = `img/JB${i}.png`;
//         JB.runningFrames.push(img);
//     }
// }
// preLoadImages();

const einManneskja = new element({
    x: 600,
    y: 100,
    width: 25,
    height: 45,
    numPeople: 1
})
const fimmManneskjur = new element({
    x: 600,
    y: 400,
    width: 60,
    height: 45,
    numPeople: 5
})
const bekkurZY = new element({
    x: 600,
    y: 100,
    width: 25,
    height: 45,
    numPeople: 12
})
const bekkurX = new element({
    x: 600,
    y: 400,
    width: 30,
    height: 45,
    numPeople: 9
})
const leikskoli = new element({
    x: 600,
    y: 100,
    width: 600,
    height: 350,
    numPeople: 12,
    image: leikskoliMynd
})
const spitali = new element({
    x: 600,
    y: 400,
    width: 300,
    height: 175,
    numPeople: 12,
    image: spitaliMynd
})


const Level1 = new LevelBoard({
    boardLevel: 1,
    Val1: einManneskja,
    Val2: fimmManneskjur,
    boardUpp:"Ó nei, lest stefnir í átt að manneskjum sem eru bundnar í reipi. Ef þú tekur í stöngina þá bjargaru 5 en drepur 1 manneskju í staðin. Jóhann, hvað ætlar þú að gera?"
})
const Level2 = new LevelBoard({
    boardLevel: 2,
    Val1: bekkurX,
    Val2: bekkurZY,
    boardUpp:"Ó nei, lestin stefnir í átt að tveim bekkjum, X-bekk og ZY-bekk. Þú getur bjargað ZY-bekknum á kostnað X-bekksins. Hvað mun Jóhann gera?"
})
const Level3 = new LevelBoard({
    boardLevel: 3,
    Val1: leikskoli,
    Val2: spitali,
    boardUpp:"Ó nei, lestin stefnir í átt að börnunum þínum Jóhann. Þú getur bjargað þeim með að taka í stöngina, en þá keyrir lestin yfir 5 ára deild leikskólans Ævintýraborg við Nauthólsveg. Hvað gerir þú?"
})

var levelDeck = [Level1,Level2, Level3];

function hreyfaLest(){
    if (boolGeraEkkert){
        lest.x += 2;
        lest.y += 0.5;
    }
    if (boolTakaíStöng){ 
        if (lest.x > ((c.width/2)-140) && lest.x < ((c.width/2)+120)){
            lest.x += 1.2;
            lest.y -= 0.75;
        }
        else if (lest.x > ((c.width/2)+120)){
            lest.x += 2;
            lest.y -= 0.01;
        }
        else {
            lest.x += 2;
            lest.y += 0.5;
        }
    }

} 
setInterval(hreyfaLest, 1);

function drawLevel(Level){
    ctx.font = "24px Monospace";
    ctx.fillText(`Level : ${Level}`, c.width/2-40, 50);
}


function startLevel(LevelToPlay){
    ctx.clearRect(0,0,c.width,c.height);
    
    ctx.drawImage(ground,0,0);
    lest.draw(ctx);
    JB.draw(ctx);
    drawLevel(LevelToPlay.boardLevel);
    LevelToPlay.boardVal1.draw(ctx);
    LevelToPlay.boardVal2.draw(ctx);
    uppText.innerHTML = LevelToPlay.boardUpp;
    
}
function switchToNextLevel(){
    boolGeraEkkert = false;
    boolTakaíStöng = false;
    levelCounter++;
    lest.x = 100;
    lest.y = 200;

}

function loop(){
    //draw level
    startLevel(levelDeck[levelCounter]);
    //hreyfa lest

    // ctx.drawImage(runningFrames.img, JB.x,JB.y,JB.width,JB.height);
    window.requestAnimationFrame(loop);
}
loop();