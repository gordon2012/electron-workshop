const {app, Menu, shell} = require('electron');
const isDev = require('electron-is-dev');

const buildMenu = () => {
    const template = [];

    // osx
    if(process.platform === 'darwin') {
        template.push({
            label: app.getName(),
            submenu: [
                {role: 'about'},
                {type: 'separator'},
                {role: 'services', submenu: []},
                {type: 'separator'},
                {role: 'hide'},
                {role: 'hideothers'},
                {role: 'unhide'},
                {type: 'separator'},
                {role: 'quit'}
            ]
        });
    }

    // Edit menu
    template.push({
        label: 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {type: 'separator'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {role: 'pastandmatchstyle'},
            {role: 'delete'},
            {role: 'selectall'}
        ]
    });

    // dev
    if(isDev) {
        template.push({
            label: 'View',
            submenu: [
                {role: 'reload'},
                {role: 'forcereload'},
                {role: 'toggledevtools'},
                {type: 'separator'},
                {role: 'resetzoom'},
                {role: 'zoomin'},
                {role: 'zoomout'},
                {type: 'separator'},
                {role: 'togglefullscreen'},
            ]
        });
    }

    template.push({
        role: 'help',
        submenu: [{
            label: 'Take me to Google',
            accelerator: 'CmdOrCtrl+G',
            click() {
                shell.openExternal('https://google.com');
            }
        }]
    });

    const menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);
};

module.exports = {buildMenu};
