import { Pipe, PipeTransform } from '@angular/core';

export interface UserPipe {
  firstName: string;
  lastName: string;
}

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(
    value: UserPipe,
    mode?: 'uppercase' | 'lowercase',
    ...args: unknown[]
  ): unknown {
    /**
     * ...args: unknown[] SIGNIFICA LITERALMENTE TODOS LOS ARGUMENTOS QUE VENGAN DESPUES DEL ANTERIOR
     */

    console.log(args);
    const result = value.lastName + ' ' + value.firstName;

    if (mode === 'uppercase') {
      return result.toUpperCase();
    }

    return result;
  }
}
