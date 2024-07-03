let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
]
const locations = [ //creating objects in the location array
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"], //properties with more than 1 word should be in quotes
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, easterEgg],
    text: "The monster screams Arg! as it dies. You gain experience points and find gold."
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  {
    name: "win",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;"
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goTown],
    text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  monsterStats.style.display = "none";
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerHTML = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeaponIndex < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeaponIndex = inventory.shift();
    text.innerText = "You sold a " + CurrentWeaponIndex + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
 fighting = 0; // index of slime in the monsters array
 goFight(); //call the function goFight
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}

function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health; // we are settting a property of an opject nested on the monsters array.
  monsterStats.style.display = "block"; // change a property of our css. using style to link with the CSS sheet and the property that we want to change, in this case "display: block;".
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth;
}

function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks."; // change the text selecting  name of the monster that is currently fighting.
  text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + "."; // add information about the current weapon.
  health -= getMonsterAttackValue(monsters[fighting].level); // substract health to the character substracting the level of the monster.
 /*  getMonsterAttackValue(monsters[fighting].level); //This sets health equal to health minus the return value of the getMonsterAttackValue function, and passes the level of the monster as an argument. */
 if (isMonsterHit()) { 
 monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;// resta salud al monstruo siendo el poder del arma actual + un numero aleatorio comprendido entre 1 y el valor actual de la variable xp. 
 text.innerText += " You miss."
 };
  healthText.innerText = health; // actualiza el texto.
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    lose(); 
  } else if (monsterHealth <= 0) {
  if(fighting === 2) {
    winGame();
  } else { 
    defeatMonster()
  }
}
  if (Math.random() <= .1 && inventory.length !== 1) { //  a chance that the player's weapon breaks. // Use the logical AND operator && to add a second condition to your if statement. The player's weapon should only break if inventory.length does not equal (!==) one.
    text.innerText += " Your " + inventory.pop() +  " breaks."
    currentWeaponIndex--;
  }
}
function getMonsterAttackValue(level) {
  const hit = (level * 5) - (Math.floor(Math.random() * xp)) // This will set the monster's attack to five times their level minus a random number between 0 and the player's xp.
  console.log(hit);
  return hit > 0 ? hit : 0;

 /*  return hit;  //return the value of hit at the end of the function. */
  return hit > 0 ? hit : 0 // This is a terneary operator, is like a one line if-else statement. here returns hit if hit is greater than 0, or returns 0 if it is not.
 }
 function isMonsterHit() {
  return Math.random() > .2 || health < 20;  //The player should hit if either Math.random() > .2 or if the player's health is less than 20.
}
function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster() {
  gold += Math.floor(monsters[fighting].level * 6.7); // Multiplica el nivel del mosntruo por 6.7 y luego redondea el resultado, se añade a gold.
  xp += monsters[fighting].level; // Suma el nivel del monstruo a la variable xp.
  goldText.innerText = gold;// update the text.
  xpText.innerText = xp; // update the text.
  update(locations[4]); // Call the function update with locations[4] as an argunment.
  }

  function lose() {
    update(locations[5]);
  }
  function winGame() {
    update(locations[6]);
  }
  function restart() {
    xp = 0;
    health = 100;
    gold = 50;
    currentWeaponIndex= 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
  }
  function easterEgg() {
    update(locations[7]);

  }
  function pick(guess) {
    const numbers = [];
    while(numbers.length < 10) {
      numbers.push(Math.floor(Math.random() * 11)) // push a random number between 0 and 10 to the end of the numbers array. 
    };
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for(let i = 0; i < 10; i++) {
      text.innerText += numbers[i] + "\n" // Add the number at index i of the numbers array, using numbers[i]. Then add a new line, using the escape sequence you used earlier.
    }
    if(numbers.includes(guess)) { // The .includes() method determines if an array contains an element and will return either true or false. the .includes() method to check if the array contains the guess.
      text.innerText += "Right! You win 20 gold!";
      gold += 20;
      goldText.innerText = gold;
    } else {
      text.innerText += "Wrong! You lose 10 health!";
      health -= 10;
      healthText.innerText = health;
    }
  }
  function pickTwo() {
    pick(2);
  }
  function pickEight() {
    pick(8);
  }