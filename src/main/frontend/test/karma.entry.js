const context = require.context('../src/script/mainApp/views', true, /\.?spec\.js$/);
context.keys().forEach(context);
