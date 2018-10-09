
export class GameError extends Error { }

export class Game {

  constructor(private container: HTMLElement) { }

  public static createFromSelector(selector: string) {
    const el = document.querySelector(selector);
    if (el === null) {
      throw new GameError('Could not find element')
    }
    return new Game(el as HTMLElement)
  }
}