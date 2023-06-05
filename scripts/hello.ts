import ora from 'ora';

const spinner = ora('Loading...')
spinner.color = 'yellow';
spinner.start();

setTimeout(() => {
  spinner.color = 'blue';
  spinner.text = 'Hello, world!';

  setTimeout(() => {
    spinner.stop();
  }, 5000);
}, 2000);
