
//$(document).ready();
$(document).ready(function() {
    //start with hidden enemies and attack
    $(".EnemyRow").hide();
    $("#attack").hide();
    //start with character objects

    var class1 = {
        name: 'class1',
        healthPoints: 100,
        attackPower: 7,
        counterAttack: 12,
        attackPoints: 7,
        
        // How your character deals with damage
        getHitMain: function(damage){
            this.healthPoints = this.healthPoints - damage;
            $(".heroHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you are dead
                //game over
                alert("You Lose! Refresh to try again.");
                //reset
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            $(".enemyHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
                defeatedEnemies.push(this.name);
                //if array length reaches 4 you win
                if(defeatedEnemies.length === 4){
                    //Win condition
                    alert("You Win!");
                    $("#hero").text("Your Victorious Hero!");
                    $(".EnemyRow").hide();
                    $("#attack").hide();
                    return "end";
                } else{
                    //reset enemy selection
                    var choiceName = '#' + currentEnemy.name + 'Enemy';
                    $(choiceName).attr("class", "defeatedEnemy col-md-2");
                    $(".enemySelect").show();
                    $(".defeatedEnemy").hide();
                    $(".enemyHP").hide();
                    $("#EnemyTitle").text("Select Next Enemy!");
                    $("#attack").hide();
                }
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            var result = target.takeDamageBot(damage);
            if(result === "end") {return;}
            //receive damage from target
            this.getHitMain(target.counterAttack);
        }

    };

    var class2 = {
        name: 'class2',
        healthPoints: 150,
        attackPower: 6,
        counterAttack: 8,
        attackPoints: 6,
        
        // How your character deals with damage
        getHitMain: function(damage){
            this.healthPoints = this.healthPoints - damage;
            $(".heroHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you are dead
                //game over
                alert("You Lose! Refresh to try again.");
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            $(".enemyHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
                defeatedEnemies.push(this.name);
                //if array length reaches 4 you win
                if(defeatedEnemies.length === 4){
                    //Win condition
                    alert("You Win!");
                    $("#hero").text("Your Victorious Hero!");
                    $(".EnemyRow").hide();
                    $("#attack").hide();
                    return "end";
                } else{
                    //reset enemy selection
                    var choiceName = '#' + currentEnemy.name + 'Enemy';
                    $(choiceName).attr("class", "defeatedEnemy col-md-2");
                    $(".enemySelect").show();
                    $(".defeatedEnemy").hide();
                    $(".enemyHP").hide();
                    $("#EnemyTitle").text("Select Next Enemy!");
                    $("#attack").hide();
                }
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            var result = target.takeDamageBot(damage);
            if(result === "end") {return;}
            //receive damage from target
            this.getHitMain(target.counterAttack);
        }

    };

    var class3 = {
        name: 'class3',
        healthPoints: 90,
        attackPower: 9,
        counterAttack: 15,
        attackPoints: 8,
        
        // How your character deals with damage
        getHitMain: function(damage){
            this.healthPoints = this.healthPoints - damage;
            $(".heroHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you are dead
                //game over
                alert("You Lose! Refresh to try again.");
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            $(".enemyHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
                defeatedEnemies.push(this.name);
                //if array length reaches 4 you win
                if(defeatedEnemies.length === 4){
                    //Win condition
                    alert("You Win!");
                    $("#hero").text("Your Victorious Hero!");
                    $(".EnemyRow").hide();
                    $("#attack").hide();
                    return "end";
                } else{
                    //reset enemy selection
                    var choiceName = '#' + currentEnemy.name + 'Enemy';
                    $(choiceName).attr("class", "defeatedEnemy col-md-2");
                    $(".enemySelect").show();
                    $(".defeatedEnemy").hide();
                    $(".enemyHP").hide();
                    $("#EnemyTitle").text("Select Next Enemy!");
                    $("#attack").hide();
                }
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            var result = target.takeDamageBot(damage);
            if(result === "end") {return;}
            //receive damage from target
            this.getHitMain(target.counterAttack);
        }

    };

    var class4 = {
        name: 'class4',
        healthPoints: 70,
        attackPower: 17,
        counterAttack: 19,
        attackPoints: 18,
        
        // How your character deals with damage
        getHitMain: function(damage){
            this.healthPoints = this.healthPoints - damage;
            $(".heroHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you are dead
                //game over
                alert("You Lose! Refresh to try again.");
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            $(".enemyHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
                defeatedEnemies.push(this.name);
                //if array length reaches 4 you win
                if(defeatedEnemies.length === 4){
                    //Win condition
                    alert("You Win!");
                    $("#hero").text("Your Victorious Hero!");
                    $(".EnemyRow").hide();
                    $("#attack").hide();
                    return "end";
                } else{
                    //reset enemy selection
                    var choiceName = '#' + currentEnemy.name + 'Enemy';
                    $(choiceName).attr("class", "defeatedEnemy col-md-2");
                    $(".enemySelect").show();
                    $(".defeatedEnemy").hide();
                    $(".enemyHP").hide();
                    $("#EnemyTitle").text("Select Next Enemy!");
                    $("#attack").hide();
                }
                

            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            var result = target.takeDamageBot(damage);
            if(result === "end") {return;}
            //receive damage from target
            this.getHitMain(target.counterAttack);
        }

    };

    var class5 = {
        name: 'class5',
        healthPoints: 190,
        attackPower: 5,
        counterAttack: 5,
        attackPoints: 10,
        
        // How your character deals with damage
        getHitMain: function(damage){
            this.healthPoints = this.healthPoints - damage;
            $(".heroHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you are dead
                //game over
                alert("You Lose! Refresh to try again.");
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            $(".enemyHP").text("HP: " + this.healthPoints);
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
                defeatedEnemies.push(this.name);
                //if array length reaches 4 you win
                if(defeatedEnemies.length === 4){
                    //Win condition
                    alert("You Win!");
                    $("#hero").text("Your Victorious Hero!");
                    $(".EnemyRow").hide();
                    $("#attack").hide();
                    return "end";
                } else{
                    //reset enemy selection
                    var choiceName = '#' + currentEnemy.name + 'Enemy';
                    $(choiceName).attr("class", "defeatedEnemy col-md-2");
                    $(".enemySelect").show();
                    $(".defeatedEnemy").hide();
                    $(".enemyHP").hide();
                    $("#EnemyTitle").text("Select Next Enemy!");
                    $("#attack").hide();
                }
                
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            var result = target.takeDamageBot(damage);
            if(result === "end") {return;}
            //receive damage from target
            this.getHitMain(target.counterAttack);
        }

    };
    var hero;
    var currentEnemy;
    var defeatedEnemies = [];
    //Select Hero area
    $("#class1Select").on("click", function(){
        selectHero(class1);
    });
    $("#class2Select").on("click", function(){
        selectHero(class2);
    });
    $("#class3Select").on("click", function(){
        selectHero(class3);
    });
    $("#class4Select").on("click", function(){
        selectHero(class4);
    });
    $("#class5Select").on("click", function(){
        selectHero(class5);
    });

    //Select Enemy
    $("#class1Enemy").on("click", function(){
        selectEnemy(class1);
    });
    $("#class2Enemy").on("click", function(){
        selectEnemy(class2);
    });
    $("#class3Enemy").on("click", function(){
        selectEnemy(class3);
    });
    $("#class4Enemy").on("click", function(){
        selectEnemy(class4);
    });
    $("#class5Enemy").on("click", function(){
        selectEnemy(class5);
    });

    function selectHero(choice){
        hero = choice;
        var choiceName = '#' + hero.name + 'Select';
        var enemySelf = '#' + hero.name + 'Enemy';
        $(choiceName).attr("class", "chosen col-md-2");
        //hide divs other than your hero
        $(".classSelect").hide();
        //hide enemy self
        // $(enemySelf).hide();
        $(enemySelf).attr("class", "defeatedEnemy col-md-2");
        $(".defeatedEnemy").hide();
        $(".chosen").show();
        $("#hero").text("Your Chosen Hero!");
        $(".heroHP").text("HP: " + choice.healthPoints);
        $(".EnemyRow").show();
    };

    function selectEnemy(choice){
        currentEnemy = choice;
        var choiceName = '#' + currentEnemy.name + 'Enemy';
        $(choiceName).attr("class", "chosenEnemy col-md-2");
        //hide divs other than your hero
        $(".enemySelect").hide();
        $(".chosenEnemy").show();
        $("#EnemyTitle").text("Your Chosen Enemy!");
        $(".enemyHP").show();
        $(".enemyHP").text("HP: " + choice.healthPoints);
        $("#attack").show();
    };

    function attackButton(hero, enemy){
        //main attack button 
        //hero attacks enemy
        hero.attack(enemy);
        
    };

    $("#attack").on("click", function(){
        attackButton(hero, currentEnemy);
    });

    

});
