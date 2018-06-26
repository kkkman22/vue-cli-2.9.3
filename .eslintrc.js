// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  // 用什么插件解析
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    // 浏览器环境
    browser: true,
  },
  // 继承
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    // eslint-plugin-vue 插件，使eslint对Vue文件生效
    'vue'
  ],
  // add your custom rules here
  // 自定义一些规则
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
