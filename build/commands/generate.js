"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'generate',
    alias: ['g'],
    run: function (toolbox) { return __awaiter(_this, void 0, void 0, function () {
        var parameters, generate, info, name;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parameters = toolbox.parameters, generate = toolbox.template.generate, info = toolbox.print.info;
                    name = parameters.first;
                    return [4 /*yield*/, generate({
                            template: 'model.js.ejs',
                            target: "models/" + name + "-model.js",
                            props: { name: name }
                        })];
                case 1:
                    _a.sent();
                    info("Generated file at models/" + name + "-model.js");
                    return [2 /*return*/];
            }
        });
    }); }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZ2VuZXJhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBdUJBOztBQXJCQSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSSxFQUFFLFVBQVU7SUFDaEIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ1osR0FBRyxFQUFFLFVBQU8sT0FBdUI7Ozs7O29CQUUvQixVQUFVLEdBR1IsT0FBTyxXQUhDLEVBQ0UsUUFBUSxHQUVsQixPQUFPLGtCQUZXLEVBQ1gsSUFBSSxHQUNYLE9BQU8sV0FESSxDQUNKO29CQUVMLElBQUksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFBO29CQUU3QixxQkFBTSxRQUFRLENBQUM7NEJBQ2IsUUFBUSxFQUFFLGNBQWM7NEJBQ3hCLE1BQU0sRUFBRSxZQUFVLElBQUksY0FBVzs0QkFDakMsS0FBSyxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7eUJBQ2hCLENBQUMsRUFBQTs7b0JBSkYsU0FJRSxDQUFBO29CQUVGLElBQUksQ0FBQyw4QkFBNEIsSUFBSSxjQUFXLENBQUMsQ0FBQTs7OztTQUNsRDtDQUNGLENBQUEifQ==