import i18n from "@/i18n";
/* eslint-disable */
const Trans = {
    get supportedLocales() {
        if(process.env.VUE_APP_SUPPORTED_LOCALES) {
            return process.env.VUE_APP_SUPPORTED_LOCALES.split(",")
        }
    },
    set currentLocale(newLocale: any) { // <--- 2
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        i18n.global.locale.value = newLocale
    },
    async switchLanguage(newLocale: string) { // <--- 3
        Trans.currentLocale = newLocale
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.querySelector("html").setAttribute("lang", newLocale)
    },
}
export default Trans