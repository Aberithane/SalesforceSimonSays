({
    //Called after a sequence is completed to add a new number onto it
    playSimon : function(component, event) {
        let sequenceString;
        //Random Number Generator
        const random = (min = 0, max = 4) => {
            let num = Math.random() * (max - min) + min;
            return Math.round(num);
        };
        
        let simonSequence = component.get("v.simonSequence");
        
        //Logic for adding another number at the end of the sequence
        simonSequence.push(random(1,4));
        component.set("v.simonSequence", simonSequence);
        
        sequenceString = "" + component.get("v.simonSequence");
        component.set("v.showSequence", sequenceString);
        
        //calls a function to start parsing through the color sequence array 
        this.parseColors(component, event);
        
    },
    
    //Get the inital number and allow player input
    Init : function(component, event){
        let sequenceString;
        //Random Number Generator
        const random = (min = 0, max = 4) => {
            let num = Math.random() * (max - min) + min;
            return Math.round(num);
        };
        
        //Adding on the random number
        component.set("v.simonSequence", [random(1,4)]);
        sequenceString = "" + component.get("v.simonSequence");
        component.set("v.showSequence", sequenceString);
        component.set("v.inputWaitTimer", false);
        
        document.getElementById("display-yellow").style.color="gold";
        document.getElementById("display-red").style.color="red";
        document.getElementById("display-blue").style.color="blue";
        document.getElementById("display-green").style.color="green";
        
        this.parseColors(component, event);
        
    },
    
    //The set of the following color related methods are to check player input against an array of the color sequence
    handleClick_yellow : function(component, event) {
        // yellow = 1			
        this.playSound(1);    
        if (component.get("v.simonSequence")[component.get("v.progressPosition")] == 1 /* Yellow*/)
        {
            // if it is the last number in the sequence, call playSimon and add a new number onto the end, and return player to the 
            //first position of the sequence
            if(component.get("v.simonSequence").length == component.get("v.progressPosition")+1){
                this.playSimon(component, event);
                component.set("v.progressPosition",0);
            }
            else{
                component.set("v.progressPosition", component.get("v.progressPosition") + 1);
            }
        }
        else {
            // If incorrect input is given turn game off
            component.set("v.progressPosition", 0);
            alert("Incorrect Input");
            document.getElementById("display-yellow").style.color="black";
            document.getElementById("display-red").style.color="black";
            document.getElementById("display-blue").style.color="black";
            document.getElementById("display-green").style.color="black";
            component.set("v.inputWaitTimer", true);
        }
        
        
    },
    
    handleClick_red : function(component, event) {
        // red = 2  	
        this.playSound(2);    
        if (component.get("v.simonSequence")[component.get("v.progressPosition")] == 2 /* Red */)
        {
            if(component.get("v.simonSequence").length == component.get("v.progressPosition")+1){
                this.playSimon(component, event);
                component.set("v.progressPosition",0);
                
            }
            else{
                component.set("v.progressPosition", component.get("v.progressPosition") + 1);
            }
        }
        else {
            component.set("v.progressPosition", 0);
            alert("Incorrect Input");
            document.getElementById("display-yellow").style.color="black";
            document.getElementById("display-red").style.color="black";
            document.getElementById("display-blue").style.color="black";
            document.getElementById("display-green").style.color="black";
            component.set("v.inputWaitTimer", true);
        }
    },
    
    handleClick_blue : function(component, event) {
        // blue = 3      
        this.playSound(3);    
        if (component.get("v.simonSequence")[component.get("v.progressPosition")] == 3 /* Blue */)
        {
            if(component.get("v.simonSequence").length == component.get("v.progressPosition")+1){
                this.playSimon(component, event);
                component.set("v.progressPosition",0);
                
            }
            else{
                component.set("v.progressPosition", component.get("v.progressPosition") + 1);
                
            }
        }
        else {
            component.set("v.progressPosition", 0);
            alert("Incorrect Input");
            document.getElementById("display-yellow").style.color="black";
            document.getElementById("display-red").style.color="black";
            document.getElementById("display-blue").style.color="black";
            document.getElementById("display-green").style.color="black";
            component.set("v.inputWaitTimer", true);
        }
    },
    
    handleClick_green : function(component, event) {
        // green = 4
		this.playSound(4);       
        if (component.get("v.simonSequence")[component.get("v.progressPosition")] == 4 /* Green */)
        {
            if(component.get("v.simonSequence").length == component.get("v.progressPosition")+1){
                this.playSimon(component, event);
                component.set("v.progressPosition",0);
                
            }
            else{
                component.set("v.progressPosition", component.get("v.progressPosition") + 1);
            }
        }
        else {
            component.set("v.progressPosition", 0);
            alert("Incorrect Input");
            document.getElementById("display-yellow").style.color="black";
            document.getElementById("display-red").style.color="black";
            document.getElementById("display-blue").style.color="black";
            document.getElementById("display-green").style.color="black";
            component.set("v.inputWaitTimer", true);
        }
    },
    
    //For showing a debug section
    showDebugClick : function(component,event) {
        if (component.get("v.showDebug"))
        {
            component.set("v.showDebug", false);
        }
        else
        {
            component.set("v.showDebug", true);
        }
    },
    
    //purpose is to set up the parsing of the color sequence and pass it to a function that has a timer functionality
    parseColors : function(component, event) {
        component.set("v.inputWaitTimer",true);
        
        var sequence = component.get("v.simonSequence").map((x) => x);
        sequence.reverse();       
        var parserLength = sequence.length; 
        var context = this;
        this.colorPreview(component , event , parserLength);     
        this.parseColorsRepeater(context, parserLength, component, sequence);
    },
    
    //purpose is to utilize the Window setTimeout() method to give time for the program to be able to show the sequence, calling itself
    //as it parses through a reverse of the sequence
    parseColorsRepeater : function(helper, parser, component, sequence){
        window.setTimeout(function(){
            parser--;
            if(parser>=0){
                helper.parseColorsBlack(helper,parser, component, sequence);
                var urlSound = $A.get('$Resource.Beep_C');
                
                if(sequence[parser] == 1){
                    document.getElementById("display-yellow").style.color="PaleGoldenRod";
                    urlSound = $A.get('$Resource.Beep_C');
                    
                }
                else if(sequence[parser] == 2){
                    document.getElementById("display-red").style.color="Tomato";
                    urlSound = $A.get('$Resource.Beep_D');
                }
                    else if(sequence[parser] == 3){
                        document.getElementById("display-blue").style.color="DeepSkyBlue";
                        urlSound = $A.get('$Resource.Beep_F');
                    }
                        else if(sequence[parser] == 4){
                            document.getElementById("display-green").style.color="PaleGreen";
                            urlSound = $A.get('$Resource.Beep_G');
                        }
                
                var beepsound = new Audio(urlSound);   
                beepsound.play();	  
            }
            else
            {
                document.getElementById("display-yellow").style.color="gold";
                document.getElementById("display-red").style.color="red";
                document.getElementById("display-blue").style.color="blue";
                document.getElementById("display-green").style.color="green";
                component.set("v.inputWaitTimer",false);   
            }
            
            
            
        },750);
    },
    
    //purpose is to add a spacer of black between showing the sequence's colors, so that if there are repeats it's easy to distinguish
    parseColorsBlack : function(helper, parser, component, sequence){
        window.setTimeout(function(){
            helper.parseColorsRepeater(helper,parser, component, sequence);
            document.getElementById("display-yellow").style.color="gold";
            document.getElementById("display-red").style.color="red";
            document.getElementById("display-blue").style.color="blue";
            document.getElementById("display-green").style.color="green";
            
        },750);
    },
    
    //purpose is to parse through the four colors and set the prompter.
    colorPreview : function (component, event, input){
        let i = input;
        
        if(component.get("v.simonSequence")[i] == 1){
            document.getElementById("display-yellow").style.color="PaleGoldenRod";
        }
        else if(component.get("v.simonSequence")[i] == 2){
            document.getElementById("display-red").style.color="Tomato";
        }
            else if(component.get("v.simonSequence")[i] == 3){
                document.getElementById("display-blue").style.color="DeepSkyBlue";
            }
                else if(component.get("v.simonSequence")[i] == 4){
                    document.getElementById("display-green").style.color="PaleGreen";
                }  
    },
    
    //Moved inside of the repeater so it has it's functionality
	//Purpose to get an input and play back the appropriate note
    playSound : function (player_input) {
        var urlSound = $A.get('$Resource.BeepNoise');
        
        switch(player_input)
        {
            case 1:	urlSound = $A.get('$Resource.Beep_C');
                break;
                
            case 2:	urlSound = $A.get('$Resource.Beep_D');
                break;
                
            case 3:	urlSound = $A.get('$Resource.Beep_F');
                break;
                
            case 4:	urlSound = $A.get('$Resource.Beep_G');
                break;
        }
        
        
        var beepsound = new Audio(urlSound);   
        beepsound.play();
    }
    
})