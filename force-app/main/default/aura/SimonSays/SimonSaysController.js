({	
    
    Init : function(component, event, helper){
        helper.Init(component,event);      
    },
    
    handleClick_yellow : function(component, event, helper) {
        // yellow = 1
        if(component.get("v.inputWaitTimer")); else			
            helper.handleClick_yellow(component,event);         
    },
    
    handleClick_red : function(component, event, helper) {
        // red = 2
        if(component.get("v.inputWaitTimer")); else  	  
            helper.handleClick_red(component,event);
    },
    
    handleClick_blue : function(component, event, helper) {
        // blue = 3       
        if(component.get("v.inputWaitTimer")); else
            helper.handleClick_blue(component,event);
    },
    
    handleClick_green : function(component, event, helper) {
        // green = 4        
        if(component.get("v.inputWaitTimer")); else 
            helper.handleClick_green(component,event);
    },
    
    showDebugClick : function(component,event,helper) {
        helper.showDebugClick(component,event);		
    },
})
