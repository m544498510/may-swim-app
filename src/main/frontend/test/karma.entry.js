const context = require.context('../src/script', true, /\.?spec\.js$/);
context.keys().forEach(context);
