export enum Element {
    Fire = 'FIRE',
    Aqua = 'AQUA',
    Elec = 'ELEC',
    Wood = 'WOOD',
    Sword = 'SWORD',
    Wind = 'WIND',
    Cursor = 'CURSOR',
    Summon = 'SUMMON',
    Bonus_Point = 'BONUS_POINT',
    Break = 'BREAK',
    None = 'NONE'
}

export class BattleChip {

    constructor(
        public name: string,
        public element: Element,
        public mb: number,
        public atk: number,
        public codes: string,
        public description: string,
        public image: string,  // Image URL/Path
        public alias: string,  // CSV

        public id?: number,
    ) { }
}