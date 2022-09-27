class Validator{
    constructor(){
        this.Validator=[
            'data-min-length',
        ]
    }

    //iniciar a validação de todos os campos
    validate(form){

        //pega os inputs
        let inputs=form.getElementByTagName('input');

    
        //  transformo uma HTMLCollection -> array
        let inputsArray=[...inputs];


         // loop nos inputs e validação mediante aos atributos encontrados
        inputsArray.forEach(function(input) {
            console.log(input);

           //loop em todas as validações existentes 
             for(let i=0; this.validations.length >i;++i){
            // verifica se a validação atual existe no input  
                if(input.getAttribute(this.validate[i]) != null){
                
                    //limpando a string para virar um método
                    let method = this.validations[i].replace('data-','').replace('-','')

                    //valor do input
                    let value=input.getAttribute(this.validations[i]);

                    //chamar método
                    this[method](input,value);

                }
             }

        }.this);
        
    }
    //verifica se um input tem um número mínimo de caracteres
    minlength(){

        let inputLength=input.value.length;

        let errorMessage= `O campo precisa ter pelo menos ${minValue} caracteres`;


        if (inputLength<minValue){
            this.printMessage(input,errorMessage);
        }
    }
    //impirme mensagem de erro
    printMessage(input,msg){
        let template= document.querySelector('.error-validation').cloneNode(true);

        template.textContent = msg;

        let inputParent = input.parentNode;
         template.classList.remove('template');

         inputParent.appendChild(template);
        }


}


let form= document.getElementById("register-form");
let submit=document.getElementById("btn-submit");

//evento que dispara validações//

submit.addEventListener('click', function(e) {
    e.preventDefault();

    validator.validate(form);

    
});