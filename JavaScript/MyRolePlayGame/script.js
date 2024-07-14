let level = 1; //nivel del personaje
let hp = 50; // Saslud del personaje
let gold = 50;
let currentWeapon = 0; // arma equipada (inicial)
// let strong;
// let defense;
let weaponPrice = 30; // precio de un arma
let hpPrice = 20; // precio curar
let healthRecover = 10; // cantidad de cura
let currentEnemie = 0;
let enemieHp = 50;
let multiplier = 10; //multiplicador de daño

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const weaponText = document.querySelector("#weaponText");
const titleText = document.querySelector("#titleText");
const levelText = document.querySelector("#levelText");
const hpText = document.querySelector("#hpText");
const goldText = document.querySelector("#goldText");
const text = document.querySelector("#text");
const weapons = [
    {
        name: "Caña de Pescar",
        level: 0,
        //Fuerza? Defensa?

    },
    {
        name: "Espada de Marinero",
        level: 1,
        text: "Has comprado una Espada de Marinero por 50 monedas. Ahora puedes enfrentarte mejor a los peligros del mar."
    },
    {
        name: "Escudo de coraza de tortuga",
        level: 2,
        text: "Has comprado un Escudo de Coraza de Tortuga por 30 monedas. Ahora estás mejor protegido contra los ataques enemigos."
    }
]

const enemies = [
    {
        name: "Pirata Fantasma",
        level: 1,
        "weapon level": 0

    },
    {
        name: "Tiburón gigante",
        level: 2,
        "weapon level": 1
    }
]
const locations = [
    {
        name: "Tienda", 
        "button text": ["Comprar Ron\n(20 Oro y +10 Salud)", `Comprar ${weapons[currentWeapon + 1].name} \n(30 Oro)`, "Volver atras"],
        "button select": [hpRecover, buyWeapon, goBack],
        text: "Has decidido visitar la tienda del puerto. Aquí puedes comprar suministros y vender tus hallazgos."
        

    },
    {
        name: "Profundidades del oceano", 
        "button text": ["Enfrentar a un Pirata Fantasma", "Enfrentar a un Tiburón Gigante", "¡Huir despavorido!"],
        "button select": [goFight, goFight, goBack],
        text: "Has decidido adentrarte en las profundidades. A lo lejos ves unos ojos brillar, pero detras de ti sientes la presencia de un ser extraño."
      
    },{
        name: "The Legend of the Deep Sea", 
        "button text": ["Ir a la Tienda", "Ir a la Mazmorra", "Salir del Juego"],
        "button select": [goTienda, goMazmorra, goBack],
        text: "Has dedicido volver atrás. A veces una retirada a tiempo es una victoria."
    },{
        name: "Combate",
        "button text": ["Atacar", "Protegerse", "Huir despavorido"],
        "button select": [attack, defend, goBack],
        text: `Has decidido luchar contra ${enemies[currentEnemie].name}.`
    }, {
        name: "Vencedor",
        "button text": ["Volver", "Volver", "Volver"],
        "button select": [goBack, goBack, goBack],
        text: "Has vencido a tu enemigo y has encontrado un tesoro. Ademas subes de nivel!!"
    }
    

];

button1.onclick = goTienda;
button2.onclick = goMazmorra;
button3.onclick = goOut;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button select"][0];
    button2.onclick = location["button select"][1];
    button3.onclick = location["button select"][2];
    text.innerText = location.text;
    titleText.innerText = location.name;
}
function goTienda() {
    update(locations[0]);
}
function goMazmorra() {
    update(locations[1]);
}
function goOut() {
//salir del juego
}
function buyWeapon() {
    if (currentWeapon === 2) {
        text.innerText = "¡Ya has comprado todas las Armas!"
    } else if (gold >= weaponPrice) {
        gold -= weaponPrice;
        goldText.innerText = gold;
        currentWeapon ++;
        text.innerText = `Acabas de comprar ${weapons[currentWeapon].name}.`
        weaponText.innerText = weapons[currentWeapon].name;
    } else {
        text.innerText = `No tienes suficiente oro para comprar ese arma.`;
    }
}
function hpRecover() {
    if (gold >= hpPrice) {
        hp += healthRecover;
        gold -= hpPrice;
        hpText.innerText = hp;
        goldText.innerText = gold;
        text.innerText = "Recuperaste algo de salud.";
    } else {
        text.innerText = "No tienes suficiente oro para recuperar salud.";
    }

}
function goBack() {
    update(locations[2]);
}
function goFight() {
   update(locations[3])
}
function battle(enemie) {
    // button1.onclick =
}
function win() {
    update(locations[4])
}
function attack() {
    enemieHp -=  weapons[currentWeapon].level*Math.floor(Math.random()*10);
    enemieHp -= level*Math.floor(Math.random()*10);
    hp -= enemies[currentEnemie]["weapon level"]*Math.floor(Math.random()*5);
    hp -= enemies[currentEnemie].level*Math.floor(Math.random()*5);
    hpText.innerText = hp;
    console.log("HP del enemigo: " + enemieHp + "\n" + "HP del Personaje: " + hp + "\nEnemigo numero: " + currentEnemie);

    if (hp <= 0) {
        goBack()
        gold -= 5;
        goldText.innerText = gold;
        text.innerText = `Te has desmayado y apareciste en la entrada de la mazmorra, perdiste 5 monedas de oro`;
        hp = 50;
        hpText = hp;
        currentEnemie = 0;
        enemieHp = 50;

    } else if (enemieHp <= 0) {
        win()
        gold += 10+Math.floor(Math.random()*10);
        goldText.innerText = gold;
        level++;
        levelText.innerText = level;
        console.log("gold = " + gold);   
        currentEnemie = 0;
        enemieHp = 50;     
    }
}
function defend() {
    hp -= enemies[currentEnemie]["weapon level"]*Math.floor(Math.random()*2);
    hp -= enemies[currentEnemie].level*Math.floor(Math.random()*2);
    hpText.innerText = hp;
    console.log("HP del enemigo: " + enemieHp + "\n" + "HP del Personaje: " + hp + "\nEnemigo numero: " + currentEnemie);
    if (hp <= 0) {
        goBack()
        gold -= 5;
        goldText.innerText = gold;
        text.innerText = `Te has desmayado y apareciste en la entrada de la mazmorra, perdiste 5 monedas de oro`;
        hp = 50;
        hpText = hp;
        currentEnemie = 0;
        enemieHp = 50;
    }
}
