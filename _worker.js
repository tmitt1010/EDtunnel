const _0x5240f1 = _0x4161;
(function (_0x39bcf5, _0x3dcb94) {
    const _0x3b66c1 = _0x4161;
    const _0x285d50 = _0x39bcf5();
    while (!![]) {
        try {
            const _0x38acd4 = -parseInt(_0x3b66c1(0x0)) / 0x1 * (parseInt(_0x3b66c1(0x1)) / 0x2) + -parseInt(_0x3b66c1(0x2)) / 0x3 + -parseInt(_0x3b66c1(0x3)) / 0x4 * (parseInt(_0x3b66c1(0x4)) / 0x5) + parseInt(_0x3b66c1(0x5)) / 0x6 + -parseInt(_0x3b66c1(0x6)) / 0x7 + -parseInt(_0x3b66c1(0x7)) / 0x8 + parseInt(_0x3b66c1(0x8)) / 0x9 * (parseInt(_0x3b66c1(0x9)) / 0xa);
            if (_0x38acd4 === _0x3dcb94) {
                break;
            } else {
                _0x285d50['push'](_0x285d50['shift']());
            }
        } catch (_0x415257) {
            _0x285d50['push'](_0x285d50['shift']());
        }
    }
}(_0x50e3, 0x4c4ca));
import { connect } from 'cloudflare:sockets';
let userID = _0x5240f1(0xa);
const proxyIPs = [
    'cdn.xn--b6gac.eu.org:443',
    _0x5240f1(0xb)
];
let proxyIP = proxyIPs[Math[_0x5240f1(0xc)](Math[_0x5240f1(0xd)]() * proxyIPs['length'])];
let proxyPort = proxyIP[_0x5240f1(0xe)](':') ? proxyIP[_0x5240f1(0xf)](':')[0x1] : '443';
let socks5Address = '';
let socks5Relay = ![];
if (!isValidUUID(userID)) {
    throw new Error(_0x5240f1(0x10));
}
let parsedSocks5Address = {};
let enableSocks = ![];
export default {
    async 'fetch'(_0x1c9f83, _0x4c58e0, _0x56120d) {
        const _0x2dfb9a = _0x5240f1;
        try {
            const {
                UUID: _0x119d4d,
                PROXYIP: _0x3142f5,
                SOCKS5: _0x4b8207,
                SOCKS5_RELAY: _0x262451
            } = _0x4c58e0;
            const _0xbf4240 = new URL(_0x1c9f83['url']);
            const _0x41e2a1 = {
                'userID': _0x119d4d || userID,
                'socks5Address': _0x4b8207 || socks5Address,
                'socks5Relay': _0x262451 === 'true' || socks5Relay,
                'proxyIP': null,
                'proxyPort': null,
                'enableSocks': ![],
                'parsedSocks5Address': {}
            };
            let _0x2d5fbc = _0xbf4240[_0x2dfb9a(0x11)][_0x2dfb9a(0x12)](_0x2dfb9a(0x13));
            let _0x3e9ce0 = _0xbf4240[_0x2dfb9a(0x11)][_0x2dfb9a(0x12)](_0x2dfb9a(0x14));
            let _0x4f0218 = _0xbf4240[_0x2dfb9a(0x11)][_0x2dfb9a(0x12)](_0x2dfb9a(0x15));
            if (!_0x2d5fbc && !_0x3e9ce0 && !_0x4f0218) {
                const _0x5d6c8d = parseEncodedQueryParams(_0xbf4240['pathname']);
                _0x2d5fbc = _0x2d5fbc || _0x5d6c8d[_0x2dfb9a(0x13)];
                _0x3e9ce0 = _0x3e9ce0 || _0x5d6c8d[_0x2dfb9a(0x14)];
                _0x4f0218 = _0x4f0218 || _0x5d6c8d['socks5_relay'];
            }
            if (_0x2d5fbc) {
                const _0x2c927d = /^([a-zA-Z0-9][-a-zA-Z0-9.]*(\.[a-zA-Z0-9][-a-zA-Z0-9.]*)+|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[[0-9a-fA-F:]+\]):\d{1,5}$/;
                const _0x412bfe = _0x2d5fbc[_0x2dfb9a(0xf)](',')[_0x2dfb9a(0x16)](_0x22d9e3 => _0x22d9e3[_0x2dfb9a(0x17)]());
                const _0x580817 = _0x412bfe[_0x2dfb9a(0x18)](_0x77e562 => _0x2c927d[_0x2dfb9a(0x19)](_0x77e562));
                if (!_0x580817) {
                    console[_0x2dfb9a(0x1a)](_0x2dfb9a(0x1b), _0x2d5fbc);
                    _0x2d5fbc = null;
                }
            }
            if (_0x3e9ce0) {
                const _0x453d3b = /^(([^:@]+:[^:@]+@)?[a-zA-Z0-9][-a-zA-Z0-9.]*(\.[a-zA-Z0-9][-a-zA-Z0-9.]*)+|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}):\d{1,5}$/;
                const _0x1c68f1 = _0x3e9ce0[_0x2dfb9a(0xf)](',')[_0x2dfb9a(0x16)](_0x44db0d => _0x44db0d[_0x2dfb9a(0x17)]());
                const _0x4a99e1 = _0x1c68f1['every'](_0x107f6c => _0x453d3b[_0x2dfb9a(0x19)](_0x107f6c));
                if (!_0x4a99e1) {
                    console[_0x2dfb9a(0x1a)](_0x2dfb9a(0x1c), _0x3e9ce0);
                    _0x3e9ce0 = null;
                }
            }
            _0x41e2a1[_0x2dfb9a(0x1d)] = _0x3e9ce0 || _0x41e2a1['socks5Address'];
            _0x41e2a1[_0x2dfb9a(0x1e)] = _0x4f0218 === _0x2dfb9a(0x1f) || _0x41e2a1[_0x2dfb9a(0x1e)];
            console[_0x2dfb9a(0x20)](_0x2dfb9a(0x21), _0x41e2a1[_0x2dfb9a(0x22)], _0x41e2a1[_0x2dfb9a(0x1d)], _0x41e2a1['socks5Relay'], _0x2d5fbc);
            const _0xf18a8 = handleProxyConfig(_0x2d5fbc || _0x3142f5);
            _0x41e2a1[_0x2dfb9a(0x23)] = _0xf18a8['ip'];
            _0x41e2a1['proxyPort'] = _0xf18a8[_0x2dfb9a(0x24)];
            console[_0x2dfb9a(0x20)]('使用代理:', _0x41e2a1[_0x2dfb9a(0x23)], _0x41e2a1[_0x2dfb9a(0x25)]);
            if (_0x41e2a1[_0x2dfb9a(0x1d)]) {
                try {
                    const _0x1fe1ea = selectRandomAddress(_0x41e2a1[_0x2dfb9a(0x1d)]);
                    _0x41e2a1[_0x2dfb9a(0x26)] = socks5AddressParser(_0x1fe1ea);
                    _0x41e2a1[_0x2dfb9a(0x27)] = !![];
                } catch (_0x277507) {
                    console['log'](_0x277507['toString']());
                    _0x41e2a1[_0x2dfb9a(0x27)] = ![];
                }
            }
            const _0x2de57d = _0x41e2a1['userID']['includes'](',') ? _0x41e2a1[_0x2dfb9a(0x22)][_0x2dfb9a(0xf)](',')[_0x2dfb9a(0x16)](_0x544fee => _0x544fee[_0x2dfb9a(0x17)]()) : [_0x41e2a1['userID']];
            const _0x3279e6 = _0x1c9f83[_0x2dfb9a(0x28)][_0x2dfb9a(0x12)]('Host');
            const _0x237c26 = _0xbf4240['pathname']['substring'](0x1);
            const _0x4ee3cf = _0x2de57d[_0x2dfb9a(0x29)] === 0x1 ? _0x237c26 === _0x2de57d[0x0] || _0x237c26 === _0x2dfb9a(0x2a) + _0x2de57d[0x0] || _0x237c26 === _0x2dfb9a(0x2b) + _0x2de57d[0x0] ? _0x2de57d[0x0] : null : _0x2de57d[_0x2dfb9a(0x2c)](_0x3d782c => {
                const _0x31f0f6 = _0x2dfb9a;
                const _0xa196f7 = [
                    _0x3d782c,
                    _0x31f0f6(0x2a) + _0x3d782c,
                    _0x31f0f6(0x2b) + _0x3d782c
                ];
                return _0xa196f7[_0x31f0f6(0x2d)](_0x5b907b => _0x237c26[_0x31f0f6(0x2e)](_0x5b907b));
            });
            if (_0x1c9f83[_0x2dfb9a(0x28)][_0x2dfb9a(0x12)](_0x2dfb9a(0x2f)) !== 'websocket') {
                if (_0xbf4240[_0x2dfb9a(0x30)] === _0x2dfb9a(0x31)) {
                    return new Response(JSON['stringify'](_0x1c9f83['cf'], null, 0x4), {
                        'status': 0xc8,
                        'headers': { 'Content-Type': _0x2dfb9a(0x32) }
                    });
                }
                if (_0x4ee3cf) {
                    if (_0xbf4240['pathname'] === '/' + _0x4ee3cf || _0xbf4240[_0x2dfb9a(0x30)] === _0x2dfb9a(0x33) + _0x4ee3cf) {
                        const _0x356d51 = _0xbf4240[_0x2dfb9a(0x30)][_0x2dfb9a(0x2e)](_0x2dfb9a(0x33));
                        const _0x515d8d = _0x3142f5 ? _0x3142f5['split'](',')[_0x2dfb9a(0x16)](_0x138422 => _0x138422['trim']()) : _0x41e2a1[_0x2dfb9a(0x23)];
                        const _0x4d6f98 = _0x356d51 ? GenSub(_0x4ee3cf, _0x3279e6, _0x515d8d) : getConfig(_0x4ee3cf, _0x3279e6, _0x515d8d);
                        return new Response(_0x4d6f98, {
                            'status': 0xc8,
                            'headers': { 'Content-Type': _0x356d51 ? 'text/plain;charset=utf-8' : 'text/html;\x20charset=utf-8' }
                        });
                    } else if (_0xbf4240[_0x2dfb9a(0x30)] === _0x2dfb9a(0x34) + _0x4ee3cf) {
                        return fetch(_0x2dfb9a(0x35) + _0x3279e6 + '&uuid=' + _0x4ee3cf + _0x2dfb9a(0x36), { 'headers': _0x1c9f83['headers'] });
                    }
                }
                return handleDefaultPath(_0xbf4240, _0x1c9f83);
            } else {
                return await ProtocolOverWSHandler(_0x1c9f83, _0x41e2a1);
            }
        } catch (_0x112a4c) {
            return new Response(_0x112a4c[_0x2dfb9a(0x37)]());
        }
    }
};
async function handleDefaultPath(_0x5d5a68, _0x1f6ce9) {
    const _0x10461f = _0x5240f1;
    const _0x3c005b = _0x1f6ce9['headers'][_0x10461f(0x12)](_0x10461f(0x38));
    const _0x1ad06d = _0x10461f(0x39) + _0x3c005b + '\x20-\x20Cloud\x20Drive</title>\x0a\x09\x09\x20\x20<style>\x0a\x09\x09\x09\x20\x20body\x20{\x0a\x09\x09\x09\x09\x20\x20font-family:\x20Arial,\x20sans-serif;\x0a\x09\x09\x09\x09\x20\x20line-height:\x201.6;\x0a\x09\x09\x09\x09\x20\x20margin:\x200;\x0a\x09\x09\x09\x09\x20\x20padding:\x2020px;\x0a\x09\x09\x09\x09\x20\x20background-color:\x20#f4f4f4;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.container\x20{\x0a\x09\x09\x09\x09\x20\x20max-width:\x20800px;\x0a\x09\x09\x09\x09\x20\x20margin:\x20auto;\x0a\x09\x09\x09\x09\x20\x20background:\x20white;\x0a\x09\x09\x09\x09\x20\x20padding:\x2020px;\x0a\x09\x09\x09\x09\x20\x20border-radius:\x205px;\x0a\x09\x09\x09\x09\x20\x20box-shadow:\x200\x200\x2010px\x20rgba(0,0,0,0.1);\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20h1\x20{\x0a\x09\x09\x09\x09\x20\x20color:\x20#333;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.file-list\x20{\x0a\x09\x09\x09\x09\x20\x20list-style-type:\x20none;\x0a\x09\x09\x09\x09\x20\x20padding:\x200;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.file-list\x20li\x20{\x0a\x09\x09\x09\x09\x20\x20background:\x20#f9f9f9;\x0a\x09\x09\x09\x09\x20\x20margin-bottom:\x2010px;\x0a\x09\x09\x09\x09\x20\x20padding:\x2010px;\x0a\x09\x09\x09\x09\x20\x20border-radius:\x203px;\x0a\x09\x09\x09\x09\x20\x20display:\x20flex;\x0a\x09\x09\x09\x09\x20\x20align-items:\x20center;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.file-list\x20li:hover\x20{\x0a\x09\x09\x09\x09\x20\x20background:\x20#f0f0f0;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.file-icon\x20{\x0a\x09\x09\x09\x09\x20\x20margin-right:\x2010px;\x0a\x09\x09\x09\x09\x20\x20font-size:\x201.2em;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.file-link\x20{\x0a\x09\x09\x09\x09\x20\x20text-decoration:\x20none;\x0a\x09\x09\x09\x09\x20\x20color:\x20#0066cc;\x0a\x09\x09\x09\x09\x20\x20flex-grow:\x201;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.file-link:hover\x20{\x0a\x09\x09\x09\x09\x20\x20text-decoration:\x20underline;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.upload-area\x20{\x0a\x09\x09\x09\x09\x20\x20margin-top:\x2020px;\x0a\x09\x09\x09\x09\x20\x20padding:\x2040px;\x0a\x09\x09\x09\x09\x20\x20background:\x20#e9e9e9;\x0a\x09\x09\x09\x09\x20\x20border:\x202px\x20dashed\x20#aaa;\x0a\x09\x09\x09\x09\x20\x20border-radius:\x205px;\x0a\x09\x09\x09\x09\x20\x20text-align:\x20center;\x0a\x09\x09\x09\x09\x20\x20cursor:\x20pointer;\x0a\x09\x09\x09\x09\x20\x20transition:\x20all\x200.3s\x20ease;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.upload-area:hover,\x20.upload-area.drag-over\x20{\x0a\x09\x09\x09\x09\x20\x20background:\x20#d9d9d9;\x0a\x09\x09\x09\x09\x20\x20border-color:\x20#666;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.upload-area\x20h2\x20{\x0a\x09\x09\x09\x09\x20\x20margin-top:\x200;\x0a\x09\x09\x09\x09\x20\x20color:\x20#333;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20#fileInput\x20{\x0a\x09\x09\x09\x09\x20\x20display:\x20none;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.upload-icon\x20{\x0a\x09\x09\x09\x09\x20\x20font-size:\x2048px;\x0a\x09\x09\x09\x09\x20\x20color:\x20#666;\x0a\x09\x09\x09\x09\x20\x20margin-bottom:\x2010px;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.upload-text\x20{\x0a\x09\x09\x09\x09\x20\x20font-size:\x2018px;\x0a\x09\x09\x09\x09\x20\x20color:\x20#666;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.upload-status\x20{\x0a\x09\x09\x09\x09\x20\x20margin-top:\x2020px;\x0a\x09\x09\x09\x09\x20\x20font-style:\x20italic;\x0a\x09\x09\x09\x09\x20\x20color:\x20#666;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.file-actions\x20{\x0a\x09\x09\x09\x09\x20\x20display:\x20flex;\x0a\x09\x09\x09\x09\x20\x20gap:\x2010px;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.delete-btn\x20{\x0a\x09\x09\x09\x09\x20\x20color:\x20#ff4444;\x0a\x09\x09\x09\x09\x20\x20cursor:\x20pointer;\x0a\x09\x09\x09\x09\x20\x20background:\x20none;\x0a\x09\x09\x09\x09\x20\x20border:\x20none;\x0a\x09\x09\x09\x09\x20\x20padding:\x205px;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.delete-btn:hover\x20{\x0a\x09\x09\x09\x09\x20\x20color:\x20#ff0000;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.clear-all-btn\x20{\x0a\x09\x09\x09\x09\x20\x20background-color:\x20#ff4444;\x0a\x09\x09\x09\x09\x20\x20color:\x20white;\x0a\x09\x09\x09\x09\x20\x20border:\x20none;\x0a\x09\x09\x09\x09\x20\x20padding:\x2010px\x2015px;\x0a\x09\x09\x09\x09\x20\x20border-radius:\x204px;\x0a\x09\x09\x09\x09\x20\x20cursor:\x20pointer;\x0a\x09\x09\x09\x09\x20\x20margin-bottom:\x2020px;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20.clear-all-btn:hover\x20{\x0a\x09\x09\x09\x09\x20\x20background-color:\x20#ff0000;\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x20\x20</style>\x0a\x09\x20\x20</head>\x0a\x09\x20\x20<body>\x0a\x09\x09\x20\x20<div\x20class=\x22container\x22>\x0a\x09\x09\x09\x20\x20<h1>Cloud\x20Drive</h1>\x0a\x09\x09\x09\x20\x20<p>Welcome\x20to\x20your\x20personal\x20cloud\x20storage.\x20Here\x20are\x20your\x20uploaded\x20files:</p>\x0a\x09\x09\x09\x20\x20<button\x20id=\x22clearAllBtn\x22\x20class=\x22clear-all-btn\x22>Clear\x20All\x20Files</button>\x0a\x09\x09\x09\x20\x20<ul\x20id=\x22fileList\x22\x20class=\x22file-list\x22>\x0a\x09\x09\x09\x20\x20</ul>\x0a\x09\x09\x09\x20\x20<div\x20id=\x22uploadArea\x22\x20class=\x22upload-area\x22>\x0a\x09\x09\x09\x09\x20\x20<div\x20class=\x22upload-icon\x22>📁</div>\x0a\x09\x09\x09\x09\x20\x20<h2>Upload\x20a\x20File</h2>\x0a\x09\x09\x09\x09\x20\x20<p\x20class=\x22upload-text\x22>Drag\x20and\x20drop\x20a\x20file\x20here\x20or\x20click\x20to\x20select</p>\x0a\x09\x09\x09\x09\x20\x20<input\x20type=\x22file\x22\x20id=\x22fileInput\x22\x20hidden>\x0a\x09\x09\x09\x20\x20</div>\x0a\x09\x09\x09\x20\x20<div\x20id=\x22uploadStatus\x22\x20class=\x22upload-status\x22></div>\x0a\x09\x09\x20\x20</div>\x0a\x09\x09\x20\x20<script>\x0a\x09\x09\x09\x20\x20function\x20loadFileList()\x20{\x0a\x09\x09\x09\x09\x20\x20const\x20fileList\x20=\x20document.getElementById(\x27fileList\x27);\x0a\x09\x09\x09\x09\x20\x20const\x20savedFiles\x20=\x20JSON.parse(localStorage.getItem(\x27uploadedFiles\x27))\x20||\x20[];\x0a\x09\x09\x09\x09\x20\x20fileList.innerHTML\x20=\x20\x27\x27;\x0a\x09\x09\x09\x09\x20\x20savedFiles.forEach((file,\x20index)\x20=>\x20{\x0a\x09\x09\x09\x09\x09\x20\x20const\x20li\x20=\x20document.createElement(\x27li\x27);\x0a\x09\x09\x09\x09\x09\x20\x20li.innerHTML\x20=\x20`\x0a\x09\x09\x09\x09\x09\x09\x20\x20<span\x20class=\x22file-icon\x22>📄</span>\x0a\x09\x09\x09\x09\x09\x09\x20\x20<a\x20href=\x22https://ipfs.io/ipfs/${file.Url.split(\x27/\x27).pop()}\x22\x20class=\x22file-link\x22\x20target=\x22_blank\x22>${file.Name}</a>\x0a\x09\x09\x09\x09\x09\x09\x20\x20<div\x20class=\x22file-actions\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x20\x20<button\x20class=\x22delete-btn\x22\x20onclick=\x22deleteFile(${index})\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x20\x20<span\x20class=\x22file-icon\x22>❌</span>\x0a\x09\x09\x09\x09\x09\x09\x09\x20\x20</button>\x0a\x09\x09\x09\x09\x09\x09\x20\x20</div>\x0a\x09\x09\x09\x09\x09\x20\x20`;\x0a\x09\x09\x09\x09\x09\x20\x20fileList.appendChild(li);\x0a\x09\x09\x09\x09\x20\x20});\x0a\x09\x09\x09\x20\x20}\x0a\x0a\x09\x09\x09\x20\x20function\x20deleteFile(index)\x20{\x0a\x09\x09\x09\x09\x20\x20const\x20savedFiles\x20=\x20JSON.parse(localStorage.getItem(\x27uploadedFiles\x27))\x20||\x20[];\x0a\x09\x09\x09\x09\x20\x20savedFiles.splice(index,\x201);\x0a\x09\x09\x09\x09\x20\x20localStorage.setItem(\x27uploadedFiles\x27,\x20JSON.stringify(savedFiles));\x0a\x09\x09\x09\x09\x20\x20loadFileList();\x0a\x09\x09\x09\x20\x20}\x0a\x0a\x09\x09\x09\x20\x20document.getElementById(\x27clearAllBtn\x27).addEventListener(\x27click\x27,\x20()\x20=>\x20{\x0a\x09\x09\x09\x09\x20\x20if\x20(confirm(\x27Are\x20you\x20sure\x20you\x20want\x20to\x20clear\x20all\x20files?\x27))\x20{\x0a\x09\x09\x09\x09\x09\x20\x20localStorage.removeItem(\x27uploadedFiles\x27);\x0a\x09\x09\x09\x09\x09\x20\x20loadFileList();\x0a\x09\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20});\x0a\x0a\x09\x09\x09\x20\x20loadFileList();\x0a\x0a\x09\x09\x09\x20\x20const\x20uploadArea\x20=\x20document.getElementById(\x27uploadArea\x27);\x0a\x09\x09\x09\x20\x20const\x20fileInput\x20=\x20document.getElementById(\x27fileInput\x27);\x0a\x09\x09\x09\x20\x20const\x20uploadStatus\x20=\x20document.getElementById(\x27uploadStatus\x27);\x0a\x0a\x09\x09\x09\x20\x20uploadArea.addEventListener(\x27dragover\x27,\x20(e)\x20=>\x20{\x0a\x09\x09\x09\x09\x20\x20e.preventDefault();\x0a\x09\x09\x09\x09\x20\x20uploadArea.classList.add(\x27drag-over\x27);\x0a\x09\x09\x09\x20\x20});\x0a\x0a\x09\x09\x09\x20\x20uploadArea.addEventListener(\x27dragleave\x27,\x20()\x20=>\x20{\x0a\x09\x09\x09\x09\x20\x20uploadArea.classList.remove(\x27drag-over\x27);\x0a\x09\x09\x09\x20\x20});\x0a\x0a\x09\x09\x09\x20\x20uploadArea.addEventListener(\x27drop\x27,\x20(e)\x20=>\x20{\x0a\x09\x09\x09\x09\x20\x20e.preventDefault();\x0a\x09\x09\x09\x09\x20\x20uploadArea.classList.remove(\x27drag-over\x27);\x0a\x09\x09\x09\x09\x20\x20const\x20files\x20=\x20e.dataTransfer.files;\x0a\x09\x09\x09\x09\x20\x20if\x20(files.length)\x20{\x0a\x09\x09\x09\x09\x09\x20\x20handleFileUpload(files[0]);\x0a\x09\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20});\x0a\x0a\x09\x09\x09\x20\x20uploadArea.addEventListener(\x27click\x27,\x20()\x20=>\x20{\x0a\x09\x09\x09\x09\x20\x20fileInput.click();\x0a\x09\x09\x09\x20\x20});\x0a\x0a\x09\x09\x09\x20\x20fileInput.addEventListener(\x27change\x27,\x20(e)\x20=>\x20{\x0a\x09\x09\x09\x09\x20\x20const\x20file\x20=\x20e.target.files[0];\x0a\x09\x09\x09\x09\x20\x20if\x20(file)\x20{\x0a\x09\x09\x09\x09\x09\x20\x20handleFileUpload(file);\x0a\x09\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20});\x0a\x0a\x09\x09\x09\x20\x20async\x20function\x20handleFileUpload(file)\x20{\x0a\x09\x09\x09\x09\x20\x20uploadStatus.textContent\x20=\x20`Uploading:\x20${file.name}...`;\x0a\x09\x09\x09\x09\x20\x20\x0a\x09\x09\x09\x09\x20\x20const\x20formData\x20=\x20new\x20FormData();\x0a\x09\x09\x09\x09\x20\x20formData.append(\x27file\x27,\x20file);\x0a\x0a\x09\x09\x09\x09\x20\x20try\x20{\x0a\x09\x09\x09\x09\x09\x20\x20const\x20response\x20=\x20await\x20fetch(\x27https://app.img2ipfs.org/api/v0/add\x27,\x20{\x0a\x09\x09\x09\x09\x09\x09\x20\x20method:\x20\x27POST\x27,\x0a\x09\x09\x09\x09\x09\x09\x20\x20body:\x20formData,\x0a\x09\x09\x09\x09\x09\x09\x20\x20headers:\x20{\x0a\x09\x09\x09\x09\x09\x09\x09\x20\x20\x27Accept\x27:\x20\x27application/json\x27,\x0a\x09\x09\x09\x09\x09\x09\x20\x20},\x0a\x09\x09\x09\x09\x09\x20\x20});\x0a\x0a\x09\x09\x09\x09\x09\x20\x20if\x20(!response.ok)\x20{\x0a\x09\x09\x09\x09\x09\x09\x20\x20throw\x20new\x20Error(\x27Upload\x20failed\x27);\x0a\x09\x09\x09\x09\x09\x20\x20}\x0a\x0a\x09\x09\x09\x09\x09\x20\x20const\x20result\x20=\x20await\x20response.json();\x0a\x09\x09\x09\x09\x09\x20\x20uploadStatus.textContent\x20=\x20`File\x20uploaded\x20successfully!\x20IPFS\x20Hash:\x20${result.Hash}`;\x0a\x09\x09\x09\x09\x09\x20\x20\x0a\x09\x09\x09\x09\x09\x20\x20const\x20savedFiles\x20=\x20JSON.parse(localStorage.getItem(\x27uploadedFiles\x27))\x20||\x20[];\x0a\x09\x09\x09\x09\x09\x20\x20savedFiles.push(result);\x0a\x09\x09\x09\x09\x09\x20\x20localStorage.setItem(\x27uploadedFiles\x27,\x20JSON.stringify(savedFiles));\x0a\x09\x09\x09\x09\x09\x20\x20\x0a\x09\x09\x09\x09\x09\x20\x20loadFileList();\x0a\x09\x09\x09\x09\x09\x20\x20\x0a\x09\x09\x09\x09\x20\x20}\x20catch\x20(error)\x20{\x0a\x09\x09\x09\x09\x09\x20\x20console.error(\x27Error:\x27,\x20error);\x0a\x09\x09\x09\x09\x09\x20\x20uploadStatus.textContent\x20=\x20\x27Upload\x20failed.\x20Please\x20try\x20again.\x27;\x0a\x09\x09\x09\x09\x20\x20}\x0a\x09\x09\x09\x20\x20}\x0a\x09\x09\x20\x20</script>\x0a\x09\x20\x20</body>\x0a\x09\x20\x20</html>\x0a\x09';
    return new Response(_0x1ad06d, { 'headers': { 'content-type': _0x10461f(0x3a) } });
}
async function ProtocolOverWSHandler(_0x3547a4, _0x857c4f = null) {
    const _0x1fb28d = _0x5240f1;
    if (!_0x857c4f) {
        _0x857c4f = {
            'userID': userID,
            'socks5Address': socks5Address,
            'socks5Relay': socks5Relay,
            'proxyIP': proxyIP,
            'proxyPort': proxyPort,
            'enableSocks': enableSocks,
            'parsedSocks5Address': parsedSocks5Address
        };
    }
    const _0x1cbc69 = new WebSocketPair();
    const [_0x428bd9, _0x400f00] = Object[_0x1fb28d(0x3b)](_0x1cbc69);
    _0x400f00[_0x1fb28d(0x3c)]();
    let _0x163ce9 = '';
    let _0x2d2df0 = '';
    const _0x1bbba9 = (_0x499fd1, _0x148dbe) => {
        const _0x2923f5 = _0x1fb28d;
        console[_0x2923f5(0x20)]('[' + _0x163ce9 + ':' + _0x2d2df0 + ']\x20' + _0x499fd1, _0x148dbe || '');
    };
    const _0x5a6d38 = _0x3547a4['headers'][_0x1fb28d(0x12)]('sec-websocket-protocol') || '';
    const _0xb5b045 = MakeReadableWebSocketStream(_0x400f00, _0x5a6d38, _0x1bbba9);
    let _0x185de4 = { 'value': null };
    let _0x403555 = ![];
    _0xb5b045[_0x1fb28d(0x3d)](new WritableStream({
        async 'write'(_0x19441a, _0x4bd7bf) {
            const _0x96702c = _0x1fb28d;
            if (_0x403555) {
                return await handleDNSQuery(_0x19441a, _0x400f00, null, _0x1bbba9);
            }
            if (_0x185de4[_0x96702c(0x3e)]) {
                const _0x4c25cd = _0x185de4[_0x96702c(0x3e)][_0x96702c(0x3f)][_0x96702c(0x40)]();
                await _0x4c25cd[_0x96702c(0x41)](_0x19441a);
                _0x4c25cd['releaseLock']();
                return;
            }
            const {
                hasError: _0x157356,
                message: _0x5db0b9,
                addressType: _0x40415c,
                portRemote: portRemote = 0x1bb,
                addressRemote: addressRemote = '',
                rawDataIndex: _0x3c6b3c,
                ProtocolVersion: ProtocolVersion = new Uint8Array([
                    0x0,
                    0x0
                ]),
                isUDP: _0x257ed1
            } = ProcessProtocolHeader(_0x19441a, _0x857c4f['userID']);
            _0x163ce9 = addressRemote;
            _0x2d2df0 = portRemote + '--' + Math[_0x96702c(0xd)]() + '\x20' + (_0x257ed1 ? 'udp\x20' : _0x96702c(0x42)) + '\x20';
            if (_0x157356) {
                throw new Error(_0x5db0b9);
            }
            if (_0x257ed1) {
                if (portRemote === 0x35) {
                    _0x403555 = !![];
                } else {
                    throw new Error(_0x96702c(0x43));
                }
                return;
            }
            const _0x5019a3 = new Uint8Array([
                ProtocolVersion[0x0],
                0x0
            ]);
            const _0x12db82 = _0x19441a['slice'](_0x3c6b3c);
            if (_0x403555) {
                return handleDNSQuery(_0x12db82, _0x400f00, _0x5019a3, _0x1bbba9);
            }
            HandleTCPOutBound(_0x185de4, _0x40415c, addressRemote, portRemote, _0x12db82, _0x400f00, _0x5019a3, _0x1bbba9, _0x857c4f);
        },
        'close'() {
            const _0x5dc6f0 = _0x1fb28d;
            _0x1bbba9(_0x5dc6f0(0x44));
        },
        'abort'(_0x25bf50) {
            const _0x37ebf7 = _0x1fb28d;
            _0x1bbba9(_0x37ebf7(0x45), JSON[_0x37ebf7(0x46)](_0x25bf50));
        }
    }))[_0x1fb28d(0x47)](_0x1fb923 => {
        const _0x15ff64 = _0x1fb28d;
        _0x1bbba9(_0x15ff64(0x48), _0x1fb923);
    });
    return new Response(null, {
        'status': 0x65,
        'webSocket': _0x428bd9
    });
}
async function HandleTCPOutBound(_0x3d2941, _0x391098, _0x25ef4a, _0x5852db, _0x3fa2ee, _0x5db31d, _0x17039b, _0x85f35a, _0x5b29eb = null) {
    if (!_0x5b29eb) {
        _0x5b29eb = {
            'userID': userID,
            'socks5Address': socks5Address,
            'socks5Relay': socks5Relay,
            'proxyIP': proxyIP,
            'proxyPort': proxyPort,
            'enableSocks': enableSocks,
            'parsedSocks5Address': parsedSocks5Address
        };
    }
    async function _0x5a83f6(_0x5b21d9, _0x4c7cf9, _0x1a4fff = ![]) {
        const _0xf88b73 = _0x4161;
        let _0x12ba03;
        if (_0x5b29eb['socks5Relay']) {
            _0x12ba03 = await socks5Connect(_0x391098, _0x5b21d9, _0x4c7cf9, _0x85f35a, _0x5b29eb['parsedSocks5Address']);
        } else {
            _0x12ba03 = _0x1a4fff ? await socks5Connect(_0x391098, _0x5b21d9, _0x4c7cf9, _0x85f35a, _0x5b29eb[_0xf88b73(0x26)]) : connect({
                'hostname': _0x5b21d9,
                'port': _0x4c7cf9
            });
        }
        _0x3d2941[_0xf88b73(0x3e)] = _0x12ba03;
        _0x85f35a(_0xf88b73(0x49) + _0x5b21d9 + ':' + _0x4c7cf9);
        const _0xa21496 = _0x12ba03[_0xf88b73(0x3f)]['getWriter']();
        await _0xa21496['write'](_0x3fa2ee);
        _0xa21496['releaseLock']();
        return _0x12ba03;
    }
    async function _0x546221() {
        const _0x462e36 = _0x4161;
        let _0x501021;
        if (_0x5b29eb[_0x462e36(0x27)]) {
            _0x501021 = await _0x5a83f6(_0x25ef4a, _0x5852db, !![]);
        } else {
            _0x501021 = await _0x5a83f6(_0x5b29eb['proxyIP'] || _0x25ef4a, _0x5b29eb['proxyPort'] || _0x5852db, ![]);
        }
        _0x501021['closed'][_0x462e36(0x47)](_0x539c9f => {
            const _0x80ed58 = _0x462e36;
            console['log'](_0x80ed58(0x4a), _0x539c9f);
        })[_0x462e36(0x4b)](() => {
            safeCloseWebSocket(_0x5db31d);
        });
        RemoteSocketToWS(_0x501021, _0x5db31d, _0x17039b, null, _0x85f35a);
    }
    let _0x472570 = await _0x5a83f6(_0x25ef4a, _0x5852db);
    RemoteSocketToWS(_0x472570, _0x5db31d, _0x17039b, _0x546221, _0x85f35a);
}
function MakeReadableWebSocketStream(_0x44fc4a, _0x49d1bb, _0xb9bf9e) {
    let _0x5d8b46 = ![];
    const _0x2c579a = new ReadableStream({
        'start'(_0x40137a) {
            const _0xcf6dd0 = _0x4161;
            _0x44fc4a[_0xcf6dd0(0x4c)]('message', _0x23b901 => {
                const _0x2e36bf = _0xcf6dd0;
                const _0x368312 = _0x23b901[_0x2e36bf(0x4d)];
                _0x40137a['enqueue'](_0x368312);
            });
            _0x44fc4a[_0xcf6dd0(0x4c)](_0xcf6dd0(0x4e), () => {
                const _0x235a94 = _0xcf6dd0;
                safeCloseWebSocket(_0x44fc4a);
                _0x40137a[_0x235a94(0x4e)]();
            });
            _0x44fc4a[_0xcf6dd0(0x4c)]('error', _0x389f05 => {
                const _0xc045c2 = _0xcf6dd0;
                _0xb9bf9e('webSocketServer\x20has\x20error');
                _0x40137a[_0xc045c2(0x4f)](_0x389f05);
            });
            const {
                earlyData: _0x4b7124,
                error: _0x3c1efa
            } = base64ToArrayBuffer(_0x49d1bb);
            if (_0x3c1efa) {
                _0x40137a[_0xcf6dd0(0x4f)](_0x3c1efa);
            } else if (_0x4b7124) {
                _0x40137a[_0xcf6dd0(0x50)](_0x4b7124);
            }
        },
        'pull'(_0x46f6db) {
        },
        'cancel'(_0xeb842c) {
            _0xb9bf9e('ReadableStream\x20was\x20canceled,\x20due\x20to\x20' + _0xeb842c);
            _0x5d8b46 = !![];
            safeCloseWebSocket(_0x44fc4a);
        }
    });
    return _0x2c579a;
}
function ProcessProtocolHeader(_0x4d186a, _0x47284c) {
    const _0x511315 = _0x5240f1;
    if (_0x4d186a[_0x511315(0x51)] < 0x18) {
        return {
            'hasError': !![],
            'message': 'invalid\x20data'
        };
    }
    const _0x4f7458 = new DataView(_0x4d186a);
    const _0x43f654 = _0x4f7458[_0x511315(0x52)](0x0);
    const _0x32c711 = stringify(new Uint8Array(_0x4d186a['slice'](0x1, 0x11)));
    const _0x251271 = _0x47284c[_0x511315(0xe)](',') ? _0x47284c[_0x511315(0xf)](',') : [_0x47284c];
    const _0x297005 = _0x251271[_0x511315(0x2d)](_0x5021df => _0x32c711 === _0x5021df[_0x511315(0x17)]()) || _0x251271[_0x511315(0x29)] === 0x1 && _0x32c711 === _0x251271[0x0][_0x511315(0x17)]();
    console[_0x511315(0x20)](_0x511315(0x53) + _0x32c711);
    if (!_0x297005) {
        return {
            'hasError': !![],
            'message': _0x511315(0x54)
        };
    }
    const _0x35939e = _0x4f7458[_0x511315(0x52)](0x11);
    const _0x4ddfeb = _0x4f7458['getUint8'](0x12 + _0x35939e);
    if (_0x4ddfeb !== 0x1 && _0x4ddfeb !== 0x2) {
        return {
            'hasError': !![],
            'message': _0x511315(0x55) + _0x4ddfeb + _0x511315(0x56)
        };
    }
    const _0x2c5ecd = 0x12 + _0x35939e + 0x1;
    const _0x49956a = _0x4f7458[_0x511315(0x57)](_0x2c5ecd);
    const _0x1c2b26 = _0x4f7458['getUint8'](_0x2c5ecd + 0x2);
    let _0x51163d, _0x3d82e2, _0x3fe3a3;
    switch (_0x1c2b26) {
    case 0x1:
        _0x3d82e2 = 0x4;
        _0x3fe3a3 = _0x2c5ecd + 0x3;
        _0x51163d = new Uint8Array(_0x4d186a['slice'](_0x3fe3a3, _0x3fe3a3 + _0x3d82e2))[_0x511315(0x58)]('.');
        break;
    case 0x2:
        _0x3d82e2 = _0x4f7458[_0x511315(0x52)](_0x2c5ecd + 0x3);
        _0x3fe3a3 = _0x2c5ecd + 0x4;
        _0x51163d = new TextDecoder()['decode'](_0x4d186a[_0x511315(0x59)](_0x3fe3a3, _0x3fe3a3 + _0x3d82e2));
        break;
    case 0x3:
        _0x3d82e2 = 0x10;
        _0x3fe3a3 = _0x2c5ecd + 0x3;
        _0x51163d = Array[_0x511315(0x5a)]({ 'length': 0x8 }, (_0x427633, _0x4e33b6) => _0x4f7458[_0x511315(0x57)](_0x3fe3a3 + _0x4e33b6 * 0x2)['toString'](0x10))[_0x511315(0x58)](':');
        break;
    default:
        return {
            'hasError': !![],
            'message': 'invalid\x20addressType:\x20' + _0x1c2b26
        };
    }
    if (!_0x51163d) {
        return {
            'hasError': !![],
            'message': _0x511315(0x5b) + _0x1c2b26
        };
    }
    return {
        'hasError': ![],
        'addressRemote': _0x51163d,
        'addressType': _0x1c2b26,
        'portRemote': _0x49956a,
        'rawDataIndex': _0x3fe3a3 + _0x3d82e2,
        'protocolVersion': new Uint8Array([_0x43f654]),
        'isUDP': _0x4ddfeb === 0x2
    };
}
async function RemoteSocketToWS(_0x5f567d, _0x1d7992, _0x2f52d6, _0x276686, _0xd36c31) {
    const _0x2faf82 = _0x5240f1;
    let _0xdd0a87 = ![];
    try {
        await _0x5f567d['readable']['pipeTo'](new WritableStream({
            async 'write'(_0x11fa51) {
                const _0x5ecf0f = _0x4161;
                if (_0x1d7992[_0x5ecf0f(0x5c)] !== WS_READY_STATE_OPEN) {
                    throw new Error(_0x5ecf0f(0x5d));
                }
                _0xdd0a87 = !![];
                if (_0x2f52d6) {
                    _0x1d7992['send'](await new Blob([
                        _0x2f52d6,
                        _0x11fa51
                    ])[_0x5ecf0f(0x5e)]());
                    _0x2f52d6 = null;
                } else {
                    _0x1d7992[_0x5ecf0f(0x5f)](_0x11fa51);
                }
            },
            'close'() {
                const _0x4ae6dd = _0x4161;
                _0xd36c31(_0x4ae6dd(0x60) + _0xdd0a87);
            },
            'abort'(_0x342c0a) {
                const _0x2c6bea = _0x4161;
                console[_0x2c6bea(0x4f)]('Remote\x20connection\x20readable\x20aborted:', _0x342c0a);
            }
        }));
    } catch (_0x45391b) {
        console[_0x2faf82(0x4f)](_0x2faf82(0x61), _0x45391b[_0x2faf82(0x62)] || _0x45391b);
        safeCloseWebSocket(_0x1d7992);
    }
    if (!_0xdd0a87 && _0x276686) {
        _0xd36c31('No\x20incoming\x20data,\x20retrying');
        await _0x276686();
    }
}
function _0x50e3() {
    const _0x1b44f5 = [
        'malaysia.com',
        'russia.com',
        'singapore.com',
        'www.visa.com',
        'www.shopify.com',
        'www.whatismyip.com',
        'www.ipget.net',
        'cloudflare.182682.xyz',
        'cfip.cfcdn.vip',
        'cloudflare-ip.mofashi.ltd',
        'cf.090227.xyz',
        'cf.zhetengsha.eu.org',
        'cloudflare.9jy.cc',
        'cf.zerone-cdn.pp.ua',
        'cdn.tzpro.xyz',
        'cnamefuckxxs.yuchen.icu',
        'cfip.xxxxxxxx.tk',
        'isArray',
        'substring',
        '?ed=2048',
        '?encryption=none&security=none&fp=random&type=ws&host=',
        '&path=',
        '&fp=random&type=ws&host=',
        'pages.dev',
        'forEach',
        '-HTTP-',
        '-HTTPS-',
        'push',
        '443',
        '%3F',
        'match',
        '2QgFOME',
        '261342pOStWl',
        '1459386asSdQW',
        '1441012FijVVT',
        '5ViUSqr',
        '2078226dyJoQU',
        '3475199EdwVzi',
        '548576hpohbY',
        '14753133XcvwCs',
        '10mmlVVT',
        'd342d11e-d424-4583-b36e-524ab1f0afa4',
        'cdn-all.xn--b6gac.eu.org:443',
        'floor',
        'random',
        'includes',
        'split',
        'uuid\x20is\x20not\x20valid',
        'searchParams',
        'get',
        'proxyip',
        'socks5',
        'socks5_relay',
        'map',
        'trim',
        'every',
        'test',
        'warn',
        '无效的proxyip格式:',
        '无效的socks5格式:',
        'socks5Address',
        'socks5Relay',
        'true',
        'log',
        '配置参数:',
        'userID',
        'proxyIP',
        'port',
        'proxyPort',
        'parsedSocks5Address',
        'enableSocks',
        'headers',
        'length',
        'sub/',
        'bestip/',
        'find',
        'some',
        'startsWith',
        'Upgrade',
        'pathname',
        '/cf',
        'application/json;charset=utf-8',
        '/sub/',
        '/bestip/',
        'https://bestip.06151953.xyz/auto?host=',
        '&path=/',
        'toString',
        'Host',
        '\x0a\x09\x20\x20<!DOCTYPE\x20html>\x0a\x09\x20\x20<html\x20lang=\x22en\x22>\x0a\x09\x20\x20<head>\x0a\x09\x09\x20\x20<meta\x20charset=\x22UTF-8\x22>\x0a\x09\x09\x20\x20<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1.0\x22>\x0a\x09\x09\x20\x20<title>',
        'text/html;charset=UTF-8',
        'values',
        'accept',
        'pipeTo',
        'value',
        'writable',
        'getWriter',
        'write',
        'tcp\x20',
        'UDP\x20proxy\x20is\x20only\x20enabled\x20for\x20DNS\x20(port\x2053)',
        'readableWebSocketStream\x20is\x20close',
        'readableWebSocketStream\x20is\x20abort',
        'stringify',
        'catch',
        'readableWebSocketStream\x20pipeTo\x20error',
        'connected\x20to\x20',
        'retry\x20tcpSocket\x20closed\x20error',
        'finally',
        'addEventListener',
        'data',
        'close',
        'error',
        'enqueue',
        'byteLength',
        'getUint8',
        'userID:\x20',
        'invalid\x20user',
        'command\x20',
        '\x20is\x20not\x20supported,\x20command\x2001-tcp,02-udp,03-mux',
        'getUint16',
        'join',
        'slice',
        'from',
        'addressValue\x20is\x20empty,\x20addressType\x20is\x20',
        'readyState',
        'WebSocket\x20is\x20not\x20open',
        'arrayBuffer',
        'send',
        'Remote\x20connection\x20readable\x20closed.\x20Had\x20incoming\x20data:\x20',
        'RemoteSocketToWS\x20error:',
        'stack',
        'replace',
        'charCodeAt',
        'safeCloseWebSocket\x20error:',
        'toLowerCase',
        'Stringified\x20UUID\x20is\x20invalid',
        '8.8.4.4',
        'releaseLock',
        'dns\x20server(',
        ')\x20tcp\x20is\x20close',
        'handleDNSQuery\x20have\x20exception,\x20error:\x20',
        'message',
        'sent\x20socks\x20greeting',
        'readable',
        'getReader',
        'read',
        'socks\x20server\x20version\x20error:\x20',
        'please\x20provide\x20username/password',
        'encode',
        'fail\x20to\x20auth\x20socks\x20server',
        'flatMap',
        'sent\x20socks\x20request',
        'socks\x20connection\x20opened',
        'fail\x20to\x20open\x20socks\x20connection',
        'reverse',
        'Invalid\x20SOCKS\x20address\x20format',
        'pop',
        'QA==',
        'dmxlc3M=',
        '?encryption=none&security=tls&sni=',
        '&fp=randomized&type=ws&host=',
        '&path=%2F%3Fed%3D2048#',
        'https://',
        'https://url.v1.mk/sub?target=clash&url=',
        '?format=clash',
        '&insert=false&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true',
        '\x0a\x20\x20<head>\x0a\x20\x20\x20\x20<title>EDtunnel:\x20Configuration</title>\x0a\x20\x20\x20\x20<meta\x20name=\x27viewport\x27\x20content=\x27width=device-width,\x20initial-scale=1\x27>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:site_name\x27\x20content=\x27EDtunnel:\x20Protocol\x20Configuration\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:type\x27\x20content=\x27website\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:title\x27\x20content=\x27EDtunnel\x20-\x20Protocol\x20Configuration\x20and\x20Subscribe\x20Output\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:description\x27\x20content=\x27Use\x20Cloudflare\x20Pages\x20and\x20Worker\x20serverless\x20to\x20implement\x20protocol\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:url\x27\x20content=\x27https://',
        '/\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:image\x27\x20content=\x27https://cdn.jsdelivr.net/gh/6Kmfi6HP/EDtunnel@refs/heads/main/image/logo.png\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:card\x27\x20content=\x27summary_large_image\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:title\x27\x20content=\x27EDtunnel\x20-\x20Protocol\x20Configuration\x20and\x20Subscribe\x20Output\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:description\x27\x20content=\x27Use\x20Cloudflare\x20Pages\x20and\x20Worker\x20serverless\x20to\x20implement\x20protocol\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:url\x27\x20content=\x27https://',
        '/\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20name=\x27twitter:image\x27\x20content=\x27https://cdn.jsdelivr.net/gh/6Kmfi6HP/EDtunnel@refs/heads/main/image/logo.png\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:image:width\x27\x20content=\x271500\x27\x20/>\x0a\x20\x20\x20\x20<meta\x20property=\x27og:image:height\x27\x20content=\x271500\x27\x20/>\x0a\x0a\x20\x20\x20\x20<style>\x0a\x20\x20\x20\x20\x20\x20body\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Roboto\x27,\x20\x27Segoe\x20UI\x27,\x20Tahoma,\x20Geneva,\x20Verdana,\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#000000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x201.6;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x201200px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#111111;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x204px\x206px\x20rgba(255,\x20255,\x20255,\x200.1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20h1,\x20h2\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.config-item\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#222222;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#333333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.config-item\x20h3\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#000000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20background-color\x200.3s,\x20color\x200.3s;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.btn:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#cccccc;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.btn-group\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.btn-group\x20.btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20pre\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#333333;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#444444;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20white-space:\x20pre-wrap;\x0a\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#00ff00;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.logo\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20float:\x20left;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2020px;\x0a\x09\x09max-width:\x2030%;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20@media\x20(max-width:\x20768px)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20.logo\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-width:\x2090%;\x20/*\x20Adjust\x20the\x20max-width\x20to\x20fit\x20within\x20the\x20container\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.btn-group\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.btn-group\x20.btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.code-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2015px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.code-container\x20pre\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-right:\x20100px;\x20/*\x20Make\x20space\x20for\x20the\x20button\x20*/\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.copy-btn\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x205px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x200.8em;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.subscription-info\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#222222;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2015px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.subscription-info\x20h3\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ffffff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:\x200;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.subscription-info\x20ul\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding-left:\x2020px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20.subscription-info\x20li\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2010px;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</style>\x0a\x20\x20\x20\x20<link\x20rel=\x22stylesheet\x22\x20href=\x22https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css\x22>\x0a\x20\x20</head>\x0a\x20\x20',
        '\x0a\x20\x20\x20\x20<div\x20class=\x22container\x22>\x0a\x20\x20\x20\x20\x20\x20<h1>EDtunnel:\x20Protocol\x20Configuration</h1>\x0a\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://cdn.jsdelivr.net/gh/6Kmfi6HP/EDtunnel@refs/heads/main/image/logo.png\x22\x20alt=\x22EDtunnel\x20Logo\x22\x20class=\x22logo\x22>\x0a\x20\x20\x20\x20\x20\x20<p>Welcome!\x20This\x20function\x20generates\x20configuration\x20for\x20the\x20vless\x20protocol.\x20If\x20you\x20found\x20this\x20useful,\x20please\x20check\x20our\x20GitHub\x20project:</p>\x0a\x20\x20\x20\x20\x20\x20<p><a\x20href=\x22https://github.com/6Kmfi6HP/EDtunnel\x22\x20target=\x22_blank\x22\x20style=\x22color:\x20#00ff00;\x22>EDtunnel\x20-\x20https://github.com/6Kmfi6HP/EDtunnel</a></p>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22clear:\x20both;\x22></div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22btn-group\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22//',
        '\x22\x20class=\x22btn\x22\x20target=\x22_blank\x22><i\x20class=\x22fas\x20fa-link\x22></i>\x20VLESS\x20Subscription</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22clash://install-config?url=',
        '\x22\x20class=\x22btn\x22\x20target=\x22_blank\x22><i\x20class=\x22fas\x20fa-bolt\x22></i>\x20Clash\x20Link</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22',
        '\x22\x20class=\x22btn\x22\x20target=\x22_blank\x22><i\x20class=\x22fas\x20fa-star\x22></i>\x20Best\x20IP\x20Subscription</a>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22subscription-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3>Options\x20Explained:</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>VLESS\x20Subscription:</strong>\x20Direct\x20link\x20for\x20VLESS\x20protocol\x20configuration.\x20Suitable\x20for\x20clients\x20supporting\x20VLESS.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Clash\x20Subscription:</strong>\x20Opens\x20the\x20Clash\x20client\x20with\x20pre-configured\x20settings.\x20Best\x20for\x20Clash\x20users\x20on\x20mobile\x20devices.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Clash\x20Link:</strong>\x20A\x20web\x20link\x20to\x20convert\x20the\x20VLESS\x20config\x20to\x20Clash\x20format.\x20Useful\x20for\x20manual\x20import\x20or\x20troubleshooting.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li><strong>Best\x20IP\x20Subscription:</strong>\x20Provides\x20a\x20curated\x20list\x20of\x20optimal\x20server\x20IPs\x20for\x20many\x20<b>different\x20countries</b>.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>Choose\x20the\x20option\x20that\x20best\x20fits\x20your\x20client\x20and\x20needs.\x20For\x20most\x20users,\x20the\x20VLESS\x20or\x20Clash\x20Subscription\x20will\x20be\x20the\x20easiest\x20to\x20use.</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20',
        '://',
        ':443',
        '\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22container\x20config-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2>UUID:\x20',
        '</code></pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20copy-btn\x22\x20onclick=\x27copyToClipboard(\x22',
        '\x22)\x27><i\x20class=\x22fas\x20fa-copy\x22></i>\x20Copy</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3>Best\x20IP\x20Configuration</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22input-group\x20mb-3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20class=\x22form-select\x22\x20id=\x22proxySelect\x22\x20onchange=\x22updateProxyConfig()\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'string',
        '<option\x20value=\x22',
        '</option>',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x09\x09<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22code-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre><code\x20id=\x22proxyConfig\x22>',
        '</code></pre>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20copy-btn\x22\x20onclick=\x27copyToClipboard(document.getElementById(\x22proxyConfig\x22).textContent)\x27><i\x20class=\x22fas\x20fa-copy\x22></i>\x20Copy</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20',
        '\x0a\x20\x20<html>\x0a\x20\x20',
        '\x0a\x20\x20<body>\x0a\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20<script>\x0a\x20\x20\x20\x20\x20\x20const\x20userIDArray\x20=\x20',
        ';\x0a\x20\x20\x20\x20\x20\x20const\x20pt\x20=\x20\x22',
        '\x22;\x0a\x20\x20\x20\x20\x20\x20const\x20at\x20=\x20\x22',
        '\x22;\x0a\x20\x20\x20\x20\x20\x20const\x20commonUrlPart\x20=\x20\x22?encryption=none&security=tls&sni=',
        '\x22;\x0a\x0a\x20\x20\x20\x20\x20\x20function\x20copyToClipboard(text)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20navigator.clipboard.writeText(text)\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.then(()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20alert(\x22Copied\x20to\x20clipboard\x22);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.catch((err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.error(\x22Failed\x20to\x20copy\x20to\x20clipboard:\x22,\x20err);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20function\x20updateProxyConfig()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20select\x20=\x20document.getElementById(\x27proxySelect\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20proxyValue\x20=\x20select.value;\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20[host,\x20port]\x20=\x20proxyValue.split(\x27:\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20protocolSec\x20=\x20atob(pt)\x20+\x20\x27://\x27\x20+\x20userIDArray[0]\x20+\x20atob(at)\x20+\x20host\x20+\x20\x22:\x22\x20+\x20port\x20+\x20commonUrlPart;\x0a\x20\x20\x20\x20\x20\x20\x20\x20document.getElementById(\x22proxyConfig\x22).textContent\x20=\x20protocolSec;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20</script>\x0a\x20\x20</body>\x0a\x20\x20</html>',
        'icook.hk',
        'japan.com'
    ];
    _0x50e3 = function () {
        return _0x1b44f5;
    };
    return _0x50e3();
}
function _0x4161(_0x3ef732, _0x50e39d) {
    const _0x416124 = _0x50e3();
    _0x4161 = function (_0x469616, _0x182282) {
        _0x469616 = _0x469616 - 0x0;
        let _0x568ca2 = _0x416124[_0x469616];
        return _0x568ca2;
    };
    return _0x4161(_0x3ef732, _0x50e39d);
}
function base64ToArrayBuffer(_0x4f4616) {
    const _0x1e0478 = _0x5240f1;
    if (!_0x4f4616) {
        return {
            'earlyData': null,
            'error': null
        };
    }
    try {
        _0x4f4616 = _0x4f4616['replace'](/-/g, '+')[_0x1e0478(0x63)](/_/g, '/');
        const _0x45c3fa = atob(_0x4f4616);
        const _0x188574 = new ArrayBuffer(_0x45c3fa['length']);
        const _0xeba07b = new Uint8Array(_0x188574);
        for (let _0x3b6fd1 = 0x0; _0x3b6fd1 < _0x45c3fa[_0x1e0478(0x29)]; _0x3b6fd1++) {
            _0xeba07b[_0x3b6fd1] = _0x45c3fa[_0x1e0478(0x64)](_0x3b6fd1);
        }
        return {
            'earlyData': _0x188574,
            'error': null
        };
    } catch (_0x4ce4a0) {
        return {
            'earlyData': null,
            'error': _0x4ce4a0
        };
    }
}
function isValidUUID(_0x2fbe63) {
    const _0x17bfd3 = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return _0x17bfd3['test'](_0x2fbe63);
}
const WS_READY_STATE_OPEN = 0x1;
const WS_READY_STATE_CLOSING = 0x2;
function safeCloseWebSocket(_0x3fc617) {
    const _0x46e61d = _0x5240f1;
    try {
        if (_0x3fc617['readyState'] === WS_READY_STATE_OPEN || _0x3fc617['readyState'] === WS_READY_STATE_CLOSING) {
            _0x3fc617[_0x46e61d(0x4e)]();
        }
    } catch (_0x3463c8) {
        console['error'](_0x46e61d(0x65), _0x3463c8);
    }
}
const byteToHex = Array[_0x5240f1(0x5a)]({ 'length': 0x100 }, (_0x806c7a, _0x118558) => (_0x118558 + 0x100)['toString'](0x10)[_0x5240f1(0x59)](0x1));
function unsafeStringify(_0x19b310, _0x1759a8 = 0x0) {
    const _0x16da02 = _0x5240f1;
    return [
        byteToHex[_0x19b310[_0x1759a8]],
        byteToHex[_0x19b310[_0x1759a8 + 0x1]],
        byteToHex[_0x19b310[_0x1759a8 + 0x2]],
        byteToHex[_0x19b310[_0x1759a8 + 0x3]],
        '-',
        byteToHex[_0x19b310[_0x1759a8 + 0x4]],
        byteToHex[_0x19b310[_0x1759a8 + 0x5]],
        '-',
        byteToHex[_0x19b310[_0x1759a8 + 0x6]],
        byteToHex[_0x19b310[_0x1759a8 + 0x7]],
        '-',
        byteToHex[_0x19b310[_0x1759a8 + 0x8]],
        byteToHex[_0x19b310[_0x1759a8 + 0x9]],
        '-',
        byteToHex[_0x19b310[_0x1759a8 + 0xa]],
        byteToHex[_0x19b310[_0x1759a8 + 0xb]],
        byteToHex[_0x19b310[_0x1759a8 + 0xc]],
        byteToHex[_0x19b310[_0x1759a8 + 0xd]],
        byteToHex[_0x19b310[_0x1759a8 + 0xe]],
        byteToHex[_0x19b310[_0x1759a8 + 0xf]]
    ]['join']('')[_0x16da02(0x66)]();
}
function stringify(_0x4e39dc, _0x506950 = 0x0) {
    const _0x35f313 = _0x5240f1;
    const _0x787f26 = unsafeStringify(_0x4e39dc, _0x506950);
    if (!isValidUUID(_0x787f26)) {
        throw new TypeError(_0x35f313(0x67));
    }
    return _0x787f26;
}
async function handleDNSQuery(_0x244ca2, _0x4cb03f, _0xacede8, _0x432d65) {
    const _0x55ce7f = _0x5240f1;
    try {
        const _0x163603 = _0x55ce7f(0x68);
        const _0x67c4b3 = 0x35;
        let _0x18f800 = _0xacede8;
        const _0x316d5d = connect({
            'hostname': _0x163603,
            'port': _0x67c4b3
        });
        _0x432d65(_0x55ce7f(0x49) + _0x163603 + ':' + _0x67c4b3);
        const _0x4e3dcd = _0x316d5d['writable'][_0x55ce7f(0x40)]();
        await _0x4e3dcd[_0x55ce7f(0x41)](_0x244ca2);
        _0x4e3dcd[_0x55ce7f(0x69)]();
        await _0x316d5d['readable']['pipeTo'](new WritableStream({
            async 'write'(_0x3c7b7b) {
                const _0x56128d = _0x55ce7f;
                if (_0x4cb03f[_0x56128d(0x5c)] === WS_READY_STATE_OPEN) {
                    if (_0x18f800) {
                        _0x4cb03f[_0x56128d(0x5f)](await new Blob([
                            _0x18f800,
                            _0x3c7b7b
                        ])[_0x56128d(0x5e)]());
                        _0x18f800 = null;
                    } else {
                        _0x4cb03f['send'](_0x3c7b7b);
                    }
                }
            },
            'close'() {
                const _0x4cff50 = _0x55ce7f;
                _0x432d65(_0x4cff50(0x6a) + _0x163603 + _0x4cff50(0x6b));
            },
            'abort'(_0x4eb6ad) {
                const _0x1f95cb = _0x55ce7f;
                console[_0x1f95cb(0x4f)]('dns\x20server(' + _0x163603 + ')\x20tcp\x20is\x20abort', _0x4eb6ad);
            }
        }));
    } catch (_0x75436a) {
        console[_0x55ce7f(0x4f)](_0x55ce7f(0x6c) + _0x75436a[_0x55ce7f(0x6d)]);
    }
}
async function socks5Connect(_0x3a3b6d, _0xff3bf, _0x4ff2c9, _0x52101e, _0x316fcf = null) {
    const _0x1aa9ae = _0x5240f1;
    const {
        username: _0x47b2c2,
        password: _0x30f2fe,
        hostname: _0x4e5c41,
        port: _0xd72292
    } = _0x316fcf || parsedSocks5Address;
    const _0x362277 = connect({
        'hostname': _0x4e5c41,
        'port': _0xd72292
    });
    const _0x3e715d = new Uint8Array([
        0x5,
        0x2,
        0x0,
        0x2
    ]);
    const _0x3c9084 = _0x362277['writable'][_0x1aa9ae(0x40)]();
    await _0x3c9084[_0x1aa9ae(0x41)](_0x3e715d);
    _0x52101e(_0x1aa9ae(0x6e));
    const _0x396a77 = _0x362277[_0x1aa9ae(0x6f)][_0x1aa9ae(0x70)]();
    const _0x56e84c = new TextEncoder();
    let _0x4858b7 = (await _0x396a77[_0x1aa9ae(0x71)]())[_0x1aa9ae(0x3e)];
    if (_0x4858b7[0x0] !== 0x5) {
        _0x52101e(_0x1aa9ae(0x72) + _0x4858b7[0x0] + '\x20expected:\x205');
        return;
    }
    if (_0x4858b7[0x1] === 0xff) {
        _0x52101e('no\x20acceptable\x20methods');
        return;
    }
    if (_0x4858b7[0x1] === 0x2) {
        _0x52101e('socks\x20server\x20needs\x20auth');
        if (!_0x47b2c2 || !_0x30f2fe) {
            _0x52101e(_0x1aa9ae(0x73));
            return;
        }
        const _0x218ed8 = new Uint8Array([
            0x1,
            _0x47b2c2[_0x1aa9ae(0x29)],
            ..._0x56e84c[_0x1aa9ae(0x74)](_0x47b2c2),
            _0x30f2fe[_0x1aa9ae(0x29)],
            ..._0x56e84c[_0x1aa9ae(0x74)](_0x30f2fe)
        ]);
        await _0x3c9084['write'](_0x218ed8);
        _0x4858b7 = (await _0x396a77[_0x1aa9ae(0x71)]())[_0x1aa9ae(0x3e)];
        if (_0x4858b7[0x0] !== 0x1 || _0x4858b7[0x1] !== 0x0) {
            _0x52101e(_0x1aa9ae(0x75));
            return;
        }
    }
    let _0x4f93d2;
    switch (_0x3a3b6d) {
    case 0x1:
        _0x4f93d2 = new Uint8Array([
            0x1,
            ..._0xff3bf[_0x1aa9ae(0xf)]('.')['map'](Number)
        ]);
        break;
    case 0x2:
        _0x4f93d2 = new Uint8Array([
            0x3,
            _0xff3bf[_0x1aa9ae(0x29)],
            ..._0x56e84c[_0x1aa9ae(0x74)](_0xff3bf)
        ]);
        break;
    case 0x3:
        _0x4f93d2 = new Uint8Array([
            0x4,
            ..._0xff3bf['split'](':')[_0x1aa9ae(0x76)](_0x1a7009 => [
                parseInt(_0x1a7009[_0x1aa9ae(0x59)](0x0, 0x2), 0x10),
                parseInt(_0x1a7009['slice'](0x2), 0x10)
            ])
        ]);
        break;
    default:
        _0x52101e('invild\x20\x20addressType\x20is\x20' + _0x3a3b6d);
        return;
    }
    const _0x505bb8 = new Uint8Array([
        0x5,
        0x1,
        0x0,
        ..._0x4f93d2,
        _0x4ff2c9 >> 0x8,
        _0x4ff2c9 & 0xff
    ]);
    await _0x3c9084[_0x1aa9ae(0x41)](_0x505bb8);
    _0x52101e(_0x1aa9ae(0x77));
    _0x4858b7 = (await _0x396a77[_0x1aa9ae(0x71)]())[_0x1aa9ae(0x3e)];
    if (_0x4858b7[0x1] === 0x0) {
        _0x52101e(_0x1aa9ae(0x78));
    } else {
        _0x52101e(_0x1aa9ae(0x79));
        return;
    }
    _0x3c9084['releaseLock']();
    _0x396a77[_0x1aa9ae(0x69)]();
    return _0x362277;
}
function socks5AddressParser(_0x3cc336) {
    const _0x1e41e4 = _0x5240f1;
    let [_0x2969cf, _0x1bb351] = _0x3cc336[_0x1e41e4(0xf)]('@')[_0x1e41e4(0x7a)]();
    let _0x212012, _0x1baa5b, _0x23bcd2, _0x44cd72;
    if (_0x1bb351) {
        const _0x31d7ca = _0x1bb351[_0x1e41e4(0xf)](':');
        if (_0x31d7ca[_0x1e41e4(0x29)] !== 0x2) {
            throw new Error(_0x1e41e4(0x7b));
        }
        [_0x212012, _0x1baa5b] = _0x31d7ca;
    }
    const _0xfe17e7 = _0x2969cf[_0x1e41e4(0xf)](':');
    _0x44cd72 = Number(_0xfe17e7[_0x1e41e4(0x7c)]());
    if (isNaN(_0x44cd72)) {
        throw new Error(_0x1e41e4(0x7b));
    }
    _0x23bcd2 = _0xfe17e7['join'](':');
    const _0x524ff1 = /^\[.*\]$/;
    if (_0x23bcd2[_0x1e41e4(0xe)](':') && !_0x524ff1[_0x1e41e4(0x19)](_0x23bcd2)) {
        throw new Error('Invalid\x20SOCKS\x20address\x20format');
    }
    return {
        'username': _0x212012,
        'password': _0x1baa5b,
        'hostname': _0x23bcd2,
        'port': _0x44cd72
    };
}
const at = _0x5240f1(0x7d);
const pt = _0x5240f1(0x7e);
const ed = 'RUR0dW5uZWw=';
function getConfig(_0x4f809a, _0x14d0d6, _0x1a0bdd) {
    const _0x517f2d = _0x5240f1;
    const _0x3b7db7 = _0x517f2d(0x7f) + _0x14d0d6 + _0x517f2d(0x80) + _0x14d0d6 + _0x517f2d(0x81) + _0x14d0d6;
    const _0x3714f3 = _0x4f809a[_0x517f2d(0xf)](',');
    const _0x41818d = _0x517f2d(0x82) + _0x14d0d6 + '/sub/' + _0x3714f3[0x0] + '?format=clash';
    const _0x5a97d = 'https://' + _0x14d0d6 + _0x517f2d(0x34) + _0x3714f3[0x0];
    const _0x41dd90 = _0x517f2d(0x83) + encodeURIComponent(_0x517f2d(0x82) + _0x14d0d6 + '/sub/' + _0x3714f3[0x0] + _0x517f2d(0x84)) + _0x517f2d(0x85);
    const _0x40d7b0 = _0x517f2d(0x86) + _0x14d0d6 + _0x517f2d(0x87) + _0x14d0d6 + _0x517f2d(0x88);
    const _0x1d19ba = _0x517f2d(0x89) + _0x14d0d6 + _0x517f2d(0x33) + _0x3714f3[0x0] + _0x517f2d(0x8a) + encodeURIComponent(_0x517f2d(0x82) + _0x14d0d6 + _0x517f2d(0x33) + _0x3714f3[0x0] + _0x517f2d(0x84)) + '\x22\x20class=\x22btn\x22\x20target=\x22_blank\x22><i\x20class=\x22fas\x20fa-bolt\x22></i>\x20Clash\x20Subscription</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22' + _0x41dd90 + _0x517f2d(0x8b) + _0x5a97d + _0x517f2d(0x8c);
    const _0x4e2988 = _0x3714f3[_0x517f2d(0x16)](_0x3f2a00 => {
        const _0x27865c = _0x517f2d;
        const _0x1265b4 = atob(pt) + _0x27865c(0x8d) + _0x3f2a00 + atob(at) + _0x14d0d6 + _0x27865c(0x8e) + _0x3b7db7;
        const _0x5597bc = atob(pt) + _0x27865c(0x8d) + _0x3f2a00 + atob(at) + _0x1a0bdd[0x0]['split'](':')[0x0] + ':' + proxyPort + _0x3b7db7;
        return _0x27865c(0x8f) + _0x3f2a00 + '</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3>Default\x20IP\x20Configuration</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22code-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<pre><code>' + _0x1265b4 + _0x27865c(0x90) + _0x1265b4 + _0x27865c(0x91) + (typeof _0x1a0bdd === _0x27865c(0x92) ? _0x27865c(0x93) + _0x1a0bdd + '\x22>' + _0x1a0bdd + _0x27865c(0x94) : Array[_0x27865c(0x5a)](_0x1a0bdd)[_0x27865c(0x16)](_0x3933b4 => '<option\x20value=\x22' + _0x3933b4 + '\x22>' + _0x3933b4 + '</option>')['join']('')) + _0x27865c(0x95) + _0x5597bc + _0x27865c(0x96);
    })['join']('');
    return _0x517f2d(0x97) + _0x40d7b0 + _0x517f2d(0x98) + _0x1d19ba + _0x517f2d(0x99) + _0x4e2988 + _0x517f2d(0x9a) + JSON[_0x517f2d(0x46)](_0x3714f3) + _0x517f2d(0x9b) + pt + _0x517f2d(0x9c) + at + _0x517f2d(0x9d) + _0x14d0d6 + '&fp=randomized&type=ws&host=' + _0x14d0d6 + _0x517f2d(0x81) + _0x14d0d6 + _0x517f2d(0x9e);
}
const HttpPort = new Set([
    0x50,
    0x1f90,
    0x22b0,
    0x804,
    0x826,
    0x82f,
    0x822
]);
const HttpsPort = new Set([
    0x1bb,
    0x20fb,
    0x805,
    0x830,
    0x827,
    0x823
]);
function GenSub(_0x1842c0, _0x2106e2, _0x520e45) {
    const _0x17b848 = _0x5240f1;
    const _0x5b277b = new Set([
        _0x2106e2,
        _0x17b848(0x9f),
        _0x17b848(0xa0),
        _0x17b848(0xa1),
        _0x17b848(0xa2),
        _0x17b848(0xa3),
        _0x17b848(0xa4),
        'www.csgo.com',
        _0x17b848(0xa5),
        _0x17b848(0xa6),
        _0x17b848(0xa7),
        'freeyx.cloudflare88.eu.org',
        _0x17b848(0xa8),
        _0x17b848(0xa9),
        proxyIPs,
        'cf.0sm.com',
        _0x17b848(0xaa),
        _0x17b848(0xab),
        _0x17b848(0xac),
        _0x17b848(0xad),
        _0x17b848(0xae),
        'cfip.1323123.xyz',
        _0x17b848(0xaf),
        'cf.877771.xyz',
        _0x17b848(0xb0),
        _0x17b848(0xb1)
    ]);
    const _0x59f671 = _0x1842c0[_0x17b848(0xe)](',') ? _0x1842c0[_0x17b848(0xf)](',') : [_0x1842c0];
    const _0x380279 = Array[_0x17b848(0xb2)](_0x520e45) ? _0x520e45 : _0x520e45 ? _0x520e45['includes'](',') ? _0x520e45[_0x17b848(0xf)](',') : [_0x520e45] : proxyIPs;
    const _0x5ae1ef = () => '/' + Math['random']()['toString'](0x24)[_0x17b848(0xb3)](0x2, 0xf) + _0x17b848(0xb4);
    const _0x4c1f8e = _0x17b848(0xb5) + _0x2106e2 + _0x17b848(0xb6) + encodeURIComponent(_0x5ae1ef()) + '#';
    const _0x4ade5e = _0x17b848(0x7f) + _0x2106e2 + _0x17b848(0xb7) + _0x2106e2 + _0x17b848(0x81);
    const _0x2ced14 = _0x59f671['flatMap'](_0x1deb2c => {
        const _0x10f2bd = _0x17b848;
        let _0x47d43c = [];
        if (!_0x2106e2[_0x10f2bd(0xe)](_0x10f2bd(0xb8))) {
            _0x5b277b[_0x10f2bd(0xb9)](_0x4f950e => {
                const _0x87f4eb = _0x10f2bd;
                Array[_0x87f4eb(0x5a)](HttpPort)['forEach'](_0x3af84b => {
                    const _0x19963d = _0x87f4eb;
                    const _0x1cd028 = _0x2106e2['split']('.')[0x0] + '-' + _0x4f950e + _0x19963d(0xba) + _0x3af84b;
                    const _0x2d9d1f = atob(pt) + _0x19963d(0x8d) + _0x1deb2c + atob(at) + _0x4f950e + ':' + _0x3af84b + _0x4c1f8e + _0x1cd028;
                    _0x47d43c['push'](_0x2d9d1f);
                });
            });
        }
        _0x5b277b[_0x10f2bd(0xb9)](_0x3cabce => {
            const _0x3f3448 = _0x10f2bd;
            Array[_0x3f3448(0x5a)](HttpsPort)['forEach'](_0x19591b => {
                const _0x408d79 = _0x3f3448;
                const _0x5bed1f = _0x2106e2['split']('.')[0x0] + '-' + _0x3cabce + _0x408d79(0xbb) + _0x19591b;
                const _0x12808c = atob(pt) + _0x408d79(0x8d) + _0x1deb2c + atob(at) + _0x3cabce + ':' + _0x19591b + _0x4ade5e + _0x5bed1f;
                _0x47d43c['push'](_0x12808c);
            });
        });
        _0x380279[_0x10f2bd(0xb9)](_0x2e6d8c => {
            const _0x40879b = _0x10f2bd;
            const [_0x1dec41, _0x122868 = '443'] = _0x2e6d8c['split'](':');
            const _0x292092 = _0x2106e2['split']('.')[0x0] + '-' + _0x1dec41 + '-HTTPS-' + _0x122868;
            const _0x55afb4 = atob(pt) + _0x40879b(0x8d) + _0x1deb2c + atob(at) + _0x1dec41 + ':' + _0x122868 + _0x4ade5e + _0x292092 + '-' + atob(ed);
            _0x47d43c[_0x40879b(0xbc)](_0x55afb4);
        });
        return _0x47d43c;
    });
    return btoa(_0x2ced14['join']('\x0a'));
}
function handleProxyConfig(_0xeba179) {
    const _0x4d7ef5 = _0x5240f1;
    if (_0xeba179) {
        const _0x599126 = _0xeba179[_0x4d7ef5(0xf)](',')[_0x4d7ef5(0x16)](_0x42c26e => _0x42c26e[_0x4d7ef5(0x17)]());
        const _0x358892 = selectRandomAddress(_0x599126);
        const [_0x25b3c6, _0xea5f56 = _0x4d7ef5(0xbd)] = _0x358892['split'](':');
        return {
            'ip': _0x25b3c6,
            'port': _0xea5f56
        };
    } else {
        const _0x1ee9f5 = proxyIP[_0x4d7ef5(0xe)](':') ? proxyIP[_0x4d7ef5(0xf)](':')[0x1] : _0x4d7ef5(0xbd);
        const _0x3e9931 = proxyIP[_0x4d7ef5(0xf)](':')[0x0];
        return {
            'ip': _0x3e9931,
            'port': _0x1ee9f5
        };
    }
}
function selectRandomAddress(_0x227876) {
    const _0x299ac2 = _0x5240f1;
    const _0x1c95a3 = typeof _0x227876 === _0x299ac2(0x92) ? _0x227876[_0x299ac2(0xf)](',')['map'](_0x1d446c => _0x1d446c[_0x299ac2(0x17)]()) : _0x227876;
    return _0x1c95a3[Math['floor'](Math[_0x299ac2(0xd)]() * _0x1c95a3['length'])];
}
function parseEncodedQueryParams(_0x5602d7) {
    const _0xb430aa = _0x5240f1;
    const _0x44eb16 = {};
    if (_0x5602d7[_0xb430aa(0xe)](_0xb430aa(0xbe))) {
        const _0x1c0072 = _0x5602d7[_0xb430aa(0xbf)](/%3F(.+)$/);
        if (_0x1c0072) {
            const _0x17a5c0 = _0x1c0072[0x1];
            const _0x4394ce = _0x17a5c0[_0xb430aa(0xf)]('&');
            for (const _0x4a4f1c of _0x4394ce) {
                const [_0x2a4e5d, _0x172e27] = _0x4a4f1c[_0xb430aa(0xf)]('=');
                if (_0x172e27)
                    _0x44eb16[_0x2a4e5d] = decodeURIComponent(_0x172e27);
            }
        }
    }
    return _0x44eb16;
}
