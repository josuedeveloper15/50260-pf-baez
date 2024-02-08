import { Robot } from './robot.class';

describe('Pruebas de la clase Robot', () => {
  it('La asignasion del piloto debe realizarse correctamente', () => {
    const robot = new Robot('Juan');

    expect(robot.piloto).toBe('Juan');
  });

  it('iniciarSistema debe saludar al piloto', () => {
    const robot = new Robot('Leon');
    const spyOnConsoleLog = spyOn(console, 'log');

    robot.iniciarSistema();

    expect(spyOnConsoleLog).toHaveBeenCalledWith('Hola Leon!');
  });

  it('iniciarSistema debe encerder las luces', () => {
    const robot = new Robot('Leon');

    const spyOnEncenderLuces = spyOn(robot, 'encenderLuces');

    robot.iniciarSistema();

    expect(spyOnEncenderLuces).toHaveBeenCalled();
  });

  it('encenderLuces debe colocar la variable "lucesEncendidas" en true', () => {
    const robot = new Robot('Leon');
    robot.encenderLuces();
    expect(robot.lucesEncendidas).toBeTrue();
  });

  it('Robot debe tener los poderes de volar, lanzar rayos, escupir fuego, super fuerza', () => {
    const robot = new Robot('Pepito');

    expect(robot.poderes).toContain('volar');
    expect(robot.poderes).toContain('lanzar rayos');
    expect(robot.poderes).toContain('escupir fuego');
    expect(robot.poderes).toContain('super fuerza');
    //
    // expect(robot.poderes).toEqual([
    //   'volar',
    //   'lanzar rayos',
    //   'escupir fuego',
    //   'super fuerza',
    // ]);

    const obj = { nombre: 'juan' };

    expect(obj).toEqual({ nombre: 'juan' });
  });
});
