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
var CharacterOverlay = /** @class */ (function () {
    function CharacterOverlay(characterName, partsNames, width, height, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.horizontalAlign, horizontalAlign = _c === void 0 ? "right" : _c, _d = _b.verticalAlign, verticalAlign = _d === void 0 ? "bottom" : _d, top = _b.top, right = _b.right, bottom = _b.bottom, left = _b.left, _e = _b.active, active = _e === void 0 ? true : _e, _f = _b.visible, visible = _f === void 0 ? true : _f, _g = _b.alpha, alpha = _g === void 0 ? 1.0 : _g, partsState = _b.partsState, onDraw = _b.onDraw;
        this.partsState = {};
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
        this.moveTo({ top: top, right: right, bottom: bottom, left: left });
        this.calcAnchors();
        this.active = active;
        this.visible = visible;
        this.alpha = alpha;
        this.onDraw = onDraw;
        var i = this.partsNames.length;
        var container = this.container;
        while (i--)
            container.addChild(new PIXI.Container()); // layers
        if (partsState)
            this.setParts(partsState);
    }
    Object.defineProperty(CharacterOverlay.prototype, "x", {
        get: function () { return this._x; },
        set: function (x) {
            this._x = x;
            if (this.container.x !== x)
                this.drawPosition();
            this.notifyDraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterOverlay.prototype, "y", {
        get: function () { return this._y; },
        set: function (y) {
            this._y = y;
            if (this.container.y !== y)
                this.drawPosition();
            this.notifyDraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterOverlay.prototype, "active", {
        get: function () { return this._active; },
        set: function (active) {
            this._active = active;
            this.drawActive();
            this.notifyDraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterOverlay.prototype, "visible", {
        get: function () { return this._visible; },
        set: function (visible) {
            this._visible = visible;
            this.drawVisible();
            this.notifyDraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterOverlay.prototype, "alpha", {
        get: function () { return this._alpha; },
        set: function (alpha) {
            this._alpha = alpha;
            this.drawAlpha();
            this.notifyDraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CharacterOverlay.prototype, "container", {
        get: function () {
            if (!this._container)
                this._container = new PIXI.Container();
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    CharacterOverlay.prototype.moveTo = function (_a) {
        var top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
        if (left != null) {
            this.x = left;
        }
        else if (right != null) {
            this.x = Graphics.boxWidth - right - this.width;
        }
        if (top != null) {
            this.y = top || 0;
        }
        else if (bottom != null) {
            this.y = Graphics.boxHeight - bottom - this.height;
        }
    };
    CharacterOverlay.prototype.setParts = function (partsName, id) {
        var partsState = typeof partsName === "string" ? (_a = {}, _a[partsName] = id, _a) :
            partsName;
        for (var _i = 0, _b = Object.keys(partsState); _i < _b.length; _i++) {
            var _partsName = _b[_i];
            var _id = partsState[_partsName];
            this.partsSprite(_partsName, _id);
            this.partsState[_partsName] = _id;
        }
        this.drawParts();
        this.notifyDraw();
        var _a;
    };
    // セーブ復帰用
    CharacterOverlay.prototype.draw = function () {
        this.drawPosition();
        this.drawActive();
        this.drawVisible();
        this.drawAlpha();
        this.drawParts();
        this.notifyDraw();
    };
    CharacterOverlay.prototype.loadPartsImageFromFile = function (partsName, id) {
        var bitmap = ImageManager.loadBitmap("img/character_overlays/", this.characterName + "_" + partsName + "_" + id);
        return bitmap._image;
    };
    CharacterOverlay.prototype.partsSprite = function (partsName, id) {
        if (!this.sprites)
            this.sprites = {};
        if (!this.sprites[partsName])
            this.sprites[partsName] = {};
        if (!this.sprites[partsName][id]) {
            var image = this.loadPartsImageFromFile(partsName, id);
            var sprite = new PIXI.Sprite(PIXI.Texture.from(image));
            sprite.anchor.x = this.anchorX;
            sprite.anchor.y = this.anchorY;
            sprite.x = this.childX;
            sprite.y = this.childY;
            this.sprites[partsName][id] = sprite;
        }
        return this.sprites[partsName][id];
    };
    CharacterOverlay.prototype.calcAnchors = function () {
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
    };
    CharacterOverlay.prototype.drawParts = function () {
        var container = this.container;
        var index = 0;
        if (!this.drawnPartsState)
            this.drawnPartsState = {};
        for (var _i = 0, _a = this.partsNames; _i < _a.length; _i++) {
            var partsName = _a[_i];
            var id = this.partsState[partsName] || 0;
            var drawnId = this.drawnPartsState[partsName] || 0;
            if (id === drawnId)
                continue;
            var layer = container.getChildAt(index);
            if (drawnId)
                layer.removeChildren();
            if (id) {
                var sprite = this.partsSprite(partsName, id);
                layer.addChild(sprite);
            }
            this.drawnPartsState[partsName] = id;
            ++index;
        }
    };
    CharacterOverlay.prototype.drawPosition = function () {
        this.container.x = this.x;
        this.container.y = this.y;
    };
    CharacterOverlay.prototype.drawActive = function () {
        var container = this.container;
        if (this.active) {
            if (container.filters)
                container.filters = null;
        }
        else {
            if (!container.filters) {
                var cmf = new PIXI.filters.ColorMatrixFilter();
                cmf.brightness(0.6);
                container.filters = [cmf];
            }
        }
    };
    CharacterOverlay.prototype.drawVisible = function () {
        this.container.visible = this.visible;
    };
    CharacterOverlay.prototype.drawAlpha = function () {
        this.container.alpha = this.alpha;
    };
    CharacterOverlay.prototype.notifyDraw = function () {
        if (this.onDraw)
            this.onDraw(this);
    };
    return CharacterOverlay;
}());
/**
 * 立ち絵グループ
 */
var CharacterOverlayGroup = /** @class */ (function () {
    /**
     * constructor
     * @param align 寄せ方向
     * @param pack 非表示キャラ分つめるか
     * @param sidePadding 端のpadding
     * @param betweenPadding キャラ間のpadding
     */
    function CharacterOverlayGroup(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.align, align = _c === void 0 ? "right" : _c, _d = _b.pack, pack = _d === void 0 ? true : _d, _e = _b.sidePadding, sidePadding = _e === void 0 ? 0 : _e, _f = _b.betweenPadding, betweenPadding = _f === void 0 ? 0 : _f, onAdd = _b.onAdd;
        this.characterNames = [];
        this.characterOverlays = {};
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
    Object.defineProperty(CharacterOverlayGroup.prototype, "container", {
        get: function () {
            if (!this._container)
                this._container = new PIXI.Container();
            return this._container;
        },
        enumerable: true,
        configurable: true
    });
    CharacterOverlayGroup.prototype.addCharacter = function (characterOverlay) {
        this.characterOverlays[characterOverlay.characterName] = characterOverlay;
        this.characterNames.push(characterOverlay.characterName);
        this.setPositions();
        this.setChildren();
        if (this.onAdd)
            this.onAdd(this, characterOverlay);
    };
    CharacterOverlayGroup.prototype.character = function (characterName) {
        return this.characterOverlays[characterName];
    };
    CharacterOverlayGroup.prototype.setOrder = function (characterNames) {
        this.characterNames = characterNames;
        this.setPositions();
    };
    CharacterOverlayGroup.prototype.setActive = function (characterName) {
        var activeCharacterNamesHash = {};
        for (var _i = 0, _a = characterName instanceof Array ? characterName : [characterName]; _i < _a.length; _i++) {
            var _characterName = _a[_i];
            activeCharacterNamesHash[_characterName] = true;
        }
        for (var _b = 0, _c = this.characterNames; _b < _c.length; _b++) {
            var _characterName = _c[_b];
            this.characterOverlays[_characterName].active = activeCharacterNamesHash[_characterName];
        }
    };
    CharacterOverlayGroup.prototype.activate = function (characterName) {
        for (var _i = 0, _a = characterName instanceof Array ? characterName : [characterName]; _i < _a.length; _i++) {
            var _characterName = _a[_i];
            this.characterOverlays[_characterName].active = true;
        }
    };
    CharacterOverlayGroup.prototype.inactivate = function (characterName) {
        for (var _i = 0, _a = characterName instanceof Array ? characterName : [characterName]; _i < _a.length; _i++) {
            var _characterName = _a[_i];
            this.characterOverlays[_characterName].active = false;
        }
    };
    CharacterOverlayGroup.prototype.activateAll = function () {
        this.activate(this.characterNames);
    };
    CharacterOverlayGroup.prototype.inactivateAll = function () {
        this.inactivate(this.characterNames);
    };
    CharacterOverlayGroup.prototype.setVisible = function (characterName) {
        var visibleCharacterNamesHash = {};
        for (var _i = 0, _a = characterName instanceof Array ? characterName : [characterName]; _i < _a.length; _i++) {
            var _characterName = _a[_i];
            visibleCharacterNamesHash[_characterName] = true;
        }
        for (var _b = 0, _c = this.characterNames; _b < _c.length; _b++) {
            var _characterName = _c[_b];
            this.characterOverlays[_characterName].visible = visibleCharacterNamesHash[_characterName];
        }
        this.setPositions();
    };
    CharacterOverlayGroup.prototype.show = function (characterName) {
        for (var _i = 0, _a = characterName instanceof Array ? characterName : [characterName]; _i < _a.length; _i++) {
            var _characterName = _a[_i];
            this.characterOverlays[_characterName].visible = true;
        }
        this.setPositions();
    };
    CharacterOverlayGroup.prototype.hide = function (characterName) {
        for (var _i = 0, _a = characterName instanceof Array ? characterName : [characterName]; _i < _a.length; _i++) {
            var _characterName = _a[_i];
            this.characterOverlays[_characterName].visible = false;
        }
        this.setPositions();
    };
    CharacterOverlayGroup.prototype.showAll = function () {
        this.show(this.characterNames);
    };
    CharacterOverlayGroup.prototype.hideAll = function () {
        this.hide(this.characterNames);
    };
    // セーブ復帰用
    CharacterOverlayGroup.prototype.draw = function () {
        this.setChildren();
        for (var _i = 0, _a = this.characterNames; _i < _a.length; _i++) {
            var characterName = _a[_i];
            var characterOverlay = this.character(characterName);
            characterOverlay.draw();
        }
    };
    CharacterOverlayGroup.prototype.setPositions = function () {
        this.setPositionsVertical();
    };
    CharacterOverlayGroup.prototype.setPositionsVertical = function () {
        var offset = this.sidePadding;
        var characterNames = this.characterNames.slice(); // copy
        if (this.align === "right")
            characterNames.reverse();
        for (var _i = 0, _a = this.characterNames; _i < _a.length; _i++) {
            var characterName = _a[_i];
            var characterOverlay = this.character(characterName);
            if (this.pack && !characterOverlay.visible)
                continue;
            characterOverlay.moveTo((_b = {}, _b[this.align] = offset, _b));
            offset += characterOverlay.width + this.betweenPadding;
        }
        var _b;
    };
    CharacterOverlayGroup.prototype.setChildren = function () {
        var priority = this.getPriority();
        var container = this.container;
        this.container.removeChildren();
        for (var _i = 0, priority_1 = priority; _i < priority_1.length; _i++) {
            var characterName = priority_1[_i];
            var characterOverlay = this.character(characterName);
            container.addChild(characterOverlay.container);
        }
    };
    // active->characterNamesの優先度で重ね順を決定
    CharacterOverlayGroup.prototype.getPriority = function () {
        var priority = [];
        for (var _i = 0, _a = this.characterNames; _i < _a.length; _i++) {
            var characterName = _a[_i];
            var characterOverlay = this.character(characterName);
            if (characterOverlay.active)
                priority.unshift(characterName);
        }
        for (var _b = 0, _c = this.characterNames; _b < _c.length; _b++) {
            var characterName = _c[_b];
            var characterOverlay = this.character(characterName);
            if (!characterOverlay.active)
                priority.unshift(characterName);
        }
        return priority;
    };
    return CharacterOverlayGroup;
}());
(function () {
    Scene_Base.prototype.createCharacterOverlayLayer = function () {
        var width = Graphics.boxWidth;
        var height = Graphics.boxHeight;
        var x = (Graphics.width - width) / 2;
        var y = (Graphics.height - height) / 2;
        this._characterOverlayLayer = new WindowLayer();
        this._characterOverlayLayer.move(x, y, width, height);
        this.addChild(this._characterOverlayLayer);
        this._characterOverlayLayer.addChild($gameSystem.characterOverlayGroup.container);
        $gameSystem.characterOverlayGroup.draw();
    };
    // 立ち絵レイヤーをウインドウレイヤーの下に作ってしまう
    var createWindowLayer = Scene_Base.prototype.createWindowLayer;
    Scene_Base.prototype.createWindowLayer = function () {
        this.createCharacterOverlayLayer();
        createWindowLayer.apply(this, arguments);
    };
    var params = PluginManager.parameters("CharacterOverlay");
    // 新規ゲーム
    var createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        createGameObjects.apply(this, arguments);
        if (!$gameSystem.characterOverlayGroup) {
            var align = params.align;
            // tslint:disable-next-line no-eval
            var pack = eval(params.pack || "true");
            var sidePadding = Number(params.sidePadding || 0);
            var betweenPadding = Number(params.betweenPadding || 0);
            var characterOverlayGroup = new CharacterOverlayGroup({
                align: align,
                pack: pack,
                sidePadding: sidePadding,
                betweenPadding: betweenPadding,
            });
            $gameSystem.characterOverlayGroup = characterOverlayGroup;
            for (var index = 0; index < 4; ++index) {
                var characterName = params["characterName" + index];
                if (!characterName)
                    continue;
                var partsNames = params["partsNames" + index].split(/ +/);
                var width = Number(params["width" + index]);
                var height = Number(params["height" + index]);
                var horizontalAlign = params["horizontalAlign" + index];
                var verticalAlign = params["verticalAlign" + index];
                var top_1 = params["top" + index] == null ? undefined : Number(params["top" + index]);
                var bottom = params["bottom" + index] == null ? undefined : Number(params["bottom" + index]);
                // tslint:disable-next-line no-eval
                var active = eval(params["active" + index] || "true");
                // tslint:disable-next-line no-eval
                var visible = eval(params["visible" + index] || "true");
                var alpha = params["alpha" + index] == null ? undefined : Number(params["alpha" + index]);
                var characterOverlay = new CharacterOverlay(characterName, partsNames, width, height, {
                    horizontalAlign: horizontalAlign,
                    verticalAlign: verticalAlign,
                    top: top_1,
                    bottom: bottom,
                    active: active,
                    visible: visible,
                    alpha: alpha,
                });
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
    var Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        Game_Interpreter_pluginCommand.call(this, command, args);
        var characterOverlayGroup = $gameSystem.characterOverlayGroup;
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
                var partsState = {};
                if (args.length % 2 !== 1)
                    throw new Error("CharacterOverlay_setParts\u306E\u5F15\u6570\u306F\u5947\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059");
                for (var i = 1; i < args.length; i += 2) {
                    partsState[args[i]] = Number(args[i + 1]);
                }
                characterOverlayGroup.character(args[0]).setParts(partsState);
                break;
        }
    };
})();
