
//$(document).ready();
$(document).ready(function() {
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
            if(this.healthPoints <= 0){
                //you are dead
                //game over
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            target.takeDamageBot(damage);
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
            if(this.healthPoints <= 0){
                //you are dead
                //game over
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            target.takeDamageBot(damage);
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
            if(this.healthPoints <= 0){
                //you are dead
                //game over
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            target.takeDamageBot(damage);
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
            if(this.healthPoints <= 0){
                //you are dead
                //game over
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            target.takeDamageBot(damage);
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
            }
        },
        takeDamageBot: function(damage){
            //take damage as a bot
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0){
                //you've defeated the bot
                //select new enemy or victory
            }
        },
        attack: function(target){
            this.attackPoints = this.attackPoints + this.attackPower;
            var damage = this.attackPoints;
            //deal damage to target
            target.takeDamageBot(damage);
            //receive damage from target
            this.getHitMain(target.counterAttack);
        }

    };
    var hero;
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

    function selectHero(choice){
        // alert("here");
        hero = choice;
        var choiceName = '#' + hero.name + 'Select';
        // console.log(choiceName)
        $(choiceName).attr("class", "chosen col-md-2");
        //hide divs other than your hero
        $(".classSelect").hide();
        $(".chosen").show();
        $("#hero").text("Your Chosen Hero!");
        $(".heroHP").text("HP: " + choice.healthPoints);
    };


    

});
