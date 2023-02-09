import { createI18n } from 'vue-i18n'

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    // const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    // if (matched && matched.length > 1) {
    //   const locale = matched[1]
    //   messages[locale] = locales(key).default
    // }
    const matched = key.match(/([A-Za-z0-9-_]+)\/([A-Za-z0-9-_]+)\./i)
    var lang = messages[matched[1]]
    if (lang == null) {
      lang = {}
    }
    lang[matched[2]] = locales(key)
    messages[matched[1]] = lang
  })
  console.log(messages)
  return messages
}

export default createI18n({
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE || 'ko',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ko',
  messages: loadLocaleMessages()
})
