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
        // setter 必须有对应的 getter，getter 可以没有对应的 setter
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: false
            }
        ],
        // @fixable 箭头函数的箭头前后必须有空格
        'arrow-spacing': ['error', {'before': true, 'after': true}],
        // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
        'block-spacing': ['error', 'always'],
        // @fixable if 与 else 的大括号风格必须一致
        // @off else 代码块可能前面需要有一行注释
        'brace-style': 'off',
        // 变量名必须是 camelcase 风格的
        'camelcase': ['error', {'properties': 'never'}],
        // @fixable 对象的最后一个属性末尾必须有逗号
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        // @fixable 逗号前禁止有空格，逗号后必须要有空格
        'comma-spacing': ['error', {'before': false, 'after': true}],
        // @fixable 禁止在行首写逗号
        'comma-style': ['error', 'last'],
        // constructor 中必须有 super
        'constructor-super': 'error',
        // @fixable if 后面必须要有 {}
        'curly': ['error', 'all'],
        // @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
        'dot-location': ['error', 'property'],
        // @fixable 文件最后一行必须有一个空行
        'eol-last': 'error',
        // @off 公司接口不规范，去掉此要求
        'eqeqeq': 'off',
        // @fixable 函数名和执行它的括号之间禁止有空格
        'func-call-spacing': ['error', 'never'],
        // @fixable generator 的 * 前后必须有空格
        'generator-star-spacing': ['error', {'before': true, 'after': true}],
        // callback 中的 error 必须被处理
        'handle-callback-err': ['error', '^(err|error)$'],
        // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
        'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
        // @fixable 关键字前后必须有空格
        'keyword-spacing': ['error', {'before': true, 'after': true}],
        // new 后面的类名必须首字母大写
        'new-cap': ['error', {'newIsCap': true, 'capIsNew': false}],
        // @fixable new 后面的类必须有小括号
        'new-parens': 'error',
        // 禁止使用 Array 构造函数
        'no-array-constructor': 'error',
        // 禁止使用 caller 或 callee
        'no-caller': 'error',
        // 禁止对定义过的 class 重新赋值
        'no-class-assign': 'error',
        // 禁止与负零进行比较
        'no-compare-neg-zero': 'error',
        // 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': ['error', 'except-parens'],
        // 禁止对使用 const 定义的常量重新赋值
        'no-const-assign': 'error',
        // 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
        'no-constant-condition': ['error', {'checkLoops': false}],
        // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
        'no-control-regex': 'error',
        // @fixable 禁止使用 debugger
        'no-debugger': 'error',
        // 禁止使用 delete
        'no-delete-var': 'error',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
        // 禁止重复定义类
        'no-dupe-class-members': 'error',
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        // 禁止在 switch 语句中出现重复测试表达式的 case
        'no-duplicate-case': 'error',
        // 禁止在正则表达式中使用空的字符集 []
        'no-empty-character-class': 'error',
        // 禁止解构中出现空 {} 或 []
        'no-empty-pattern': 'error',
        // 禁止使用 eval
        'no-eval': 'error',
        // 禁止将 catch 的第一个参数 error 重新赋值
        'no-ex-assign': 'error',
        // 禁止修改原生对象
        'no-extend-native': 'error',
        // @fixable 禁止出现没必要的 bind
        'no-extra-bind': 'error',
        // @fixable 禁止不必要的布尔类型转换，比如 !! 或 Boolean
        'no-extra-boolean-cast': 'error',
        // @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
        'no-extra-parens': ['error', 'functions'],
        // switch 的 case 内必须有 break, return 或 throw
        'no-fallthrough': 'error',
        // @fixable 表示小数时，禁止省略 0，比如 .5
        'no-floating-decimal': 'error',
        // 禁止将一个函数声明重新赋值，如：
        // function foo() {}
        // foo = bar
        'no-func-assign': 'error',
        // 禁止对全局变量赋值
        'no-global-assign': 'error',
        // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
        'no-implied-eval': 'error',
        // 禁止在 if 代码块内出现函数声明
        'no-inner-declarations': ['error', 'functions'],
        // 禁止在 RegExp 构造函数中出现非法的正则表达式
        'no-invalid-regexp': 'error',
        // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
        'no-irregular-whitespace': 'error',
        // 禁止使用 __iterator__
        'no-iterator': 'error',
        // 禁止 label 名称与定义过的变量重复
        'no-label-var': 'error',
        // 禁止使用 label
        'no-labels': ['error', {'allowLoop': false, 'allowSwitch': false}],
        // 禁止使用没必要的 {} 作为代码块
        'no-lone-blocks': 'error',
        // 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
        // @off 太严格了，可以由使用者自己去判断如何混用操作符
        'no-mixed-operators': 'off',
        // 禁止混用空格和缩进
        'no-mixed-spaces-and-tabs': 'error',
        // @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
        'no-multi-spaces': [
            'error', {
                ignoreEOLComments: true,
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],
        // 禁止使用 \ 来换行字符串
        'no-multi-str': 'error',
        // @fixable 禁止出现超过三行的连续空行
        'no-multiple-empty-lines': ['error', {'max': 3, 'maxEOF': 1, 'maxBOF': 1}],
        // in 操作符的左边不能有!
        'no-negated-in-lhs': 'error',
        // 禁止直接 new 一个类而不赋值
        'no-new': 'error',
        // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
        'no-new-func': 'error',
        // 禁止直接 new Object
        'no-new-object': 'error',
        // 禁止直接 new require('foo')
        'no-new-require': 'error',
        // 禁止使用 new 来生成 Symbol
        'no-new-symbol': 'error',
        // 禁止使用 new 来生成 String, Number 或 Boolean
        'no-new-wrappers': 'error',
        // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
        'no-obj-calls': 'error',
        // 禁止使用 0 开头的数字表示八进制数
        'no-octal': 'error',
        // 禁止使用八进制的转义符
        'no-octal-escape': 'error',
        // 禁止对 __dirname 或 __filename 使用字符串连接
        'no-path-concat': 'error',
        // 禁止使用 __proto__
        'no-proto': 'error',
        // 禁止重复定义变量
        'no-redeclare': 'error',
        // @fixable 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
        'no-regex-spaces': 'error',
        // 禁止在 return 语句里赋值
        'no-return-assign': ['error', 'except-parens'],
        // 禁止在 return 语句里使用 await
        'no-return-await': 'error',
        // 禁止将自己赋值给自己
        'no-self-assign': 'error',
        // 禁止将自己与自己比较
        'no-self-compare': 'error',
        // 禁止使用逗号操作符
        'no-sequences': 'error',
        // 禁止使用保留字作为变量名
        'no-shadow-restricted-names': 'error',
        // 禁止在数组中出现连续的逗号，如 let foo = [,,]
        'no-sparse-arrays': 'error',
        // 禁止使用 tabs
        'no-tabs': 'error',
        // 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
        'no-template-curly-in-string': 'error',
        // 禁止在 super 被调用之前使用 this 或 super
        'no-this-before-super': 'error',
        // 禁止 throw 字面量，必须 throw 一个 Error 对象
        'no-throw-literal': 'error',
        // @fixable 禁止行尾有空格
        'no-trailing-spaces': 'error',
        // 禁止使用未定义的变量
        'no-undef': 'error',
        // @fixable 禁止将 undefined 赋值给变量
        'no-undef-init': 'error',
        // 禁止出现难以理解的多行表达式，如：
        // let foo = bar
        // [1, 2, 3].forEach(baz);
        'no-unexpected-multiline': 'error',
        // 循环内必须对循环条件的变量有修改
        'no-unmodified-loop-condition': 'error',
        // @fixable 必须使用 !a 替代 a ? false : true
        // @off 后者表达的更清晰
        'no-unneeded-ternary': 'off',
        // 禁止在 return, throw, break 或 continue 之后还有代码
        'no-unreachable': 'error',
        // 禁止在 finally 中出现 return, throw, break 或 continue
        'no-unsafe-finally': 'error',
        // @fixable 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
        'no-unsafe-negation': 'error',
        // 禁止无用的表达式
        'no-unused-expressions': ['error', {
            'allowShortCircuit': true,
            'allowTernary': true,
            'allowTaggedTemplates': true
        }],
        // 定义过的变量必须使用
        'no-unused-vars': ['error', {'vars': 'all', 'args': 'none', 'ignoreRestSiblings': true}],
        // 变量必须先定义后使用
        'no-use-before-define': ['error', {'functions': false, 'classes': false, 'variables': false}],
        // 禁止出现没必要的 call 或 apply
        'no-useless-call': 'error',
        // @fixable 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
        'no-useless-computed-key': 'error',
        // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
        'no-useless-constructor': 'error',
        // 禁止出现没必要的转义
        'no-useless-escape': 'error',
        // @fixable 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
        'no-useless-rename': 'error',
        // @fixable 禁止没必要的 return
        'no-useless-return': 'error',
        // @fixable 禁止属性前有空格，比如 foo. bar()
        'no-whitespace-before-property': 'error',
        // 禁止使用 with
        'no-with': 'error',
        // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
        // @off，没必要限制
        'object-curly-spacing': 'off',
        // @fixable 对象字面量内的属性每行必须只有一个
        'object-property-newline': ['error', {
            'allowMultiplePropertiesPerLine': true
        }],
        // 禁止变量申明时用逗号一次申明多个
        // 可以忽略未赋值的变量
        'one-var': ['error', {'initialized': 'never'}],
        // @fixable 需要换行的时候，操作符必须放在行末，比如：
        // let foo = 1 +
        //     2
        // @off 有时放在第二行开始处更易读
        'operator-linebreak': 'off',
        // @fixable 代码块首尾必须要空行
        // @off 没必要限制
        'padded-blocks': 'off',
        // Promise 的 reject 中必须传入 Error 对象，而不是字面量
        'prefer-promise-reject-errors': 'error',
        // @fixable 必须使用单引号，禁止使用双引号
        'quotes': ['error', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
        // @fixable ... 的后面禁止有空格
        'rest-spread-spacing': ['error', 'never'],
        // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
        'semi-spacing': ['error', {'before': false, 'after': true}],
        // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
        'space-before-blocks': ['error', 'always'],
        // @fixable function 的小括号之前必须要有空格
        // anonymous is for anonymous function expressions (e.g. function() {})
        // named is for named function expressions (e.g. function foo() {})
        // asyncArrow is for async arrow function expressions (e.g. async () => {})
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }],
        // @fixable 小括号内的首尾禁止有空格
        'space-in-parens': ['error', 'never'],
        // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
        'space-infix-ops': 'error',
        // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
        // let foo = new Person();
        // bar = bar++;
        'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
        // @fixable 注释的斜线或 * 后必须有空格
        'spaced-comment': ['error', 'always', {
            'line': {'markers': ['*package', '!', '/', ',', '=']},
            'block': {
                'balanced': true,
                'markers': ['*package', '!', ',', ':', '::', 'flow-include'],
                'exceptions': ['*']
            }
        }],
        // 创建 Symbol 时必须传入参数
        'symbol-description': 'error',
        // @fixable ${name} 内的首尾禁止有空格
        'template-curly-spacing': ['error', 'never'],
        // @fixable 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
        'template-tag-spacing': ['error', 'never'],
        // @fixable 文件开头禁止有 BOM
        'unicode-bom': ['error', 'never'],
        // 必须使用 isNaN(foo) 而不是 foo === NaN
        'use-isnan': 'error',
        // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
        'valid-typeof': ['error', {'requireStringLiterals': true}],
        // @fixable 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
        'wrap-iife': ['error', 'inside', {'functionPrototypeMethods': true}],
        // @fixable yield* 前后必须要有空格
        'yield-star-spacing': ['error', 'both'],
        // @fixable 必须使用 if (foo === 5) 而不是 if (5 === foo)，前者可读性强
        'yoda': ['error', 'never'],
        // Report any invalid exports, i.e. re-export of the same name
        'import/export': 'error',
        // Ensure all imports appear before other statements
        'import/first': 'error',
        // Report repeated import of the same module in multiple places
        'import/no-duplicates': 'error',
        // Forbid named default exports
        'import/no-named-default': 'error',
        // Forbid webpack loader syntax in imports
        'import/no-webpack-loader-syntax': 'error',
        // disallow deprecated APIs
        'node/no-deprecated-api': 'error',
        // make process.exit() expressions the same code path as throw
        'node/process-exit-as-throw': 'error',
        // Enforce consistent param names and ordering when creating new promises.
        'promise/param-names': 'error',
        // Like array-bracket-even-spacing from ESLint except it has an either option which lets you
        // have 1 or 0 spacing padding.
        'standard/array-bracket-even-spacing': ['error', 'either'],
        // Like computed-property-spacing around ESLint except is has an even option which lets you
        // have 1 or 0 spacing padding.
        'standard/computed-property-even-spacing': ['error', 'even'],
        // Ensures that we strictly follow the callback pattern with undefined, null or an error object
        // in the first position of a callback.
        'standard/no-callback-literal': 'error',
        // Like object-curly-spacing from ESLint except it has an either option which lets you have 1 or 0
        // spaces padding.
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
