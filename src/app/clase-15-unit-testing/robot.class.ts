export class Robot {
  energia = 100;
  piloto = '';
  lucesEncendidas = false;

  poderes = ['volar', 'lanzar rayos', 'escupir fuego', 'super fuerza'];

  constructor(piloto: string) {
    this.piloto = piloto;
  }

  iniciarSistema(): void {
    console.log(`Hola ${this.piloto}!`);
    this.energia -= 10;
    this.encenderLuces();
  }

  encenderLuces(): void {
    this.lucesEncendidas = true;
  }
}
