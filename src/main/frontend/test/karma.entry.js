const context = require.context('../src/script/mainApp/core/user/saga/', true, /\.?spec\.js$/);
context.keys().forEach(context);
