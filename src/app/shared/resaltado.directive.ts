import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { UserPipe } from './full-name.pipe';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective implements OnChanges {
  @Input()
  color = 'yellow';

  @Input()
  user: UserPipe | null = null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('Se instancio la directiva appResaltado', this.elementRef);
    this.renderColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NGONCHANGES!!!!!!!!!!!!!', this.color);

    console.log('LOS CAMBIOS SON: ', changes);

    if (changes['color']) {
      this.renderColor();
    }

    // if (changes['user']) {
    //   alert(`RECIBIMOS EL USUARIO ${JSON.stringify(this.user)}`);
    // }
  }

  renderColor(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.color
    );
  }
}
