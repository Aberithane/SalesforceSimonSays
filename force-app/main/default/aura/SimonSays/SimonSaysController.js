({	
    
    Init : function(component, event, helper){
        helper.Init(component,event);
        
    },
    
    handleClick_yellow : function(component, event, helper) {
        // yellow = 1			
        
        
        
        if (component.get("v.simonSequence")[component.get("v.progressPosition")] == 1 /* Yellow*/)
        {
            if(component.get("v.simonSequence").length == component.get("v.progressPosition")+1){
                helper.playSimon(component, event);
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
    
    handleClick_red : function(component, event, helper) {
        // red = 2  	
        
        if (component.get("v.simonSequence")[component.get("v.progressPosition")] == 2 /* Red */)
        {
            if(component.get("v.simonSequence").length == component.get("v.progressPosition")+1){
                helper.playSimon(component, event);
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
    
    handleClick_blue : function(component, event, helper) {
        // blue = 3      
        
        if (component.get("v.simonSequence")[component.get("v.progressPosition")] == 3 /* Blue */)
        {
            if(component.get("v.simonSequence").length == component.get("v.progressPosition")+1){
                helper.playSimon(component, event);
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
    
    handleClick_green : function(component, event, helper) {
        // green = 4        
        if (component.get("v.simonSequence")[component.get("v.progressPosition")] == 4 /* Green */)
        {
            if(component.get("v.simonSequence").length == component.get("v.progressPosition")+1){
                helper.playSimon(component, event);
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

    showDebugClick : function(component,event,helper) {
        if (component.get("v.showDebug"))
        {
            component.set("v.showDebug", false);
        }
		else
        {
            component.set("v.showDebug", true);
        }
    }
    
    
    
})