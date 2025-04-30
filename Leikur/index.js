var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.7.1.js";
document.getElementsByTagName("head")[0].appendChild(script);

const c = document.getElementById('leikbord');
const ctx = c.getContext('2d');
const uppText = document.getElementById('atburdarTexti');

var levelCounter = 0;
var score = 0;
var currentLevel = {};
let boolGeraEkkert = false;
let boolTakaíStöng = false;


let ground = new Image();
ground.src = 'Img/Gummibackground.png'
let lestMynd = new Image();
lestMynd.src = 'Img/annad/lest.png'
let jbHausMynd = new Image();
jbHausMynd.src = 'Img/JB/Johann1.png'
let jbBody = new Image();
jbBody.src = 'Img/JB/lever.png'
let jbTakaStong = new Image();
jbTakaStong.src = 'Img/JB/pull_lever.png'
let jbBrodirMynd = new Image();
jbBrodirMynd.src = 'Img/folk/einn_kall_gleraugu.png'
let kettirMynd = new Image();
kettirMynd.src = 'Img/annad/kettir.png'
let leikskoliMynd = new Image();
leikskoliMynd.src = 'Img/annad/leikskoli.png'
let barnaspitaliMynd = new Image();
barnaspitaliMynd.src = 'Img/annad/barnaspitali.png'
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
let sokratesMynd = new Image();
sokratesMynd.src = 'Img/folk/sokrates.png'
let platonMynd = new Image();
platonMynd.src = 'Img/folk/platon.png'
let tveirLaeknarMynd = new Image();
tveirLaeknarMynd.src = 'Img/folk/2_laeknar.png'
let sjo_gamalt_folkMynd = new Image();
sjo_gamalt_folkMynd.src = 'Img/folk/7_gamalt_folk.png'
let trir_unglingarMynd = new Image();
trir_unglingarMynd.src = 'Img/folk/3_unglingar.png'
let slaemur_borgariMynd = new Image();
slaemur_borgariMynd.src = 'Img/folk/slaemur_borgari.png'
let godur_borgariMynd = new Image();
godur_borgariMynd.src = 'Img/folk/godur_borgari.png'
let versti_ovinurMynd = new Image();
versti_ovinurMynd.src = 'Img/folk/versti_ovinur.png'
let bindu_sig_viljandiMynd = new Image();
bindu_sig_viljandiMynd.src = 'Img/folk/bindu_sig_viljandi.png'





document.getElementById("pullLever").addEventListener('click', takki1);
document.getElementById("noPullLever").addEventListener('click',takki2);
document.getElementById("næstaBorð").addEventListener("click", switchToNextLevel);
document.getElementById("takkar");
document.getElementById("refresh");
document.getElementById("byrja_uppa_nytt");


class element{
    constructor (options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.image = options.image;
        this.title = options.title;
        this.numPeople = options.numPeople;
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
    y: 300,
    width: 300,
    height: 175,
    numPeople: 16,
    image: bekkurYZMynd
})
const bekkurX = new element({
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 40,
    image: bekkurXMynd
})
const leikskoli = new element({
    x: 800,
    y: 40,
    width: 400,
    height: 233,
    numPeople: 20,
    image: leikskoliMynd
})
const barnaspitali = new element({
    x: 800,
    y: 40,
    width: 400,
    height: 234,
    numPeople: 50,
    image: barnaspitaliMynd
})
const jbBorn = new element({
    x: 800,
    y: 320,
    width: 300,
    height: 175,
    numPeople: 2,
    image: jbBornMynd
})
const jbBrodir = new element({
    x: 800,
    y: 320,
    width: 300,
    height: 175,
    numPeople: 1,
    image: jbBrodirMynd
})
const kettir = new element({
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 2,
    image: kettirMynd
})
const sokrates = new element({
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 1,
    image: sokratesMynd
})
const platon = new element({
    x: 800,
    y: 320,
    width: 300,
    height: 175,
    numPeople: 1,
    image: platonMynd
})
const tveirLaeknar = new element({
    x: 800,
    y: 320,
    width: 300,
    height: 175,
    numPeople: 2,
    image: tveirLaeknarMynd
})
const sjo_gamalt_folk = new element({
    x: 800,
    y: 320,
    width: 400,
    height: 233,
    numPeople: 7,
    image: sjo_gamalt_folkMynd
})
const trir_unglingar = new element({
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 3,
    image: trir_unglingarMynd
})
const slaemur_borgari = new element({
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 2,
    image: slaemur_borgariMynd
})
const godur_borgari = new element({
    x: 800,
    y: 320,
    width: 300,
    height: 175,
    numPeople: 1,
    image: godur_borgariMynd
})
const versti_ovinur = new element({
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 1,
    image: versti_ovinurMynd
})
const fimmBunduViljandi = new element({
    x: 850,
    y: 80,
    width: 300,
    height: 175,
    numPeople: 5,
    image: bindu_sig_viljandiMynd
})
const tomt = new element({
    width: 200,
    numPeople: 0
})
const venjubundinn = new element({
    x: 800,
    y: 320,
    width: 300,
    height: 175,
    numPeople: 1,
    image: einKallVenjuMynd
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
    boardUpp:"Ó nei, lestin stefnir í átt að tveimur bekkjum, X-bekk og ZY-bekk. Þú getur bjargað ZY-bekknum á kostnað X-bekksins. Hvað mun Jóhann gera?"
})
const Level3 = new LevelBoard({
    boardLevel: 3,
    Val1: leikskoli,
    Val2: jbBorn,
    boardUpp:"Ó nei, lestin stefnir í átt að börnunum þínum Jóhann. Þú getur bjargað þeim með því að taka í stöngina, en þá keyrir lestin yfir 5 ára deild leikskólans Ævintýraborg við Nauthólsveg. Hvað gerir þú?"
})
const Level4 = new LevelBoard({
    boardLevel: 4,
    Val1: kettir,
    Val2: jbBrodir,
    boardUpp:'Ó nei, lestin stefnir í átt að þínum elskulega bróðir. Þú getur bjargað honum, en þá keyrir lestin yfir krúttlegu kettina þína. Hvað ætlar þú að gera Jóhann?'
})
const Level5 = new LevelBoard({
    boardLevel: 5,
    Val1: sokrates,
    Val2: platon,
    boardUpp:'Jæja Jóhann, Plató og Sókrates eru bundnir við lestateinana. Lestin stefnir í átt að Sókrates en þú getur bjargað honum á kostnað Plató. Hvor heimspekingurinn er þér meira virði?'
})
const Level6 = new LevelBoard({
    boardLevel: 6,
    Val1: barnaspitali,
    Val2: tveirLaeknar,
    boardUpp:'Ó nei, lestin stefnir í átt að heimsins merkustu læknum. Þeir eru hársbreidd frá því að finna lækningu við Malaríu og Krabbamein. Hins vegar, ef þú bjargar þeim þá keyrir lestin yfir alla sjúklinga Barnaspítala Hringsins. Hvað mun Jóhann gera?'
})
const Level7 = new LevelBoard({
    boardLevel: 7,
    Val1: trir_unglingar,
    Val2: sjo_gamalt_folk,
    boardUpp: 'Ó nei, lestin stefnir í átt að sjö gamalmennum sem struku af Hrafnistu. Væri best að refsa þeim, eða þremur unglingum sem hata alla heimspekikennara?'
})
const Level8 = new LevelBoard({
    boardLevel: 8,
    Val1: slaemur_borgari,
    Val2: godur_borgari,
    boardUpp: 'Ó nei, lestin stefnir í átt að fyrirmyndar ríkisborgara sem gengur um götur borgarinnar og tínir upp hundaskít eftir aðra. Þú getur bjargað honum en þá keyrir lestin yfir slæman ríkisborgara sem tínir aldrei upp kúkinn eftir hundinn sinn. Hvað ætlar þú að gera Jóhann?'
})
const Level9 = new LevelBoard({
    boardLevel: 9,
    Val1: versti_ovinur,
    Val2: tomt,
    boardUpp: 'Þetta er nú meira ruglið! Lestin stefnir í átt að engu. Hins vegar, getur þú tekið í stöngina og látið lestina keyra yfir þinn versta óvin og enginn mun vita af því. Hvað mun Jóhann gera?'
})
const Level10 = new LevelBoard({
    boardLevel: 10,
    Val1: fimmBunduViljandi,
    Val2: venjubundinn,
    boardUpp: 'Ó nei, lestin stefnir í átt að einstaklingi sem er bundinn við lestateinana gegn sínum vilja. Viltu bjarga honum eða fimm einstaklingum sem bundu sig viljandi við lestateinana? Jóhann, hvað ætlar þú að gera?'
})
const Level11 = new LevelBoard({
    boardLevel: 11,
    Val1: tomt,
    Val2: tomt,
    boardUpp: ''
})



var levelDeck = [Level1,Level2,Level3,Level4,Level5,Level6,Level7,Level8,Level9,Level10,Level11];

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
    ctx.font = "bold 24px Monospace";
    ctx.fillStyle = "grey"
    ctx.fillText(`Borð : ${Level}`, c.width/2-40, 50);
}

function keyraYfir(Level){
    tempVal1 = Level.boardVal1;
    tempVal2 = Level.boardVal2;
    // console.log(Level.boardVal1);
    console.log(`score:${score}`);
    if(boolTakaíStöng){
        // score += tempVal1.numPeople;
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

function startLevel(LevelToPlay){
    currentLevel = LevelToPlay;
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
function takki1(){
    boolTakaíStöng=true;
    score += currentLevel.boardVal1.numPeople;
}
function takki2(){
    boolGeraEkkert=true;
    score += currentLevel.boardVal2.numPeople;
}

function leikLokid(){
    if(levelCounter>9){
        ctx.clearRect(0,0,c.width,c.height)
        ctx.font = "60px Courier New";
        ctx.fillStyle = "#000000";
        ctx.fillText("LEIK LOKIÐ", c.width / 2-190, c.height/2);

        ctx.font = "38px Courier New";
        ctx.fillText(`Þú hefur ollið ${score} dauðsföllum!`, c.width/2-300,c.height/2+150);

        $("#takkar").hide();
        $("#refresh").show();
        $("#byrja_uppa_nytt").show();

    }
}

function loop(){
    //draw level
    startLevel(levelDeck[levelCounter]);
    leikLokid();
    //hreyfa lest

    // ctx.drawImage(runningFrames.img, JB.x,JB.y,JB.width,JB.height);
    window.requestAnimationFrame(loop);
}
loop();