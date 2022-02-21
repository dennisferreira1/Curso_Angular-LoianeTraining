import { FormArray, FormControl, FormGroup, ValidatorFn } from "@angular/forms";

export class FormsValidations {
  static requiredMinCheckBox(min= 1) {
    const validator = (formArray: FormArray) => {
      const totalChecked= formArray.controls
        .map(v => v.value)
        .reduce((total, atual) => atual ? total + 1 : total, 0);

        return totalChecked >= min ? null : { required: true };
    }
    return validator as ValidatorFn;
  }

  static cepValidator(control: FormControl) {
    let cep = control.value;
    cep = cep?.replace(/\-/g, '');
    if(cep && cep !== '') {
      const validacep = /^[0-9]{8}$/;
      return validacep.test(cep) ? null : { cepInvalido: true }
    }
    return null;
  }

  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {

      if(otherField == null) {
        throw new Error("É necessário informar um campo!")
      }

      if(!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if(!field) {
        throw new Error("É necessário informar um campo válido!")
      }

      if(field.value !== formControl.value) {
        return { equalsTo: otherField }
      }

      return null;
    };
    return validator;
  }
}

