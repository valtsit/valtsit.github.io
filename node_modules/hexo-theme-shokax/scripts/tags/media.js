'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* global hexo */
const js_yaml_1 = __importDefault(require("js-yaml"));
function postMedia(args, content) {
    if (!args[0] || !content) {
        return;
    }
    const list = js_yaml_1.default.load(content);
    switch (args[0]) {
        case 'video':
        case 'audio':
            return `<div class="media-container"><div class="player" data-type="${args[0]}" data-src='${JSON.stringify(list)}'></div></div>`;
    }
}
hexo.extend.tag.register('media', postMedia, { ends: true });
