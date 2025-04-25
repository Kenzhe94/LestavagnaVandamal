// Setja inn JB og baeta vid haus hreyfing
// Uppfaera og setja inn myndir
// baeta vid fleiri leikir


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
let lestMynd = new Image();
lestMynd.src = 'Img/annad/lest.png'
let jbHaus = new Image();
jbHaus.src = 'Img/JB/Jóhann1.png'
let jbBody = new Image();
jbBody.src = 'Img/JB/lever.png'
let jbTakaStong = new Image();
jbTakaStong.src = 'Img/JB/pull_lever.png'
let kettir = new Image();
kettir.src = 'Img/annad/kettir.png'
let leikskoliMynd = new Image();
leikskoliMynd.src = 'Img/annad/leikskoli.png'
let spitaliMynd = new Image();
spitaliMynd.src = 'Img/annad/barnaspitali.png'
let fimmManneskjurMynd = new Image();
fimmManneskjurMynd.src = 'Img/folk/5_kallar.png'
let einKallVenjuMynd = new Image();
einKallVenjuMynd.src = 'Img/folk/einn_kall_venjulegur.png'
let splatMynd = new Image();
splatMynd.src = 'Img/folk/splat.png'
let jbBornMynd = new Image();
jbBornMynd.src = 'Img/folk/JB_born.png'
let bekkurYZMynd = new Image();
bekkurYZMynd.src = 'Img/annad/ZY_bekkur.png'
let bekkurXMynd = new Image();
bekkurXMynd.src = 'Img/annad/X_bekkur.png'



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
    image: jbBody
})

const lest = new element({
    x: 100,
    y: 100,
    width: 300,
    height: 175,
    image: lestMynd 
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
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 1,
    image: einKallVenjuMynd
})
const fimmManneskjur = new element({
    x: 800,
    y: 320,
    width: 300,
    height: 175,
    numPeople: 5,
    image: fimmManneskjurMynd
})
const bekkurZY = new element({
    x: 800,
    y: 400,
    width: 300,
    height: 175,
    numPeople: 16,
    image: bekkurYZMynd
})
const bekkurX = new element({
    x: 850,
    y: 100,
    width: 300,
    height: 175,
    numPeople: 40,
    image: bekkurXMynd
})
const leikskoli = new element({
    x: 900,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 12,
    image: leikskoliMynd
})
const spitali = new element({
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 12,
    image: spitaliMynd
})
const jbBorn = new element({
    x: 800,
    y: 320,
    width: 300,
    height: 175,
    numPeople: 2,
    image: jbBornMynd
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
    Val2: jbBorn,
    boardUpp:"Ó nei, lestin stefnir í átt að börnunum þínum Jóhann. Þú getur bjargað þeim með að taka í stöngina, en þá keyrir lestin yfir 5 ára deild leikskólans Ævintýraborg við Nauthólsveg. Hvað gerir þú?"
})
const Level4 = new LevelBoard({
    boardLevel: 4,
    Val1: leikskoli,
    Val2: jbBorn,
    boardUpp:'blabla'
})

var levelDeck = [Level1,Level2,Level3,Level4];

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
function keyraYfir(Level){
    tempVal1 = Level.boardVal1;
    tempVal2 = Level.boardVal2;
    if(boolTakaíStöng){
        JB.image = jbTakaStong;
        if ((lest.x + lest.width) >= (tempVal1.x + tempVal1.width/2 )){
            tempVal1.image = splatMynd;
        }
    }
    else{
        if ((lest.x + lest.width) >= (tempVal2.x + tempVal2.width/2 )){
            tempVal2.image = splatMynd;
        }
    }
}
function animateJBhaus(){

}



function startLevel(LevelToPlay){
    ctx.clearRect(0,0,c.width,c.height);
    keyraYfir(LevelToPlay);

    ctx.drawImage(ground,0,0);
    JB.draw(ctx);
    drawLevel(LevelToPlay.boardLevel);
    LevelToPlay.boardVal1.draw(ctx);
    LevelToPlay.boardVal2.draw(ctx);
    lest.draw(ctx);
    uppText.innerHTML = LevelToPlay.boardUpp;
    
}
function switchToNextLevel(){
    // skodar hvort vid segjum komnir ad endanum
    console.log(levelCounter)
    if (levelDeck.length >= levelCounter){
        boolGeraEkkert = false;
        boolTakaíStöng = false;
        levelCounter++;
        lest.x = 100;
        lest.y = 100;
        JB.image = jbBody
    }
    // fela takkar?
    

}

function loop(){
    //draw level
    startLevel(levelDeck[levelCounter]);
    //hreyfa lest

    // ctx.drawImage(runningFrames.img, JB.x,JB.y,JB.width,JB.height);
    window.requestAnimationFrame(loop);
}
loop();