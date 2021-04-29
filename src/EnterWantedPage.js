"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.EnterWantedPage = void 0;
var selenium_webdriver_1 = require("selenium-webdriver");
var EnterWantedPage = /** @class */ (function () {
    function EnterWantedPage(driver) {
        this.url = "https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html";
        this.title = selenium_webdriver_1.By.css(".titleBar");
        this.header = selenium_webdriver_1.By.css(".fieldHeader");
        this.driver = driver;
    }
    EnterWantedPage.prototype.navigate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.driver.get(this.url)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementLocated(this.title))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnterWantedPage.prototype.getTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var titles, elements, i, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        titles = [];
                        console.log("read element");
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementsLocated(this.title))];
                    case 1:
                        _c.sent();
                        console.log("read find element");
                        return [4 /*yield*/, this.driver.findElements(this.title)];
                    case 2:
                        elements = _c.sent();
                        i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(i < elements.length)) return [3 /*break*/, 7];
                        _b = (_a = titles).push;
                        return [4 /*yield*/, elements[i].getText()];
                    case 4: return [4 /*yield*/, (_c.sent())];
                    case 5:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 3];
                    case 7:
                        console.log("Titles == " + titles);
                        return [2 /*return*/, titles];
                }
            });
        });
    };
    EnterWantedPage.prototype.getHeaders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var titles, elements, i, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        titles = [];
                        console.log("read header");
                        return [4 /*yield*/, this.driver.wait(selenium_webdriver_1.until.elementsLocated(this.header))];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.driver.findElements(this.header)];
                    case 2:
                        elements = _c.sent();
                        i = 0;
                        _c.label = 3;
                    case 3:
                        if (!(i < elements.length)) return [3 /*break*/, 7];
                        _b = (_a = titles).push;
                        return [4 /*yield*/, elements[i].getText()];
                    case 4: return [4 /*yield*/, (_c.sent())];
                    case 5:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 3];
                    case 7:
                        console.log("Headers == " + titles);
                        return [2 /*return*/, titles];
                }
            });
        });
    };
    return EnterWantedPage;
}());
exports.EnterWantedPage = EnterWantedPage;
var sendKeys = function (driver, elementBy, keys) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(elementBy))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, driver.findElement(elementBy).sendKeys(keys)];
            }
        });
    });
};
var click = function (driver, elementBy) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(elementBy))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(elementBy)];
                case 2: return [2 /*return*/, (_a.sent()).click()];
            }
        });
    });
};
