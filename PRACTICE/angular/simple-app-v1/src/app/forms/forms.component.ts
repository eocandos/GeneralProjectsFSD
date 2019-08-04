import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
 
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent{
 
	forma:FormGroup;
 
	usuario:any = {
		nombreCompleto: {
			nombre: 'Jhonatan',
			apellido: 'C Hurtado'
		},
		correo: 'jhontandev@gmail.com'
	}
 
	constructor() {
 
		this.forma = new FormGroup({
			'nombreCompleto': new FormGroup({
				'nombre' : new FormControl( '' , [ Validators.required, Validators.minLength(3) ] ),
				'apellido' : new FormControl( '' , Validators.required )
			}),
			'correo' : new FormControl( '' , [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ),
			'pasatiempos' : new FormArray([
				new FormControl('correr', Validators.required )
			])
		});
 
	}
 
	agregarPasatiempo(){
		(<FormArray>this.forma.controls['pasatiempos']).push( new FormControl( '', Validators.required ) );
	}
 
	guardarCambios(){
		console.log( this.forma.value );
		this.forma.reset({
			nombreCompleto: {
				nombre: '',
				apellido: ''
			},
			correo: '',
			pasatiempos: ''
		});
	}
 
}