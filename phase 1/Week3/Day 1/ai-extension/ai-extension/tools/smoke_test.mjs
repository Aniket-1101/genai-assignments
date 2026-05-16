import { getPrompt } from '../src/scripts/prompts.js';

const sampleDom = `<html><body><form id="login"><input id="username" /><input id="password" /><button>Login</button></form></body></html>`;
const pageUrl = 'https://example.com/login';

function printSeparator(title) {
  console.log('\n' + '='.repeat(10) + ' ' + title + ' ' + '='.repeat(10) + '\n');
}

try {
  const p1 = getPrompt('PLAYWRIGHT_TS_PAGE_ONLY', { domContent: sampleDom, pageUrl });
  printSeparator('PLAYWRIGHT_TS_PAGE_ONLY');
  console.log(p1);

  const p2 = getPrompt('CUCUMBER_WITH_PLAYWRIGHT_TS_STEPS', { domContent: sampleDom, pageUrl });
  printSeparator('CUCUMBER_WITH_PLAYWRIGHT_TS_STEPS');
  console.log(p2);
} catch (err) {
  console.error('Error building prompts:', err);
}
