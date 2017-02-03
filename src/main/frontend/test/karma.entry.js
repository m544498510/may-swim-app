const context = require.context('../src/script/widgets/Wizard', true, /\.?spec\.js$/);
context.keys().forEach(context);
