import { AbstractControl } from '@angular/forms';

export const isNotTemporalEmailValidator = (control: AbstractControl) => {

const temporalDomains = [
    '10minutesmail.com',
    'temporalemail.com'
];

temporalDomains.forEach(element => {
    if(element === control.value)
    {
        console.log('Valor array: '+element+'Valor introducido'+control.value);
        return { isNotTemporalEmail: true};
    }
});


console.log('Field value: ', control.value);
console.log();

return { isNotTemporalEmail: false};

};
