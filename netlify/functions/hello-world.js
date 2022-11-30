const chalk = require('chalk');
const { DateTime } = require('luxon');
// eslint-disable-next-line func-names
exports.handler = async () => {
  const date = DateTime.now();
  console.log(chalk.green(`${date
  }: Netlify Functions Says Hello!`));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
};
