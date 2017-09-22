/// <reference types="rpgmakermv_typescript_dts" />

/*:
 * @plugindesc 常時立ち絵を表示します
 *
 * @author Narazaka (https://narazaka.net/)
 *
 * @param align
 * @desc 寄せ方向 = left | right
 * @default right
 *
 * @param pack
 * @desc キャラが非表示になったときその分を寄せるか = true | false
 * @default true
 *
 * @param sidePadding
 * @desc 端からの間隔px
 * @default 0
 *
 * @param betweenPadding
 * @desc キャラ間の間隔px
 * @default 0
 *
 * @param characterName0
 * @desc 0番目のキャラ名
 *
 * @param partsNames0
 * @desc 0番目のパーツ名群(空白区切り) 例: ベース 目 口 腕 服 (キャラ名があると必須)
 *
 * @param width0
 * @desc 0番目の幅 画像がこれより大きい場合は単にはみ出ます (キャラ名があると必須)
 *
 * @param height0
 * @desc 0番目の高さ 画像がこれより大きい場合は単にはみ出ます (キャラ名があると必須)
 *
 * @param horizontalAlign0
 * @desc 0番目の横寄せ方向 = left | center | right
 * @default right
 *
 * @param verticalAlign0
 * @desc 0番目の縦寄せ方向 = top | center | bottom
 * @default bottom
 *
 * @param top0
 * @desc 0番目の縦座標 上からのpxで指定(topとbottomどちらかのみを指定)
 *
 * @param bottom0
 * @desc 0番目の縦座標 下からのpxで指定(topとbottomどちらかのみを指定)
 * @default 0
 *
 * @param active0
 * @desc 0番目の初期アクティブ状態 = true | false
 * @default true
 *
 * @param visible0
 * @desc 0番目の初期表示状態 = true | false
 * @default true
 *
 * @param alpha0
 * @desc 0番目の初期透明度 = 0～1
 * @default 1
 *
 *
 * @param characterName1
 * @desc 1番目のキャラ名
 *
 * @param partsNames1
 * @desc 1番目のパーツ名群(空白区切り) 例: ベース 目 口 腕 服 (キャラ名があると必須)
 *
 * @param width1
 * @desc 1番目の幅 画像がこれより大きい場合は単にはみ出ます (キャラ名があると必須)
 *
 * @param height1
 * @desc 1番目の高さ 画像がこれより大きい場合は単にはみ出ます (キャラ名があると必須)
 *
 * @param horizontalAlign1
 * @desc 1番目の横寄せ方向 = left | center | right
 * @default right
 *
 * @param verticalAlign1
 * @desc 1番目の縦寄せ方向 = top | center | bottom
 * @default bottom
 *
 * @param top1
 * @desc 1番目の縦座標 上からのpxで指定(topとbottomどちらかのみを指定)
 *
 * @param bottom1
 * @desc 1番目の縦座標 下からのpxで指定(topとbottomどちらかのみを指定)
 * @default 1
 *
 * @param active1
 * @desc 1番目の初期アクティブ状態 = true | false
 * @default true
 *
 * @param visible1
 * @desc 1番目の初期表示状態 = true | false
 * @default true
 *
 * @param alpha1
 * @desc 1番目の初期透明度 = 0～1
 * @default 1
 *
 *
 * @param characterName2
 * @desc 2番目のキャラ名
 *
 * @param partsNames2
 * @desc 2番目のパーツ名群(空白区切り) 例: ベース 目 口 腕 服 (キャラ名があると必須)
 *
 * @param width2
 * @desc 2番目の幅 画像がこれより大きい場合は単にはみ出ます (キャラ名があると必須)
 *
 * @param height2
 * @desc 2番目の高さ 画像がこれより大きい場合は単にはみ出ます (キャラ名があると必須)
 *
 * @param horizontalAlign2
 * @desc 2番目の横寄せ方向 = left | center | right
 * @default right
 *
 * @param verticalAlign2
 * @desc 2番目の縦寄せ方向 = top | center | bottom
 * @default bottom
 *
 * @param top2
 * @desc 2番目の縦座標 上からのpxで指定(topとbottomどちらかのみを指定)
 *
 * @param bottom2
 * @desc 2番目の縦座標 下からのpxで指定(topとbottomどちらかのみを指定)
 * @default 2
 *
 * @param active2
 * @desc 2番目の初期アクティブ状態 = true | false
 * @default true
 *
 * @param visible2
 * @desc 2番目の初期表示状態 = true | false
 * @default true
 *
 * @param alpha2
 * @desc 2番目の初期透明度 = 0～1
 * @default 1
 *
 *
 * @param characterName3
 * @desc 3番目のキャラ名
 *
 * @param partsNames3
 * @desc 3番目のパーツ名群(空白区切り) 例: ベース 目 口 腕 服 (キャラ名があると必須)
 *
 * @param width3
 * @desc 3番目の幅 画像がこれより大きい場合は単にはみ出ます (キャラ名があると必須)
 *
 * @param height3
 * @desc 3番目の高さ 画像がこれより大きい場合は単にはみ出ます (キャラ名があると必須)
 *
 * @param horizontalAlign3
 * @desc 3番目の横寄せ方向 = left | center | right
 * @default right
 *
 * @param verticalAlign3
 * @desc 3番目の縦寄せ方向 = top | center | bottom
 * @default bottom
 *
 * @param top3
 * @desc 3番目の縦座標 上からのpxで指定(topとbottomどちらかのみを指定)
 *
 * @param bottom3
 * @desc 3番目の縦座標 下からのpxで指定(topとbottomどちらかのみを指定)
 * @default 3
 *
 * @param active3
 * @desc 3番目の初期アクティブ状態 = true | false
 * @default true
 *
 * @param visible3
 * @desc 3番目の初期表示状態 = true | false
 * @default true
 *
 * @param alpha3
 * @desc 3番目の初期透明度 = 0～1
 * @default 1
 */

/**
 * 立ち絵
 */
class CharacterOverlay {
    readonly characterName: string;
    readonly partsNames: string[];
    readonly horizontalAlign: CharacterOverlayHorizontalAlign;
    readonly verticalAlign: CharacterOverlayVerticalAlign;
    readonly width: number;
    readonly height: number;
    onDraw?: (characterOverlay: CharacterOverlay) => void;
    private _x: number;
    private _y: number;
    private _active: boolean;
    private _visible: boolean;
    private _alpha: number;
    private readonly partsState: CharacterOverlayPartsState = {};
    private _container?: PIXI.Container;
    private drawnPartsState?: CharacterOverlayPartsState;
    private sprites?: {[partsName: string]: {[id: string]: PIXI.Sprite}};

    private anchorX: number;
    private anchorY: number;
    private childX: number;
    private childY: number;

    constructor(
        characterName: string,
        partsNames: string[],
        width: number,
        height: number,
        {
            horizontalAlign = "right",
            verticalAlign = "bottom",
            top,
            right,
            bottom,
            left,
            active = true,
            visible = true,
            alpha = 1.0,
            partsState,
            onDraw,
        }: {
            horizontalAlign?: CharacterOverlayHorizontalAlign,
            verticalAlign?: CharacterOverlayVerticalAlign,
            top?: number,
            right?: number,
            bottom?: number,
            left?: number,
            active?: boolean,
            visible?: boolean,
            alpha?: number,
            partsState?: {[partsName: string]: number},
            onDraw?: (characterOverlay: CharacterOverlay) => void,
        } = {},
    ) {
        // do not save caches
        Object.defineProperties(this, {
            _container: {
                writable: true,
                enumerable: false,
            },
            drawnPartsState: {
                writable: true,
                enumerable: false,
            },
            sprites: {
                writable: true,
                enumerable: false,
            },
            onDraw: {
                writable: true,
                enumerable: false,
            },
        });
        this.characterName = characterName;
        this.partsNames = partsNames;
        this.width = width;
        this.height = height;
        this.horizontalAlign = horizontalAlign;
        this.verticalAlign = verticalAlign;
        this.moveTo({ top, right, bottom, left });
        this.calcAnchors();
        this.active = active;
        this.visible = visible;
        this.alpha = alpha;
        this.onDraw = onDraw;
        if (partsState) this.setParts(partsState);
    }

    get x() { return this._x; }
    set x(x) {
        this._x = x;
        if (this.container.x !== x) this.drawPosition();
        this.notifyDraw();
    }

    get y() { return this._y; }
    set y(y) {
        this._y = y;
        if (this.container.y !== y) this.drawPosition();
        this.notifyDraw();
    }

    get active() { return this._active; }
    set active(active) {
        this._active = active;
        this.drawActive();
        this.notifyDraw();
    }

    get visible() { return this._visible; }
    set visible(visible) {
        this._visible = visible;
        this.drawVisible();
        this.notifyDraw();
    }

    get alpha() { return this._alpha; }
    set alpha(alpha) {
        this._alpha = alpha;
        this.drawAlpha();
        this.notifyDraw();
    }

    get container() {
        if (!this._container) this._container = new PIXI.Container();
        return this._container;
    }

    moveTo({ top, right, bottom, left }: {
        top?: number,
        right?: number,
        bottom?: number,
        left?: number,
    }) {
        if (left != null) {
            this.x = left;
        } else if (right != null) {
            this.x = Graphics.boxWidth - right - this.width;
        }
        if (top != null) {
            this.y = top || 0;
        } else if (bottom != null) {
            this.y = Graphics.boxHeight - bottom - this.height;
        }
    }

    setParts(partsName: string, id: number): void;
    setParts(partsState: CharacterOverlayPartsState): void;
    setParts(partsName: CharacterOverlayPartsState | string, id?: number) {
        const partsState =
            typeof partsName === "string" ?
            {[partsName]: id as number} :
            partsName;
        for (const _partsName of Object.keys(partsState)) {
            const _id = partsState[_partsName];
            this.partsSprite(_partsName, _id);
            this.partsState[_partsName] = _id;
        }
        this.drawParts();
        this.notifyDraw();
    }

    // セーブ復帰用
    draw() {
        this.drawPosition();
        this.drawActive();
        this.drawVisible();
        this.drawAlpha();
        this.drawParts();
        this.notifyDraw();
    }

    protected loadPartsImageFromFile(partsName: string, id: number) {
        const bitmap = ImageManager.loadBitmap("img/character_overlays/", `${this.characterName}_${partsName}_${id}`);
        return bitmap._image;
    }

    private partsSprite(partsName: string, id: number) {
        if (!this.sprites) this.sprites = {};
        if (!this.sprites[partsName]) this.sprites[partsName] = {};
        if (!this.sprites[partsName][id]) {
            const image = this.loadPartsImageFromFile(partsName, id);
            const sprite = new PIXI.Sprite(PIXI.Texture.from(image));
            sprite.anchor.x = this.anchorX;
            sprite.anchor.y = this.anchorY;
            sprite.x = this.childX;
            sprite.y = this.childY;
            this.sprites[partsName][id] = sprite;
        }
        return this.sprites[partsName][id];
    }

    private calcAnchors() {
        switch (this.horizontalAlign) {
            case "left":
                this.anchorX = 0;
                this.childX = 0;
                break;
            case "right":
                this.anchorX = 1;
                this.childX = this.width;
                break;
            default:
                this.anchorX = 0.5;
                this.childX = this.width / 2;
                break;
        }
        switch (this.verticalAlign) {
            case "top":
                this.anchorY = 0;
                this.childY = 0;
                break;
            case "bottom":
                this.anchorY = 1;
                this.childY = this.height;
                break;
            default:
                this.anchorY = 0.5;
                this.childY = this.height / 2;
                break;
        }
    }

    private drawParts() {
        const container = this.container;
        if (!container.children.length) {
            let i = this.partsNames.length;
            while (i--) container.addChild(new PIXI.Container()); // layers
        }
        let index = 0;
        if (!this.drawnPartsState) this.drawnPartsState = {};
        for (const partsName of this.partsNames) {
            const id = this.partsState[partsName] || 0;
            const drawnId = this.drawnPartsState[partsName] || 0;
            if (id === drawnId) continue;
            const layer = container.getChildAt(index) as PIXI.Container;
            if (drawnId) layer.removeChildren();
            if (id) {
                const sprite = this.partsSprite(partsName, id);
                layer.addChild(sprite);
            }
            this.drawnPartsState[partsName] = id;
            ++index;
        }
    }

    private drawPosition() {
        this.container.x = this.x;
        this.container.y = this.y;
    }

    private drawActive() {
        const container = this.container;
        if (this.active) {
            if (container.filters) container.filters = null;
        } else {
            if (!container.filters) {
                const cmf = new PIXI.filters.ColorMatrixFilter();
                cmf.brightness(0.6);
                container.filters = [cmf];
            }
        }
    }

    private drawVisible() {
        this.container.visible = this.visible;
    }

    private drawAlpha() {
        this.container.alpha = this.alpha;
    }

    private notifyDraw() {
        if (this.onDraw) this.onDraw(this);
    }
}

// コメントの後にinterfaceがあるとtscのバグでコメントが外されてしまうようなので後ろに持ってくる
/**
 * パーツの状態
 */
interface CharacterOverlayPartsState {
    [partsName: string]: number;
}

/** 水平寄せ */
type CharacterOverlayHorizontalAlign = "left" | "center" | "right";
/** 垂直寄せ */
type CharacterOverlayVerticalAlign = "top" | "center" | "bottom";

/**
 * 立ち絵グループ
 */
class CharacterOverlayGroup {
    readonly align: "left" | "right";
    readonly pack: boolean;
    readonly sidePadding: number;
    readonly betweenPadding: number;
    onAdd?: (characterOverlayGroup: CharacterOverlayGroup, characterOverlay: CharacterOverlay) => void;
    characterNames: string[] = [];
    private readonly characterOverlays: {[characterName: string]: CharacterOverlay} = {};

    private _container?: PIXI.Container;

    /**
     * constructor
     * @param align 寄せ方向
     * @param pack 非表示キャラ分つめるか
     * @param sidePadding 端のpadding
     * @param betweenPadding キャラ間のpadding
     */
    constructor({
        align = "right",
        pack = true,
        sidePadding = 0,
        betweenPadding = 0,
        onAdd,
    }: {
        align?: "left" | "right",
        pack?: boolean,
        sidePadding?: number,
        betweenPadding?: number,
        onAdd?: (characterOverlayGroup: CharacterOverlayGroup, characterOverlay: CharacterOverlay) => void,
    } = {}) {
        // do not save caches
        Object.defineProperties(this, {
            _container: {
                writable: true,
                enumerable: false,
            },
            onAdd: {
                writable: true,
                enumerable: false,
            },
        });
        this.align = align;
        this.pack = pack;
        this.sidePadding = sidePadding;
        this.betweenPadding = betweenPadding;
        this.onAdd = onAdd;
    }

    get container() {
        if (!this._container) this._container = new PIXI.Container();
        return this._container;
    }

    addCharacter(characterOverlay: CharacterOverlay) {
        this.characterOverlays[characterOverlay.characterName] = characterOverlay;
        this.characterNames.push(characterOverlay.characterName);
        this.setPositions();
        this.setChildren();
        if (this.onAdd) this.onAdd(this, characterOverlay);
    }

    character(characterName: string) {
        return this.characterOverlays[characterName];
    }

    setOrder(characterNames: string[]) {
        this.characterNames = characterNames;
        this.setPositions();
    }

    setActive(characterName: string | string[]) {
        const activeCharacterNamesHash: {[characterName: string]: boolean} = {};
        for (const _characterName of characterName instanceof Array ? characterName : [characterName]) {
            activeCharacterNamesHash[_characterName] = true;
        }
        for (const _characterName of this.characterNames) {
            this.characterOverlays[_characterName].active = activeCharacterNamesHash[_characterName];
        }
    }

    activate(characterName: string | string[]) {
        for (const _characterName of characterName instanceof Array ? characterName : [characterName]) {
            this.characterOverlays[_characterName].active = true;
        }
    }

    inactivate(characterName: string | string[]) {
        for (const _characterName of characterName instanceof Array ? characterName : [characterName]) {
            this.characterOverlays[_characterName].active = false;
        }
    }

    activateAll() {
        this.activate(this.characterNames);
    }

    inactivateAll() {
        this.inactivate(this.characterNames);
    }

    setVisible(characterName: string | string[]) {
        const visibleCharacterNamesHash: {[characterName: string]: boolean} = {};
        for (const _characterName of characterName instanceof Array ? characterName : [characterName]) {
            visibleCharacterNamesHash[_characterName] = true;
        }
        for (const _characterName of this.characterNames) {
            this.characterOverlays[_characterName].visible = visibleCharacterNamesHash[_characterName];
        }
        this.setPositions();
    }

    show(characterName: string | string[]) {
        for (const _characterName of characterName instanceof Array ? characterName : [characterName]) {
            this.characterOverlays[_characterName].visible = true;
        }
        this.setPositions();
    }

    hide(characterName: string | string[]) {
        for (const _characterName of characterName instanceof Array ? characterName : [characterName]) {
            this.characterOverlays[_characterName].visible = false;
        }
        this.setPositions();
    }

    showAll() {
        this.show(this.characterNames);
    }

    hideAll() {
        this.hide(this.characterNames);
    }

    // セーブ復帰用
    draw() {
        this.setChildren();
        for (const characterName of this.characterNames) {
            const characterOverlay = this.character(characterName);
            characterOverlay.draw();
        }
    }

    protected setPositions() {
        this.setPositionsVertical();
    }

    private setPositionsVertical() {
        let offset = this.sidePadding;
        const characterNames = this.characterNames.slice(); // copy
        if (this.align === "right") characterNames.reverse();
        for (const characterName of this.characterNames) {
            const characterOverlay = this.character(characterName);
            if (this.pack && !characterOverlay.visible) continue;
            characterOverlay.moveTo({ [this.align]: offset });
            offset += characterOverlay.width + this.betweenPadding;
        }
    }

    private setChildren() {
        const priority = this.getPriority();
        const container = this.container;
        this.container.removeChildren();
        for (const characterName of priority) {
            const characterOverlay = this.character(characterName);
            container.addChild(characterOverlay.container);
        }
    }

    // active->characterNamesの優先度で重ね順を決定
    private getPriority() {
        const priority = [];
        for (const characterName of this.characterNames) {
            const characterOverlay = this.character(characterName);
            if (characterOverlay.active) priority.unshift(characterName);
        }
        for (const characterName of this.characterNames) {
            const characterOverlay = this.character(characterName);
            if (!characterOverlay.active) priority.unshift(characterName);
        }
        return priority;
    }
}

interface Scene_Base {
    _characterOverlayLayer: WindowLayer;
    createCharacterOverlayLayer(): void;
    addCharacterOverlay(characterOverlay: CharacterOverlay): void;
}

interface Game_System {
    characterOverlayGroup: CharacterOverlayGroup;
}

(function() {
    Scene_Base.prototype.createCharacterOverlayLayer = function(this: Scene_Base) {
        const width = Graphics.boxWidth;
        const height = Graphics.boxHeight;
        const x = (Graphics.width - width) / 2;
        const y = (Graphics.height - height) / 2;
        this._characterOverlayLayer = new WindowLayer();
        this._characterOverlayLayer.move(x, y, width, height);
        this.addChild(this._characterOverlayLayer);
        this._characterOverlayLayer.addChild($gameSystem.characterOverlayGroup.container);
        $gameSystem.characterOverlayGroup.draw();
    };

    // 立ち絵レイヤーをウインドウレイヤーの下に作ってしまう
    const createWindowLayer = Scene_Base.prototype.createWindowLayer;
    Scene_Base.prototype.createWindowLayer = function(this: Scene_Base) {
        this.createCharacterOverlayLayer();
        createWindowLayer.apply(this, arguments);
    };

    const params = PluginManager.parameters("CharacterOverlay");

    // 新規ゲーム
    const createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function() {
        createGameObjects.apply(this, arguments);
        if (!$gameSystem.characterOverlayGroup) {
            const align = params.align as "left" | "right";
            // tslint:disable-next-line no-eval
            const pack = eval(params.pack || "true");
            const sidePadding = Number(params.sidePadding || 0);
            const betweenPadding = Number(params.betweenPadding || 0);
            const characterOverlayGroup = new CharacterOverlayGroup({
                align,
                pack,
                sidePadding,
                betweenPadding,
            });
            $gameSystem.characterOverlayGroup = characterOverlayGroup;
            for (let index = 0; index < 4; ++index) {
                const characterName = params[`characterName${index}`];
                if (!characterName) continue;
                const partsNames = params[`partsNames${index}`].split(/ +/);
                const width = Number(params[`width${index}`]);
                const height = Number(params[`height${index}`]);
                const horizontalAlign = params[`horizontalAlign${index}`] as CharacterOverlayHorizontalAlign;
                const verticalAlign = params[`verticalAlign${index}`] as CharacterOverlayVerticalAlign;
                const top = params[`top${index}`] == null ? undefined : Number(params[`top${index}`]);
                const bottom = params[`bottom${index}`] == null ? undefined : Number(params[`bottom${index}`]);
                // tslint:disable-next-line no-eval
                const active = eval(params[`active${index}`] || "true");
                // tslint:disable-next-line no-eval
                const visible = eval(params[`visible${index}`] || "true");
                const alpha = params[`alpha${index}`] == null ? undefined : Number(params[`alpha${index}`]);
                const characterOverlay = new CharacterOverlay(
                    characterName,
                    partsNames,
                    width,
                    height,
                    {
                        horizontalAlign,
                        verticalAlign,
                        top,
                        bottom,
                        active,
                        visible,
                        alpha,
                    },
                );
                characterOverlayGroup.addCharacter(characterOverlay);
            }
        }
    };

    /*
    // ロード(不要?)
    const extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function() {
        extractSaveContents.apply(this, arguments);
        if (!$gameSystem.characterOverlayGroup) {
            $gameSystem.characterOverlayGroup = new CharacterOverlayGroup(params);
        }
    };*/

    const Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Game_Interpreter_pluginCommand.call(this, command, args);

        const characterOverlayGroup = $gameSystem.characterOverlayGroup;
        switch (command) {
            case "CharacterOverlay_setOrder":
                characterOverlayGroup.setOrder(args);
                break;
            case "CharacterOverlay_setActive":
                characterOverlayGroup.setActive(args);
                break;
            case "CharacterOverlay_activate":
                characterOverlayGroup.activate(args);
                break;
            case "CharacterOverlay_inactivate":
                characterOverlayGroup.inactivate(args);
                break;
            case "CharacterOverlay_activateAll":
                characterOverlayGroup.activateAll();
                break;
            case "CharacterOverlay_inactivateAll":
                characterOverlayGroup.inactivateAll();
                break;
            case "CharacterOverlay_setVisible":
                characterOverlayGroup.setVisible(args);
                break;
            case "CharacterOverlay_show":
                characterOverlayGroup.show(args);
                break;
            case "CharacterOverlay_hide":
                characterOverlayGroup.hide(args);
                break;
            case "CharacterOverlay_showAll":
                characterOverlayGroup.showAll();
                break;
            case "CharacterOverlay_hideAll":
                characterOverlayGroup.hideAll();
                break;
            case "CharacterOverlay_alpha":
                characterOverlayGroup.character(args[0]).alpha = Number(args[1]);
                break;
            case "CharacterOverlay_setParts":
                const partsState: CharacterOverlayPartsState = {};
                if (args.length % 2 !== 1) throw new Error(`CharacterOverlay_setPartsの引数は奇数である必要があります`);
                for (let i = 1; i < args.length; i += 2) {
                    partsState[args[i]] = Number(args[i + 1]);
                }
                characterOverlayGroup.character(args[0]).setParts(partsState);
                break;
        }

    };
})();
