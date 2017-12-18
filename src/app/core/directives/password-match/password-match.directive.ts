import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[ioPasswordMatch][formControlName],[ioPasswordMatch][formControl],[ioPasswordMatch][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordMatchDirective), multi: true }
    ]
})
export class PasswordMatchDirective {

    constructor( @Attribute('ioPasswordMatch') public ioPasswordMatch: string,
        @Attribute('reverse') public reverse: string) {
    }
    private get isReverse() {
        if (!this.reverse) { return false; }
        return this.reverse === 'true' ? true : false;
    }
    validate(control: AbstractControl): { [key: string]: any } {
        const selfValue = control.value;
        const controlValue = control.root.get(this.ioPasswordMatch);
        // value not equal
        if (controlValue && selfValue !== controlValue.value && !this.isReverse) {
            return {
                ioPasswordMatch: false
            };
        }
        // value equal and reverse
        if (controlValue && selfValue === controlValue.value && this.isReverse) {
            delete controlValue.errors['ioPasswordMatch'];
            if (!Object.keys(controlValue.errors).length) { controlValue.setErrors(null); }
        }
        // value not equal and reverse
        if (controlValue && selfValue !== controlValue.value && this.isReverse) {
            controlValue.setErrors({ ioPasswordMatch: false });
        }
        return null;
    }
}
