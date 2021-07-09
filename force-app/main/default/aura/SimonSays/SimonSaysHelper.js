({
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
        
        alert("Sequence Complete")
        
        for(let i = 0; i < component.get("v.simonSequence").length ; i++)
        {
            this.colorPreview(component , event , i);         
        }
        
    },
    
    Init : function(component, event){
        let sequenceString;
        //Random Number Generator
        const random = (min = 0, max = 4) => {
            let num = Math.random() * (max - min) + min;
            return Math.round(num);
        };    
        
        //let initialSequence = [1,1,1,1,2,1,3,4,3,2];
        component.set("v.simonSequence", [random(1,4)]);
        sequenceString = "" + component.get("v.simonSequence");
        component.set("v.showSequence", sequenceString);
        component.set("v.inputWaitTimer", false);
        
        for(let i = 0; i < component.get("v.simonSequence").length ; i++)
        {
			this.colorPreview(component , event , i);          
        }
    },

    colorPreview : function (component, event, input){
		let i = input;


        if(component.get("v.simonSequence")[i] == 1){
                document.getElementById("display").style.color="gold";
				alert("Yellow");
            }
            else if(component.get("v.simonSequence")[i] == 2){
                document.getElementById("display").style.color="red";
				alert("Red");
            }
                else if(component.get("v.simonSequence")[i] == 3){
                    document.getElementById("display").style.color="blue";
					alert("Blue");
                }
                    else if(component.get("v.simonSequence")[i] == 4){
                        document.getElementById("display").style.color="green";
						alert("Green");
                    }  
    }
})