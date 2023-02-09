<template>
  <div class="container-lang">
  <select class="form-select" id="langSwitcher" @change="switchLanguage">
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
export default {
  name: "LanguageSwitcher.vue",
  setup() {
    const { t, locale } = useI18n()
    const supportedLocales = Tr.supportedLocales
    const switchLanguage = async (event) => { // <--- 1
      const newLocale = event.target.value // <--- 2
      await Tr.switchLanguage(newLocale) // <--- 3
    }
    return { t, locale, supportedLocales, switchLanguage } // <--- 4
  }
}
</script>

<style scoped>
#langSwitcher {
  width: 15%;
  margin-right: 50px;
  float: right;
  translate: 0 -20px;
  background-color: var(--main-color);
  color: var(--text-color);
}
.container-lang {
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 699px) {
  #langSwitcher {
    width: 80%;
  }
}
</style>