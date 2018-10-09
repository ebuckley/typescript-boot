export declare class GameError extends Error {
}
export declare class Game {
    private container;
    constructor(container: HTMLElement);
    static createFromSelector(selector: string): Game;
}
