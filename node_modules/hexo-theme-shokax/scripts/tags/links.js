"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const js_yaml_1 = __importDefault(require("js-yaml"));
function linkGrid(args, content) {
    const theme = hexo.theme.config;
    if (!args[0] && !content) {
        return;
    }
    if (args[0]) {
        const filepath = node_path_1.default.join(hexo.source_dir, args[0]);
        if (node_fs_1.default.existsSync(filepath)) {
            content = node_fs_1.default.readFileSync(filepath, { encoding: 'utf-8' });
        }
    }
    if (!content) {
        return;
    }
    const list = js_yaml_1.default.load(content);
    let result = '';
    list.forEach((item) => {
        if (!item.url || !item.site) {
            return;
        }
        let item_image = item.image || theme.assets + '/404.png';
        if (!item_image.startsWith('//') && !item_image.startsWith('http')) {
            item_image = theme.statics + item_image;
        }
        item.color = item.color ? ` style="--block-color:${item.color};"` : '';
        result += `<div class="item" title="${item.owner || item.site}"${item.color}>`;
        result += `<a href="${item.url}" class="image" data-background-image="${item_image}"></a>
        <div class="info">
        <a href="${item.url}" class="title">${item.site}</a>
        <p class="desc">${item.desc || item.url}</p>
        </div></div>`;
    });
    return `<div class="links">${result}</div>`;
}
hexo.extend.tag.register('links', linkGrid, { ends: true });
hexo.extend.tag.register('linksfile', linkGrid, { ends: false, async: true });
