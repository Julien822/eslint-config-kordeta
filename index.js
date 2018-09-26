/**
 * Kordeta ESLint 规则
 *
 * 包含所有 ESLint 规则
 * 使用 babel-eslint 作为解析器
 *
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
            experimentalObjectRestSpread: true,
            jsx: true,
            modules: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    plugins: [
        'import',
        'node',
        'promise',
        'standard'
    ],
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    rules: {
        // 下面这些规则来自eslint-config-standard
        // start
        'accessor-pairs': 'error',
        'arrow-spacing': ['error', {'before': true, 'after': true}],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
        'camelcase': ['error', {'properties': 'never'}],
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'comma-style': ['error', 'last'],
        'constructor-super': 'error',
        'curly': ['error', 'multi-line'],
        'dot-location': ['error', 'property'],
        'eol-last': 'error',
        'eqeqeq': ['error', 'always', {'null': 'ignore'}],
        'func-call-spacing': ['error', 'never'],
        'generator-star-spacing': ['error', {'before': true, 'after': true}],
        'handle-callback-err': ['error', '^(err|error)$'],
        'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
        'keyword-spacing': ['error', {'before': true, 'after': true}],
        'new-cap': ['error', {'newIsCap': true, 'capIsNew': false}],
        'new-parens': 'error',
        'no-array-constructor': 'error',
        'no-caller': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': ['error', {'checkLoops': false}],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty-pattern': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': ['error', 'functions'],
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implied-eval': 'error',
        'no-inner-declarations': ['error', 'functions'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': ['error', {'allowLoop': false, 'allowSwitch': false}],
        'no-lone-blocks': 'error',
        'no-mixed-operators': ['error', {
            'groups': [
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            'allowSamePrecedence': true
        }],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
        'no-negated-in-lhs': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-path-concat': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-regex-spaces': 'error',
        'no-return-assign': ['error', 'except-parens'],
        'no-return-await': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-this-before-super': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': ['error', {'defaultAssignment': false}],
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': ['error', {
            'allowShortCircuit': true,
            'allowTernary': true,
            'allowTaggedTemplates': true
        }],
        'no-unused-vars': ['error', {'vars': 'all', 'args': 'none', 'ignoreRestSiblings': true}],
        'no-use-before-define': ['error', {'functions': false, 'classes': false, 'variables': false}],
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': ['error', {
            'allowMultiplePropertiesPerLine': true
        }],
        'one-var': ['error', {'initialized': 'never'}],
        'operator-linebreak': ['error', 'after', {'overrides': {'?': 'before', ':': 'before'}}],
        'padded-blocks': ['error', {'blocks': 'never', 'switches': 'never', 'classes': 'never'}],
        'prefer-promise-reject-errors': 'error',
        'quotes': ['error', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
        'rest-spread-spacing': ['error', 'never'],
        'semi-spacing': ['error', {'before': false, 'after': true}],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', 'always'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
        'spaced-comment': ['error', 'always', {
            'line': {'markers': ['*package', '!', '/', ',', '=']},
            'block': {
                'balanced': true,
                'markers': ['*package', '!', ',', ':', '::', 'flow-include'],
                'exceptions': ['*']
            }
        }],
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'never'],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'use-isnan': 'error',
        'valid-typeof': ['error', {'requireStringLiterals': true}],
        'wrap-iife': ['error', 'any', {'functionPrototypeMethods': true}],
        'yield-star-spacing': ['error', 'both'],
        'yoda': ['error', 'never'],

        'import/export': 'error',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-named-default': 'error',
        'import/no-webpack-loader-syntax': 'error',

        'node/no-deprecated-api': 'error',
        'node/process-exit-as-throw': 'error',

        'promise/param-names': 'error',

        'standard/array-bracket-even-spacing': ['error', 'either'],
        'standard/computed-property-even-spacing': ['error', 'even'],
        'standard/no-callback-literal': 'error',
        'standard/object-curly-even-spacing': ['error', 'either'],
        // eslint-config-standard end
        //
        // 下次这些是自己定义的
        // 可能的错误
        // 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
        //
        // getter 必须有返回值，并且禁止返回空，比如 return;
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        // 禁止出现空代码块，允许 catch 为空代码块
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        // @fixable 禁止出现多余的分号
        'no-extra-semi': 'error',
        //
        //
        // 最佳实践
        // 这些规则通过一些最佳实践帮助你避免问题
        //
        // 数组的方法除了 forEach 之外，回调函数必须有返回值
        'array-callback-return': 'error',
        // 将 var 定义的变量视为块作用域，禁止在块外使用
        'block-scoped-var': 'error',
        // 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
        'complexity': [
            'error',
            {
                max: 20
            }
        ],
        // for in 内部必须有 hasOwnProperty
        'guard-for-in': 'error',
        // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
        'no-case-declarations': 'error',
        // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
        'no-empty-function': [
            'error',
            {
                allow: [
                    'functions',
                    'arrowFunctions'
                ]
            }
        ],
        // 禁止使用 foo == null 或 foo != null，必须使用 foo === null 或 foo !== null
        // @off foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法
        'no-eq-null': 'off',
        // @fixable 禁止出现没必要的 label
        'no-extra-label': 'error',
        // @fixable 禁止使用 !! ~ 等难以理解的运算符
        // 仅允许使用 !!
        'no-implicit-coercion': [
            'error',
            {
                allow: [
                    '!!'
                ]
            }
        ],
        // 禁止在全局作用域下定义变量或申明函数
        'no-implicit-globals': 'error',
        // 禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
        // for (var i = 0; i < 10; i++) {
        //     (function () { return i })();
        // }
        'no-loop-func': 'error',
        // 禁止出现 location.href = 'javascript:void(0)';
        'no-script-url': 'error',
        // @fixable 禁止出现没用的 label
        'no-unused-labels': 'error',

        // 禁止出现没必要的字符串连接
        'no-useless-concat': 'error',
        // 禁止使用 void
        'no-void': 'error',
        // parseInt 必须传入第二个参数
        'radix': 'error',
        //
        //
        // 严格模式
        // 这些规则与严格模式指令有关
        //
        // @fixable 禁止使用 'strict';
        'strict': [
            'error',
            'never'
        ],
        //
        //
        // 变量
        // 这些规则与变量申明有关
        //
        // 禁止对 undefined 重新赋值
        'no-undefined': 'error',
        //
        //
        // Node.js 和 CommonJS
        // 这些规则与在 Node.js 中运行的代码或浏览器中使用的 CommonJS 有关
        //
        // 禁止直接使用 Buffer
        'no-buffer-constructor': 'error',
        //
        //
        // 风格问题
        // 这些规则与代码风格有关，所以是非常主观的
        //
        // @fixable 数组的括号内的前后禁止有空格
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        // @fixable 用作对象的计算属性时，中括号内的首尾禁止有空格
        'computed-property-spacing': [
            'error',
            'never'
        ],
        // @fixable 一个缩进必须用四个空格替代
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        // @fixable jsx 中的属性必须用双引号
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        // 代码块嵌套的深度禁止超过 5 层
        'max-depth': [
            'error',
            5
        ],
        // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
        'max-nested-callbacks': [
            'error',
            3
        ],
        // 函数的参数禁止超过 6 个
        'max-params': [
            'error',
            6
        ],
        // @fixable 禁止 if 后面不加大括号而写两行代码
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                overrides: {
                    while: 'below'
                }
            }
        ],
        // @fixable 大括号内的首尾必须有换行
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true
            }
        ],
        // @fixable 变量申明必须每行一个
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        // @fixable 结尾必须有分号
        'semi': [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ],
        // @fixable 分号必须写在行尾，禁止在行首出现
        'semi-style': [
            'error',
            'last'
        ],
        // @fixable case 的冒号前禁止有空格，冒号后必须有空格
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        //
        //
        // ECMAScript 6
        // 这些规则与 ES6（即通常所说的 ES2015）有关
        //
        // @fixable 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true
            }
        ],
        // 禁止重复 import 模块
        'no-duplicate-imports': 'error',
        // @fixable 禁止使用 var
        'no-var': 'error',
        // generator 函数内必须有 yield
        'require-yield': 'error'
    }
};
