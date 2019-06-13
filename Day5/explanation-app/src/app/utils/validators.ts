import {AbstractControl} from '@angular/forms';

export const isNotTemporalEmailValidator = (control: AbstractControl) => {

  const temporalDomains = [
    '10minutesmail.com',
    'temporalmail.com',
    'preventspam.com'
  ];

  if (temporalDomains.find(s => control.value.endsWith('@' + s))) {
    return { isNotTemporalEmail: true };
  }
};
