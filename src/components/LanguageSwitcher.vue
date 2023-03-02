<template>
  <div class="container-lang">
    <iframe id="sponsorIframe" src="https://github.com/sponsors/nigel12341/button" title="Sponsor nigel12341"
            height="32" width="114"></iframe>
  <select class="form-select" aria-label="language switch form" id="langSwitcher" @change="switchLanguage">
    <option
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale">
      {{ t(`locale.${sLocale}`) }}
      </option>
    </select>
  </div>
</template>

<script>
import Tr from "@/translation.ts"
import {useI18n} from "vue-i18n";
import {useMeta} from "vue-meta";


export default {
  name: "LanguageSwitcher.vue",
  setup() {
    const { t, locale } = useI18n()
    const supportedLocales = Tr.supportedLocales
    const switchLanguage = async (event) => { // <--- 1
      const newLocale = event.target.value // <--- 2
      await Tr.switchLanguage(newLocale) // <--- 3
    }
    useMeta({
      htmlAttrs: { lang: locale.value }
    })
    return { t, locale, supportedLocales, switchLanguage } // <--- 4

  }
}
</script>

<style scoped>
#sponsorIframe {
  float: left;
  margin-left: 1%;
  transform: translate(0, -20px);
}

#langSwitcher {
  width: 15%;
  margin-right: 50px;
  float: right;
  transform: translate(0, -20px);
  background-color: var(--main-color);
  color: var(--text-color);
  border-color: var(--main-color);
}
.container-lang {
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 1040px) {
  #langSwitcher {
    width: 30%;
  }
}
@media only screen and (max-width: 450px) {
  #langSwitcher {
    width: 50%;
  }
}

@media only screen and (max-width: 350px) {
  #langSwitcher {
    width: 47%;
  }
}

</style>