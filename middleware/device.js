// @ts-nocheck
import { deviceType } from "~/utils/deviceType";
export default function (context) {
    // @ts-ignore
    context.userAgent = process.server ? context.req.headers["user-agent"] : navigator.userAgent;
    context.deviceType = deviceType(context.userAgent);
    context.store.commit("setDeviceType", context.deviceType.type);
}