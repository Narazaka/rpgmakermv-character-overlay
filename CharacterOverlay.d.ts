/// <reference types="rpgmakermv_typescript_dts" />
/**
 * 立ち絵
 */
declare class CharacterOverlay {
    readonly characterName: string;
    readonly partsNames: string[];
    readonly horizontalAlign: CharacterOverlayHorizontalAlign;
    readonly verticalAlign: CharacterOverlayVerticalAlign;
    readonly width: number;
    readonly height: number;
    onDraw?: (characterOverlay: CharacterOverlay) => void;
    private _x;
    private _y;
    private _active;
    private _visible;
    private _alpha;
    private readonly partsState;
    private _container?;
    private drawnPartsState?;
    private sprites?;
    private anchorX;
    private anchorY;
    private childX;
    private childY;
    constructor(characterName: string, partsNames: string[], width: number, height: number, {horizontalAlign, verticalAlign, top, right, bottom, left, active, visible, alpha, partsState, onDraw}?: {
        horizontalAlign?: CharacterOverlayHorizontalAlign;
        verticalAlign?: CharacterOverlayVerticalAlign;
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
        active?: boolean;
        visible?: boolean;
        alpha?: number;
        partsState?: {
            [partsName: string]: number;
        };
        onDraw?: (characterOverlay: CharacterOverlay) => void;
    });
    x: number;
    y: number;
    active: boolean;
    visible: boolean;
    alpha: number;
    readonly container: PIXI.Container;
    moveTo({top, right, bottom, left}: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    }): void;
    setParts(partsName: string, id: number): void;
    setParts(partsState: CharacterOverlayPartsState): void;
    draw(): void;
    protected loadPartsImageFromFile(partsName: string, id: number): HTMLImageElement;
    private partsSprite(partsName, id);
    private calcAnchors();
    private drawParts();
    private drawPosition();
    private drawActive();
    private drawVisible();
    private drawAlpha();
    private notifyDraw();
}
/**
 * パーツの状態
 */
interface CharacterOverlayPartsState {
    [partsName: string]: number;
}
/** 水平寄せ */
declare type CharacterOverlayHorizontalAlign = "left" | "center" | "right";
/** 垂直寄せ */
declare type CharacterOverlayVerticalAlign = "top" | "center" | "bottom";
/**
 * 立ち絵グループ
 */
declare class CharacterOverlayGroup {
    readonly align: "left" | "right";
    readonly pack: boolean;
    readonly sidePadding: number;
    readonly betweenPadding: number;
    onAdd?: (characterOverlayGroup: CharacterOverlayGroup, characterOverlay: CharacterOverlay) => void;
    characterNames: string[];
    private readonly characterOverlays;
    private _container?;
    /**
     * constructor
     * @param align 寄せ方向
     * @param pack 非表示キャラ分つめるか
     * @param sidePadding 端のpadding
     * @param betweenPadding キャラ間のpadding
     */
    constructor({align, pack, sidePadding, betweenPadding, onAdd}?: {
        align?: "left" | "right";
        pack?: boolean;
        sidePadding?: number;
        betweenPadding?: number;
        onAdd?: (characterOverlayGroup: CharacterOverlayGroup, characterOverlay: CharacterOverlay) => void;
    });
    readonly container: PIXI.Container;
    addCharacter(characterOverlay: CharacterOverlay): void;
    character(characterName: string): CharacterOverlay;
    setOrder(characterNames: string[]): void;
    setActive(characterName: string | string[]): void;
    activate(characterName: string | string[]): void;
    inactivate(characterName: string | string[]): void;
    activateAll(): void;
    inactivateAll(): void;
    setVisible(characterName: string | string[]): void;
    show(characterName: string | string[]): void;
    hide(characterName: string | string[]): void;
    showAll(): void;
    hideAll(): void;
    draw(): void;
    protected setPositions(): void;
    private setPositionsVertical();
    private setChildren();
    private getPriority();
}
interface Scene_Base {
    _characterOverlayLayer: WindowLayer;
    createCharacterOverlayLayer(): void;
    addCharacterOverlay(characterOverlay: CharacterOverlay): void;
}
interface Game_System {
    characterOverlayGroup: CharacterOverlayGroup;
}
