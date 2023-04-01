// 文件名：BehaviorLog.lxl.js
// 文件功能：LLSE平台下BehaviorLog行为监控日志
// 作者：yqs112358
// 首发平台：MineBBS

var _VER = [2, 1, 5];
var _CONFIG_PATH = './plugins/BehaviorLog/config.json';
var _SHOW_ERROR_INFO = false;

ll.registerPlugin("BehaviorLog", "BehaviorLog plugin for LiteLoaderBDS", _VER, { "GitHub": "https://github.com/YQ-LL-Plugins/LLSE-BehaviorLog" });

var _DEFAULT_CONFIG_FILE = String.raw
    `{
    "ShowLogInConsole": 1,
    "Settings": {
        "onPreJoin": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onJoin": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onLeft": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onRespawn": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onPlayerDie": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onPlayerCmd": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onChat": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": [
                "{\"rawtext\":[{"
            ]
        },
        "onChangeDim": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onJump": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onSneak": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onAttack": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onUseItem": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onUseItemOn": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onTakeItem": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onDropItem": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onEat": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onStartDestroyBlock": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onDestroyBlock": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onPlaceBlock": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onOpenContainer": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onCloseContainer": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onInventoryChange": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onSetArmor": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onUseRespawnAnchor": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onOpenContainerScreen": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onMobDie": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onMobHurt": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onExplode": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onProjectileHitEntity": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onWitherBossDestroy": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onRide": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onStepOnPressurePlate": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onBlockInteracted": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onBedExplode": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onRespawnAnchorExplode": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onBlockExploded": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onCmdBlockExecute": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onContainerChange": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onProjectileHitBlock": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onRedStoneUpdate": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onHopperPushOut": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onPistonPush": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onFarmLandDecay": {
            "LogToFile": 1,
            "LogToConsole": 1,
            "NoOutputContent": []
        },
        "onUseFrameBlock": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onScoreChanged": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onFireSpread": {
            "LogToFile": 0,
            "LogToConsole": 0,
            "NoOutputContent": []
        },
        "onConsoleCmd": {
            "LogToFile": 1,
            "LogToConsole": 0,
            "NoOutputContent": []
        }
    }
}`;

//配置文件
var confFile = data.openConfig(_CONFIG_PATH, "json", _DEFAULT_CONFIG_FILE);
const conf = JSON.parse(confFile.read());
const i18n = {
    data: {},
    /**
    * 翻译主代码
    * @param {string} sentence 翻译字段
    * @param {Array[string]} replacer 替换字符
    * @returns {string}
    */
    $t(sentence, replacer = []) {
        if (!this.data[sentence]) {
            return `Translate Error:${sentence}`;
        }
        let output = this.data[sentence];
        for (let index = 0; index < replacer.length; index++) {
            const element = replacer[index];
            output = output.replace("%s" + index, element);
        }
        return output;
    },
    reload() {
        let lang = ll.language.startsWith("zh") ? "zh-cn" : "en-us";
        if (file.exists("./plugins/BehaviorLog/i18n/" + lang + ".json")) {
            this.data = data.parseJson(File.readFrom("./plugins/BehaviorLog/i18n/" + lang + ".json"));
        }
    }
};

i18n.reload();

//日志文件
function GetTodayLogPath() {
    return './logs/BehaviorLog-' + system.getTimeStr().substr(0, 10) + '.csv';
}

var logFile;
function OpenNewFile() {
    let nowLogPath = GetTodayLogPath();

    var isNewFile = false;
    if (!file.exists(nowLogPath))
        isNewFile = true;

    logFile = file.open(nowLogPath, file.AppendMode);
    if (!logFile) {
        throw Error(i18n.$t("notify.openError"));
    }

    if (isNewFile)
        file.writeLine(nowLogPath, `\ufeff${i18n.$t("common.time")},${i18n.$t("common.dim")},${i18n.$t("common.source")},X,Y,Z,${i18n.$t("common.event")},${i18n.$t("common.target")},x,y,z,${i18n.$t("common.extra")}`);
}
OpenNewFile();

//定时更新文件
var lastDay = system.getTimeObj().D;
setInterval(function () {
    if (lastDay != system.getTimeObj().D) {
        //新的一天
        lastDay = system.getTimeObj().D;
        logFile.close();
        OpenNewFile();
    }
}, 30000);

//输出日志
var consoleQueue = [], fileQueue = [];
setInterval(function () {
    //File Log
    let logStr = "";
    if (fileQueue.length != 0) {
        try {
            while (fileQueue.length > 1) {
                logStr += fileQueue.shift() + "\n";
            }
            logStr += fileQueue.shift();
            logFile.writeLine(String(logStr));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    }

    //Console Log
    logStr = "";
    if (consoleQueue.length != 0) {
        while (consoleQueue.length > 1) {
            logStr += consoleQueue.shift() + "\n";
        }
        logStr += consoleQueue.shift();
        if (conf.ShowLogInConsole)
            fastLog(String(logStr));
    }
}, 50);
setInterval(function () {
    try {
        logFile.flush();
    }
    catch (exception) {
        if (_SHOW_ERROR_INFO) throw exception;
    }
}, 5000);

function writeLog(logToFile, logToConsole, NoOutputContent, event, dim, doer, dx, dy, dz, target, tx, ty, tz, notes) {
    let logStr = system.getTimeStr() + ',' + dim + ',' + doer + ',' + dx + ',' + dy + ',' + dz
        + ',' + event + ',' + target + ',' + tx + ',' + ty + ',' + tz + ',' + notes;

    if (NoOutputContent.length != 0) {
        let no = false
        NoOutputContent.forEach(element => {
            if (logStr.indexOf(element) != -1) {
                no = true;
                return false;
            }
        });
        if (no) return;
    }

    if (logToFile)
        fileQueue.push(logStr);
    if (conf.ShowLogInConsole && logToConsole) {
        logStr = '[' + event + '] ';
        if (dim != '')
            logStr += i18n.$t("common.at") + dim + '  ';
        if (doer != '')
            logStr += doer;
        if (dx != '')
            logStr += ' (' + dx + ',' + dy + ',' + dz + ')';
        logStr += '  ' + event + '  ';
        if (target != '')
            logStr += target;
        if (tx != '')
            logStr += ' (' + tx + ',' + ty + ',' + tz + ')';
        logStr += '  ' + notes;

        consoleQueue.push(logStr);
    }
}

//导出接口
function writeLogExported(event, dim, doer, dx, dy, dz, target, tx, ty, tz, notes, logToConsole, logToFile) {
    writeLog(logToFile, logToConsole, [], event, dim, doer, dx, dy, dz, target, tx, ty, tz, notes);
}
ll.export(writeLogExported, "BehaviorLog_WriteLog");

//监控部分
var settings = conf.Settings;

//onPreJoin
if (settings.onPreJoin.LogToFile || settings.onPreJoin.LogToConsole) {
    let logToFile = settings.onPreJoin.LogToFile;
    let logToConsole = settings.onPreJoin.LogToConsole;
    let noOutputContent = settings.onPreJoin.NoOutputContent;
    mc.listen("onPreJoin", function (pl) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onPreJoin"), '', pl.realName, '', '', '', '', '', '', '', 'xuid=' + pl.xuid);
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onJoin
if (settings.onJoin.LogToFile || settings.onJoin.LogToConsole) {
    let logToFile = settings.onJoin.LogToFile;
    let logToConsole = settings.onJoin.LogToConsole;
    let noOutputContent = settings.onJoin.NoOutputContent;
    mc.listen("onJoin", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onJoin"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', 'xuid=' + pl.xuid);
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onLeft
if (settings.onLeft.LogToFile || settings.onLeft.LogToConsole) {
    let logToFile = settings.onLeft.LogToFile;
    let logToConsole = settings.onLeft.LogToConsole;
    let noOutputContent = settings.onLeft.NoOutputContent;
    mc.listen("onLeft", function (pl) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onLeft"), '', pl.realName, '', '', '', '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onRespawn
if (settings.onRespawn.LogToFile || settings.onRespawn.LogToConsole) {
    let logToFile = settings.onRespawn.LogToFile;
    let logToConsole = settings.onRespawn.LogToConsole;
    let noOutputContent = settings.onRespawn.NoOutputContent;
    mc.listen("onRespawn", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onRespawn"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onPlayerDie
if (settings.onPlayerDie.LogToFile || settings.onPlayerDie.LogToConsole) {
    let logToFile = settings.onPlayerDie.LogToFile;
    let logToConsole = settings.onPlayerDie.LogToConsole;
    let noOutputContent = settings.onPlayerDie.NoOutputContent;
    mc.listen("onPlayerDie", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onPlayerDie"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onPlayerCmd
if (settings.onPlayerCmd.LogToFile || settings.onPlayerCmd.LogToConsole) {
    let logToFile = settings.onPlayerCmd.LogToFile;
    let logToConsole = settings.onPlayerCmd.LogToConsole;
    let noOutputContent = settings.onPlayerCmd.NoOutputContent;
    mc.listen("onPlayerCmd", function (pl, cmd) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onPlayerCmd"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), cmd, '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onChat
if (settings.onChat.LogToFile || settings.onChat.LogToConsole) {
    let logToFile = settings.onChat.LogToFile;
    let logToConsole = settings.onChat.LogToConsole;
    let noOutputContent = settings.onChat.NoOutputContent;
    mc.listen("onChat", function (pl, msg) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onChat"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), msg, '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onChangeDim
if (settings.onChangeDim.LogToFile || settings.onChangeDim.LogToConsole) {
    let logToFile = settings.onChangeDim.LogToFile;
    let logToConsole = settings.onChangeDim.LogToConsole;
    let noOutputContent = settings.onChangeDim.NoOutputContent;
    mc.listen("onChangeDim", function (pl, to) {
        try {
            let dimName = "Unknown";
            if (to == 0)
                dimName = i18n.$t("dim.0");
            else if (to == 1)
                dimName = i18n.$t("dim.1");
            else if (to == 2)
                dimName = i18n.$t("dim.2");

            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onChangeDim"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), i18n.$t("common.to") + dimName, '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onJump
if (settings.onJump.LogToFile || settings.onJump.LogToConsole) {
    let logToFile = settings.onJump.LogToFile;
    let logToConsole = settings.onJump.LogToConsole;
    let noOutputContent = settings.onJump.NoOutputContent;
    mc.listen("onJump", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onJump"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onSneak
if (settings.onSneak.LogToFile || settings.onSneak.LogToConsole) {
    let logToFile = settings.onSneak.LogToFile;
    let logToConsole = settings.onSneak.LogToConsole;
    let noOutputContent = settings.onSneak.NoOutputContent;
    mc.listen("onSneak", function (pl, isSneaking) {
        try {
            let pos = pl.pos;
            if (isSneaking)
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onSneak"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onAttack
if (settings.onAttack.LogToFile || settings.onAttack.LogToConsole) {
    let logToFile = settings.onAttack.LogToFile;
    let logToConsole = settings.onAttack.LogToConsole;
    let noOutputContent = settings.onAttack.NoOutputContent;
    mc.listen("onAttack", function (pl, ac) {
        try {
            let pos = pl.pos;
            let acPos = ac.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onAttack"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), ac.name, acPos.x.toFixed(0), acPos.y.toFixed(0), acPos.z.toFixed(0),i18n.$t("detial.attack",[pl.getHand().name,pl.getHand().type]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onUseItem
if (settings.onUseItem.LogToFile || settings.onUseItem.LogToConsole) {
    let logToFile = settings.onUseItem.LogToFile;
    let logToConsole = settings.onUseItem.LogToConsole;
    let noOutputContent = settings.onUseItem.NoOutputContent;
    mc.listen("onUseItem", function (pl, it) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onUseItem"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), it.name, '', '', '', i18n.$t("detial.useItem",[it.type]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onUseItemOn
if (settings.onUseItemOn.LogToFile || settings.onUseItemOn.LogToConsole) {
    let logToFile = settings.onUseItemOn.LogToFile;
    let logToConsole = settings.onUseItemOn.LogToConsole;
    let noOutputContent = settings.onUseItemOn.NoOutputContent;
    mc.listen("onUseItemOn", function (pl, it, bl) {
        try {
            //防抖
            if (pl.getExtraData("_BEHAVIOR_LOG_PLACE_BLOCK"))
                return;

            let pos = pl.pos;
            let blPos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onUseItemOn"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), i18n.$t("detial.onUseItemOn",[it.name,it.type]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onTakeItem
if (settings.onTakeItem.LogToFile || settings.onTakeItem.LogToConsole) {
    let logToFile = settings.onTakeItem.LogToFile;
    let logToConsole = settings.onTakeItem.LogToConsole;
    let noOutputContent = settings.onTakeItem.NoOutputContent;
    mc.listen("onTakeItem", function (pl, en, it) {
        try {
            let enPos = en.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onTakeItem"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), it.name, enPos.x.toFixed(0), enPos.y.toFixed(0), enPos.z.toFixed(0), `${it.count}个`);
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onDropItem
if (settings.onDropItem.LogToFile || settings.onDropItem.LogToConsole) {
    let logToFile = settings.onDropItem.LogToFile;
    let logToConsole = settings.onDropItem.LogToConsole;
    let noOutputContent = settings.onDropItem.NoOutputContent;
    mc.listen("onDropItem", function (pl, it) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onDropItem"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), it.name, '', '', '', `${it.count}`);
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onEat
if (settings.onEat.LogToFile || settings.onEat.LogToConsole) {
    let logToFile = settings.onEat.LogToFile;
    let logToConsole = settings.onEat.LogToConsole;
    let noOutputContent = settings.onEat.NoOutputContent;
    mc.listen("onEat", function (pl, it) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onEat"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), it.name, '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onStartDestroyBlock
if (settings.onStartDestroyBlock.LogToFile || settings.onStartDestroyBlock.LogToConsole) {
    let logToFile = settings.onStartDestroyBlock.LogToFile;
    let logToConsole = settings.onStartDestroyBlock.LogToConsole;
    let noOutputContent = settings.onStartDestroyBlock.NoOutputContent;
    mc.listen("onStartDestroyBlock", function (pl, bl) {
        try {
            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onStartDestroyBlock"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onDestroyBlock
if (settings.onDestroyBlock.LogToFile || settings.onDestroyBlock.LogToConsole) {
    let logToFile = settings.onDestroyBlock.LogToFile;
    let logToConsole = settings.onDestroyBlock.LogToConsole;
    let noOutputContent = settings.onDestroyBlock.NoOutputContent;
    mc.listen("onDestroyBlock", function (pl, bl) {
        try {
            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onDestroyBlock"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onPlaceBlock
if (settings.onPlaceBlock.LogToFile || settings.onPlaceBlock.LogToConsole) {
    let logToFile = settings.onPlaceBlock.LogToFile;
    let logToConsole = settings.onPlaceBlock.LogToConsole;
    let noOutputContent = settings.onPlaceBlock.NoOutputContent;
    mc.listen("onPlaceBlock", function (pl, bl) {
        try {
            //防抖
            if (pl.getExtraData("_BEHAVIOR_LOG_PLACE_BLOCK"))
                return;
            else {
                pl.setExtraData("_BEHAVIOR_LOG_PLACE_BLOCK", true);
                setTimeout(function () { pl.setExtraData("_BEHAVIOR_LOG_PLACE_BLOCK", null); }, 100);
            }

            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onPlaceBlock"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onOpenContainer
if (settings.onOpenContainer.LogToFile || settings.onOpenContainer.LogToConsole) {
    let logToFile = settings.onOpenContainer.LogToFile;
    let logToConsole = settings.onOpenContainer.LogToConsole;
    let noOutputContent = settings.onOpenContainer.NoOutputContent;
    mc.listen("onOpenContainer", function (pl, bl) {
        try {
            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onOpenContainer"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onCloseContainer
if (settings.onCloseContainer.LogToFile || settings.onCloseContainer.LogToConsole) {
    let logToFile = settings.onCloseContainer.LogToFile;
    let logToConsole = settings.onCloseContainer.LogToConsole;
    let noOutputContent = settings.onCloseContainer.NoOutputContent;
    mc.listen("onCloseContainer", function (pl, bl) {
        try {
            let blPos = bl.pos;
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onCloseContainer"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

////////////////////////// 细化修改 //////////////////////////
//onInventoryChange
if (settings.onInventoryChange.LogToFile || settings.onInventoryChange.LogToConsole) {
    let logToFile = settings.onInventoryChange.LogToFile;
    let logToConsole = settings.onInventoryChange.LogToConsole;
    let noOutputContent = settings.onInventoryChange.NoOutputContent;
    mc.listen("onInventoryChange", function (pl, slotNum, oldItem, newItem) {
        try {
            if (pl.getExtraData("_BEHAVIOR_LOG_PLAYER_IS_JOINING_SERVER"))
                return;

            let pos = pl.pos;
            if (newItem.isNull())
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onInventoryOut"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), oldItem.name, '', '', '', i18n.$t("detial.onInventory",[oldItem.count,slotNum]));
            else
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onInventoryIn"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), newItem.name, '', '', '', i18n.$t("detial.onInventory",[newItem.count,slotNum]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onSetArmor
if (settings.onSetArmor.LogToFile || settings.onSetArmor.LogToConsole) {
    let logToFile = settings.onSetArmor.LogToFile;
    let logToConsole = settings.onSetArmor.LogToConsole;
    let noOutputContent = settings.onSetArmor.NoOutputContent;
    mc.listen("onSetArmor", function (pl, slotNum, newItem) {
        try {
            if (pl.getExtraData("_BEHAVIOR_LOG_PLAYER_IS_JOINING_SERVER"))
                return;

            let pos = pl.pos;
            if (newItem.isNull())
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onSetArmorOut"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', i18n.$t("detial.slot",[slotNum]));
            else
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onSetArmorIn"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), newItem.name, '', '', '', i18n.$t("detial.onInventory",[newItem.count,slotNum]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onUseRespawnAnchor
if (settings.onUseRespawnAnchor.LogToFile || settings.onUseRespawnAnchor.LogToConsole) {
    let logToFile = settings.onUseRespawnAnchor.LogToFile;
    let logToConsole = settings.onUseRespawnAnchor.LogToConsole;
    let noOutputContent = settings.onUseRespawnAnchor.NoOutputContent;
    mc.listen("onUseRespawnAnchor", function (pl, blPos) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onUseRespawnAnchor"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), 'minecraft:respawn_anchor', blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onOpenContainerScreen
if (settings.onOpenContainerScreen.LogToFile || settings.onOpenContainerScreen.LogToConsole) {
    let logToFile = settings.onOpenContainerScreen.LogToFile;
    let logToConsole = settings.onOpenContainerScreen.LogToConsole;
    let noOutputContent = settings.onOpenContainerScreen.NoOutputContent;
    mc.listen("onOpenContainerScreen", function (pl) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onOpenContainerScreen"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onMobDie
if (settings.onMobDie.LogToFile || settings.onMobDie.LogToConsole) {
    let logToFile = settings.onMobDie.LogToFile;
    let logToConsole = settings.onMobDie.LogToConsole;
    let noOutputContent = settings.onMobDie.NoOutputContent;
    mc.listen("onMobDie", function (mob, source) {
        try {
            if (mob.type != "minecraft:player") {
                let pos = mob.pos;
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onMobDie"), pos.dim, mob.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', i18n.$t("detial.attickFrom",[source.name]));
            }
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onMobHurt
if (settings.onMobHurt.LogToFile || settings.onMobHurt.LogToConsole) {
    let logToFile = settings.onMobHurt.LogToFile;
    let logToConsole = settings.onMobHurt.LogToConsole;
    let noOutputContent = settings.onMobHurt.NoOutputContent;
    mc.listen("onMobHurt", function (mob, source, damage) {
        try {
            let pos = mob.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onMobHurt"), pos.dim, mob.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', i18n.$t("detial.hurt",[source.name,damage]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onExplode
if (settings.onExplode.LogToFile || settings.onExplode.LogToConsole) {
    let logToFile = settings.onExplode.LogToFile;
    let logToConsole = settings.onExplode.LogToConsole;
    let noOutputContent = settings.onExplode.NoOutputContent;
    mc.listen("onExplode", function (source, pos) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onExplode"), pos.dim, source.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onProjectileHitEntity
if (settings.onProjectileHitEntity.LogToFile || settings.onProjectileHitEntity.LogToConsole) {
    let logToFile = settings.onProjectileHitEntity.LogToFile;
    let logToConsole = settings.onProjectileHitEntity.LogToConsole;
    let noOutputContent = settings.onProjectileHitEntity.NoOutputContent;
    mc.listen("onProjectileHitEntity", function (entity, source) {
        try {
            let pos = entity.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onProjectileHitEntity"), pos.dim, source.name, '', '', '', entity.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onWitherBossDestroy
if (settings.onWitherBossDestroy.LogToFile || settings.onWitherBossDestroy.LogToConsole) {
    let logToFile = settings.onWitherBossDestroy.LogToFile;
    let logToConsole = settings.onWitherBossDestroy.LogToConsole;
    let noOutputContent = settings.onWitherBossDestroy.NoOutputContent;
    mc.listen("onWitherBossDestroy", function (witherBoss, AAbb, aaBB) {
        try {
            let pos = witherBoss.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onWitherBossDestroy"), pos.dim, witherBoss.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', i18n.$t("detial.witherDestpry",[Pos2String(AAbb),Pos2String(aaBB)]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onRide
if (settings.onRide.LogToFile || settings.onRide.LogToConsole) {
    let logToFile = settings.onRide.LogToFile;
    let logToConsole = settings.onRide.LogToConsole;
    let noOutputContent = settings.onRide.NoOutputContent;
    mc.listen("onRide", function (ac1, ac2) {
        try {
            let pos = ac1.pos;
            let pos2 = ac2.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onRide"), pos.dim, ac1.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), ac2.name, pos2.x.toFixed(0), pos2.y.toFixed(0), pos2.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onStepOnPressurePlate
if (settings.onStepOnPressurePlate.LogToFile || settings.onStepOnPressurePlate.LogToConsole) {
    let logToFile = settings.onStepOnPressurePlate.LogToFile;
    let logToConsole = settings.onStepOnPressurePlate.LogToConsole;
    let noOutputContent = settings.onStepOnPressurePlate.NoOutputContent;
    mc.listen("onStepOnPressurePlate", function (ac, plate) {
        try {
            let pos = ac.pos;
            let blPos = plate.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onStepOnPressurePlate"), pos.dim, ac.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), plate.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onBlockInteracted
if (settings.onBlockInteracted.LogToFile || settings.onBlockInteracted.LogToConsole) {
    let logToFile = settings.onBlockInteracted.LogToFile;
    let logToConsole = settings.onBlockInteracted.LogToConsole;
    let noOutputContent = settings.onBlockInteracted.NoOutputContent;
    mc.listen("onBlockInteracted", function (pl, bl) {
        try {
            let pos = pl.pos;
            let blPos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onBlockInteracted"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onBedExplode
if (settings.onBedExplode.LogToFile || settings.onBedExplode.LogToConsole) {
    let logToFile = settings.onBedExplode.LogToFile;
    let logToConsole = settings.onBedExplode.LogToConsole;
    let noOutputContent = settings.onBedExplode.NoOutputContent;
    mc.listen("onBedExplode", function (pos) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onBedExplode"), pos.dim, "minecraft:bed", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onRespawnAnchorExplode
if (settings.onRespawnAnchorExplode.LogToFile || settings.onRespawnAnchorExplode.LogToConsole) {
    let logToFile = settings.onRespawnAnchorExplode.LogToFile;
    let logToConsole = settings.onRespawnAnchorExplode.LogToConsole;
    let noOutputContent = settings.onRespawnAnchorExplode.NoOutputContent;
    mc.listen("onRespawnAnchorExplode", function (pos, pl) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onRespawnAnchorExplode"), pos.dim, "minecraft:respawn_anchor", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', i18n.$t("detial.causeBy",[pl.realName]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onBlockExploded
if (settings.onBlockExploded.LogToFile || settings.onBlockExploded.LogToConsole) {
    let logToFile = settings.onBlockExploded.LogToFile;
    let logToConsole = settings.onBlockExploded.LogToConsole;
    let noOutputContent = settings.onBlockExploded.NoOutputContent;
    mc.listen("onBlockExploded", function (bl, source) {
        try {
            let pos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onBlockExploded"), pos.dim, bl.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', i18n.$t("detial.causeBy",[source.name]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onCmdBlockExecute
if (settings.onCmdBlockExecute.LogToFile || settings.onCmdBlockExecute.LogToConsole) {
    let logToFile = settings.onCmdBlockExecute.LogToFile;
    let logToConsole = settings.onCmdBlockExecute.LogToConsole;
    let noOutputContent = settings.onCmdBlockExecute.NoOutputContent;
    mc.listen("onCmdBlockExecute", function (cmd, pos) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onCmdBlockExecute"), pos.dim, "minecraft:command_block", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), cmd, '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

////////////////////////// 细化修改 //////////////////////////
//onContainerChange
if (settings.onContainerChange.LogToFile || settings.onContainerChange.LogToConsole) {
    let logToFile = settings.onContainerChange.LogToFile;
    let logToConsole = settings.onContainerChange.LogToConsole;
    let noOutputContent = settings.onContainerChange.NoOutputContent;
    mc.listen("onContainerChange", function (pl, bl, slotNum, oldItem, newItem) {
        try {
            let pos = pl.pos;
            let blPos = bl.pos;
            if (newItem.isNull())
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onContainerOut"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), i18n.$t("detial.ContainOut",[slotNum,oldItem.count,oldItem.name]));
            else
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onContainerIn"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), i18n.$t("detial.ContainIn",[slotNum,newItem.count,newItem.name]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onProjectileHitBlock
if (settings.onProjectileHitBlock.LogToFile || settings.onProjectileHitBlock.LogToConsole) {
    let logToFile = settings.onProjectileHitBlock.LogToFile;
    let logToConsole = settings.onProjectileHitBlock.LogToConsole;
    let noOutputContent = settings.onProjectileHitBlock.NoOutputContent;
    mc.listen("onProjectileHitBlock", function (bl, source) {
        try {
            let pos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onProjectileHitBlock"), pos.dim, source.name, '', '', '', bl.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onRedStoneUpdate
if (settings.onRedStoneUpdate.LogToFile || settings.onRedStoneUpdate.LogToConsole) {
    let logToFile = settings.onRedStoneUpdate.LogToFile;
    let logToConsole = settings.onRedStoneUpdate.LogToConsole;
    let noOutputContent = settings.onRedStoneUpdate.NoOutputContent;
    mc.listen("onRedStoneUpdate", function (bl, level, isActive) {
        try {
            let pos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onRedStoneUpdate"), pos.dim, bl.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', isActive ? i18n.$t("detial.on",[level]): i18n.$t("detial.off"));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onHopperPushOut
if (settings.onHopperPushOut.LogToFile || settings.onHopperPushOut.LogToConsole) {
    let logToFile = settings.onHopperPushOut.LogToFile;
    let logToConsole = settings.onHopperPushOut.LogToConsole;
    let noOutputContent = settings.onHopperPushOut.NoOutputContent;
    mc.listen("onHopperPushOut", function (pos) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onHopperPushOut"), pos.dim, "Hopper", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onPistonPush
if (settings.onPistonPush.LogToFile || settings.onPistonPush.LogToConsole) {
    let logToFile = settings.onPistonPush.LogToFile;
    let logToConsole = settings.onPistonPush.LogToConsole;
    let noOutputContent = settings.onPistonPush.NoOutputContent;
    mc.listen("onPistonPush", function (pos, bl) {
        try {
            let pis = mc.getBlock(pos);
            let blPos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onPistonPush"), pos.dim, pis.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onFarmLandDecay
if (settings.onFarmLandDecay.LogToFile || settings.onFarmLandDecay.LogToConsole) {
    let logToFile = settings.onFarmLandDecay.LogToFile;
    let logToConsole = settings.onFarmLandDecay.LogToConsole;
    let noOutputContent = settings.onFarmLandDecay.NoOutputContent;
    mc.listen("onFarmLandDecay", function (blPos, ac) {
        try {
            let pos = ac.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onFarmLandDecay"), pos.dim, ac.name, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), 'minecraft:farm_land', blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onUseFrameBlock
if (settings.onUseFrameBlock.LogToFile || settings.onUseFrameBlock.LogToConsole) {
    let logToFile = settings.onUseFrameBlock.LogToFile;
    let logToConsole = settings.onUseFrameBlock.LogToConsole;
    let noOutputContent = settings.onUseFrameBlock.NoOutputContent;
    mc.listen("onUseFrameBlock", function (pl, bl) {
        try {
            let pos = pl.pos;
            let blPos = bl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onUseFrameBlock"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), bl.name, blPos.x.toFixed(0), blPos.y.toFixed(0), blPos.z.toFixed(0), '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onScoreChanged
if (settings.onScoreChanged.LogToFile || settings.onScoreChanged.LogToConsole) {
    let logToFile = settings.onScoreChanged.LogToFile;
    let logToConsole = settings.onScoreChanged.LogToConsole;
    let noOutputContent = settings.onScoreChanged.NoOutputContent;
    mc.listen("onScoreChanged", function (pl, num, name, disName) {
        try {
            let pos = pl.pos;
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onScoreChanged"), pos.dim, pl.realName, pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', i18n.$t("detial.scoreboardChange",[name,num]));
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onFireSpread
if (settings.onFireSpread.LogToFile || settings.onFireSpread.LogToConsole) {
    let logToFile = settings.onFireSpread.LogToFile;
    let logToConsole = settings.onFireSpread.LogToConsole;
    let noOutputContent = settings.onFireSpread.NoOutputContent;
    mc.listen("onFireSpread", function (pos) {
        try {
            if (pos.dimid != 1)
                writeLog(logToFile, logToConsole, noOutputContent,
                    i18n.$t("event.onFireSpread"), pos.dim, "minecraft:fire", pos.x.toFixed(0), pos.y.toFixed(0), pos.z.toFixed(0), '', '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//onConsoleCmd
if (settings.onConsoleCmd.LogToFile || settings.onConsoleCmd.LogToConsole) {
    let logToFile = settings.onConsoleCmd.LogToFile;
    let logToConsole = settings.onConsoleCmd.LogToConsole;
    let noOutputContent = settings.onConsoleCmd.NoOutputContent;
    mc.listen("onConsoleCmd", function (cmd) {
        try {
            writeLog(logToFile, logToConsole, noOutputContent,
                i18n.$t("event.onConsoleCmd"), '', '', '', '', '', cmd, '', '', '', '');
        }
        catch (exception) {
            if (_SHOW_ERROR_INFO) throw exception;
        }
    });
}

//特殊记录
mc.listen("onPreJoin", function (pl) {
    pl.setExtraData("_BEHAVIOR_LOG_PLAYER_IS_JOINING_SERVER", true);
});

mc.listen("onJoin", function (pl) {
    pl.setExtraData("_BEHAVIOR_LOG_PLAYER_IS_JOINING_SERVER", false);
});

//实用
function Pos2String(pos) {
    return `(${pos.x.toFixed(0)},${pos.y.toFixed(0)},${pos.z.toFixed(0)})`;
}

//清理
delete settings;

//注册临时关闭
mc.regConsoleCmd("behaviorlog", "Contorl BehaviorLog", function (args) {
    if (args[0] == 'hide') {
        if (conf.ShowLogInConsole)
            conf.ShowLogInConsole = false;
        log(i18n.$t("console.off"));
    }
    else if (args[0] == 'show') {
        if (!conf.ShowLogInConsole)
            conf.ShowLogInConsole = true;
        log(i18n.$t("console.on"));
    }
    else
        log(i18n.$t("console.error"));
});

log(i18n.$t("info.log") + _VER[0] + "." + _VER[1] + "." + _VER[2]);
log(i18n.$t("info.configD") + _CONFIG_PATH);
log('Author：yqs112358   Publised at MineBBS');