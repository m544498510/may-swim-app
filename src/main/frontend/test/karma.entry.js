const context = require.context('../src/script/utils', true, /\.?spec2\.js$/);
context.keys().forEach(context);
