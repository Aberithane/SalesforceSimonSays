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
        
		this.parseColors(component, event);
    },
      
    //The set of the following color related methods are to check player input against an array of the color sequence
    handleClick_yellow : function(component, event) {
        // yellow = 1			
        
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
            document.getElementById("display").style.color="black";
            component.set("v.inputWaitTimer", true);
        }
        
        
    },
    
    handleClick_red : function(component, event) {
        // red = 2  	
        
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
            document.getElementById("display").style.color="black";
            component.set("v.inputWaitTimer", true);
        }
    },
    
    handleClick_blue : function(component, event) {
        // blue = 3      
        
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
            document.getElementById("display").style.color="black";
            component.set("v.inputWaitTimer", true);
        }
    },
    
    handleClick_green : function(component, event) {
        // green = 4        
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
            document.getElementById("display").style.color="black";
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
                
                
                if(sequence[parser] == 1){
                    document.getElementById("display").style.color="gold";

                }
                else if(sequence[parser] == 2){
                    document.getElementById("display").style.color="red";

                }
                    else if(sequence[parser] == 3){
                        document.getElementById("display").style.color="blue";

                    }
                        else if(sequence[parser] == 4){
                            document.getElementById("display").style.color="green";
                        }  
            }
			else
            {
				document.getElementById("display").style.color="black";
                component.set("v.inputWaitTimer",false);   
            }
        },750);
    },

    //purpose is to add a spacer of black between showing the sequence's colors, so that if there are repeats it's easy to distinguish
	parseColorsBlack : function(helper, parser, component, sequence){
        window.setTimeout(function(){
                helper.parseColorsRepeater(helper,parser, component, sequence);
                    document.getElementById("display").style.color="black";
                        
        },750);
    },
    
	//purpose is to parse through the four colors and set the prompter.
	colorPreview : function (component, event, input){
        let i = input;

        if(component.get("v.simonSequence")[i] == 1){
            document.getElementById("display").style.color="gold";
        }
        else if(component.get("v.simonSequence")[i] == 2){
            document.getElementById("display").style.color="red";
        }
            else if(component.get("v.simonSequence")[i] == 3){
                document.getElementById("display").style.color="blue";
            }
                else if(component.get("v.simonSequence")[i] == 4){
                    document.getElementById("display").style.color="green";
                }  
    },
    
})