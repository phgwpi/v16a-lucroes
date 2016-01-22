                        
                     					//Lucro es | phgwpi APPS                             
                                           
                        function umbral(){ 
			 var operando1 = document.umbr.operando1.value
			 var operando2 = document.umbr.operando2.value
			 var operando3 = document.umbr.operando3.value
			
			 var result = (operando1)/(operando2 -  operando3) 
                         document.umbr.resultado.value = "Cuando venda  " + result + "  bienes o servicios, su benefecio será = 0 , comenzando a partir de entonces la generación de beneficios para su empresa. "
			}
                       
			function borrando(form){
			borrar = form.reset();
			}
                        /*function inforumbral(form){
			document.umbr.resultado.value = "A=CF: Costes Fijos Anuales.\nB=P: Precio unitario de venta \nC=CV: Coste Variable Unitario."
			}*/
                        /*function inforintereses(form){
			document.ib.resultado.value = "A= Capital\n B=Años\n C:TAE %."
			}*/
		   					/*function inforbn(form){
			document.bn.resultado.value = "A: Beneficio Económico.\n B: Préstamo.\n C: TAE %."
			}*/
			      
			function bancarios(operacion){
			 var operando1 = document.ib.operando1.value
			 var operando2 = document.ib.operando2.value
			 var operando3 = document.ib.operando3.value
			
			 var result = eval(operando1 * operando2 * operando3 / 100 / operando2)
			 document.ib.resultado.value = " Un total de " + result + " € al año son los intereses de su depósito bancario o préstamo hipotecario durante "  + operando2 + " años a un " + operando3 + " % TAE. "
			}
						    
			function iva(){
			 var operando1 = document.iv.operando1.value
			 			 
			 var result = eval (operando1)+(operando1 *  0.04) 
			 var result2 = eval(operando1)+(operando1 * 0.10)  
			 var result3 = eval(operando1)+(operando1 * 0.21)  
			 
			 document.iv.resultado.value = "Tipo Superreducido 4% =  " + result + " € . "
			 document.iv.resultado2.value = "Tipo Reducido 10% = " + result2 + " € . "
			 document.iv.resultado3.value = " Tipo General 21% = " + result3 + " € ."
			}
						 			      
			function Bn(){
			 var operando1 = document.bn.operando1.value
			 var operando2 = document.bn.operando2.value
			 var operando3 = document.bn.operando3.value
			
			 var result = eval(operando1-operando2 * operando3/100)
                         document.bn.resultado.value = "Su empresa conseguirá " + result + "  € de beneficio anual, descontando los intereses de " + operando2*operando3/100 + " € de un préstamo bancario de " + operando2 + " €."
			}
                        
                       
                        
