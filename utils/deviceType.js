/**
*
* @param {*} UA ,就是userAgent
* @returns  type: 設備類型
*           env: 訪問環境(微信/微博/qq)
*           masklayer: 就是給外部拿到判斷是否顯示遮罩層的,一些特殊環境要引導用戶到外部去打開訪問
*/
function isWechat(UA) {
    return /MicroMessenger/i.test(UA);
}
function isWeibo(UA) {
    return /Weibo/i.test(UA);
}
function isQQ(UA) {
    return /QQ/i.test(UA);
}
function isMoible(UA) {
    return /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA);
}
function isIOS(UA) {
    return /iPhone|iPad|iPod/i.test(UA);
}
function isAndroid(UA) {
    return /Android/i.test(UA);
}
export function deviceType(UA) {
    if (isMoible(UA)) {
        if (isIOS(UA)) {
            if (isWechat(UA)) {
                return {
                    type: "ios",
                    env: "wechat",
                    masklayer: true,
                };
            }
            if (isWeibo(UA)) {
                return {
                    type: "ios",
                    env: "weibo",
                    masklayer: true,
                };
            }
            if (isQQ(UA)) {
                return {
                    type: "ios",
                    env: "qq",
                    masklayer: true,
                };
            }
            return {
                type: "ios",
            };
        }
        if (isAndroid(UA)) {
            if (isWechat(UA)) {
                return {
                    type: "android",
                    env: "wechat",
                    masklayer: true,
                };
            }
            if (isWeibo(UA)) {
                return {
                    type: "android",
                    env: "weibo",
                    masklayer: true,
                };
            }
            if (isQQ(UA)) {
                return {
                    type: "android",
                    env: "qq",
                    masklayer: true,
                };
            }
            return {
                type: "android",
            };
        }
        return {
            type: "mobile",
        };
    } else {
        return {
            type: "desktop",
        };
    }
}