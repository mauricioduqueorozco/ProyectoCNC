/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function avisoEntrada(message, title){
    this.message = message;
    this.title = title;
    //console.log(this.title);
    if(this.title === undefined){
        this.title = 'Aviso!!!';
    }
                $.prompt(this.message, {
                       title: this.title,
                       buttons: { "Si": true, "No": false },
                       classes: {
                            box: '',
                            fade: '',
                            prompt: '',
                            close: '',
                            title: 'lead',
                            message: 'pure-form',
                            buttons: '',
                            button: 'pure-button',
                            defaultButton: 'pure-button-primary'
                    }
               });  
};

function seleccionElementos(component){
   
    var statesdemo = {
	state0: {
		title: 'Name',
		html:'<label><input type="radio" name="typeMecanizado" value="Drill"> Drill</label><br />'+
			'<label><input type="radio" name="typeMecanizado" value="Path"> Path</label>'+
                        '<label><input type="radio" name="typeMecanizado" value="Profile"> Profile</label>'+
                        '<label><input type="radio" name="typeMecanizado" value="Pocket"> Pocket</label>',
		buttons: { Next: 1 },
                focus: 1,
		//focus: "input[name='fname']",
		submit: function(e,v,m,f){ 
			//console.log(f);
                        component.machined = f.typeMecanizado; 
                        console.log(component);
                    
			e.preventDefault();
                        $.prompt.close();
			//$.prompt.goToState('state1');
		}
	}
};

$.prompt(statesdemo,{
                
                    classes: {
                            box: '',
                            fade: '',
                            prompt: '',
                            close: '',
                            title: 'lead',
                            message: 'pure-form',
                            buttons: '',
                            button: 'pure-button',
                            defaultButton: 'pure-button-primary'
                    }
            });
            
    
}
