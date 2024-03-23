"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
  inject.js in next-theme/hexo-theme-next by next-theme
  under GNU AFFERO GENERAL PUBLIC LICENSE v3.0 OR LATER
  https://github.com/next-theme/hexo-theme-next/blob/master/LICENSE.md
 */
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const injects_point_1 = __importDefault(require("./injects-point"));
const defaultExtname = '.pug';
class StylusInject {
    files;
    base_dir;
    constructor(base_dir) {
        this.base_dir = base_dir;
        this.files = [];
    }
    push(file) {
        this.files.push(node_path_1.default.resolve(this.base_dir, file));
    }
}
// Defining view types
class ViewInject {
    base_dir;
    raws;
    constructor(base_dir) {
        this.base_dir = base_dir;
        this.raws = [];
    }
    raw(name, raw, ...args) {
        // Set default extname
        if (node_path_1.default.extname(name) === '') {
            name += defaultExtname;
        }
        this.raws.push({ name, raw, args });
    }
    file(name, file, ...args) {
        // Set default extname from file's extname
        if (node_path_1.default.extname(name) === '') {
            name += node_path_1.default.extname(file);
        }
        // Get absolute path base on hexo dir
        this.raw(name, node_fs_1.default.readFileSync(node_path_1.default.resolve(this.base_dir, file), 'utf8'), ...args);
    }
}
// Init injects
function initInject(base_dir) {
    const injects = {};
    injects_point_1.default.styles.forEach(item => {
        injects[item] = new StylusInject(base_dir);
    });
    injects_point_1.default.views.forEach(item => {
        injects[item] = new ViewInject(base_dir);
    });
    return injects;
}
exports.default = (hexo) => {
    // Exec theme_inject filter
    const injects = initInject(hexo.base_dir);
    hexo.execFilterSync('theme_inject', injects);
    hexo.theme.config.injects = {};
    // Inject stylus
    injects_point_1.default.styles.forEach(type => {
        hexo.theme.config.injects[type] = injects[type].files;
    });
    // Inject views
    injects_point_1.default.views.forEach(type => {
        const configs = Object.create(null);
        hexo.theme.config.injects[type] = [];
        // Add or override view.
        injects[type].raws.forEach((injectObj, index) => {
            const name = `inject/${type}/${injectObj.name}`;
            hexo.theme.setView(name, injectObj.raw);
            configs[name] = {
                layout: name,
                locals: injectObj.args[0],
                options: injectObj.args[1],
                order: injectObj.args[2] || index
            };
        });
        // Views sort.
        hexo.theme.config.injects[type] = Object.values(configs)
            .sort((x, y) => x.order - y.order);
    });
};
