
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 150;
var playerMoney = 10;
console.log(playerHealth, playerMoney);
var enemyNames = ["Roboto", "Amy Android", "Robo Trumble"];

var enemyHealth = 10;
var enemyAttack = 10;

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt(
      'Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    ); // ask player if they'd like to fight or run

    if (promptFight === "skip" || promptFight === "SKIP") {
      // if player picks "skip" confirm and then stop the loop

      var confirmSkip = window.confirm(
        "Are you sure you'd like to skip a round? 10 points will be deducted!"
      ); // confirm player wants to skip

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");

        playerMoney = playerMoney - 10; // subtract money from playerMoney for skipping
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    enemyHealth = enemyHealth - playerAttack; // remove enemy's health by subtracting the amount set in the playerAttack variable
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;
      break; // leave while() loop since enemy is dead
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } // end of while loop
}; // end of fight function

// fight(); commented out the function call
var startGame = function () {
  //ou need to call startGame() first to get the ball rolling.
  
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      alert(enemyNames[i] + " has arrived to fight " + playerName); // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it

      var pickedEnemyName = enemyNames[i]; // pick new enemy to fight based on the index of the enemyNames array

      enemyHealth = 50; // reset enemyHealth before starting new fight

      // use debugger to pause script from running and check what's going on at that moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // if we're not at the last enemy in the array no matter how long the array is

        var storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        ); // ask if player wants to use the store before next round

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    var pickedEnemyName = enemyNames[i]; // put names in the index of the enemy
    enemyHealth = 50;
    fight(enemyNames[i]);
  }
  endGame();
};

var shop = function () {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
    case "Refill":
  if (playerMoney >= 7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");

    // increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
  }
  else {
    window.alert("You don't have enough money!");
  }

  break;
case "upgrade":
case "UPGRADE":
case "Upgrade":
  if (playerMoney >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");

   // increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
  }
  else {
    window.alert("You don't have enough money!");
  }

  break;

  case "LEAVE": // new case
  case "leave":
  case "Leave":
    window.alert("Leaving the store.");

    break;

  default:
    window.alert("You did not pick a valid option. Try again.");
    shop();  //put them back to start of shop to try to enter an option again
    break;

  }
};

// function to end the entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have the score of  " +
        playerMoney +
        " ."
    );
  } else {
    window.alert(" You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame();
