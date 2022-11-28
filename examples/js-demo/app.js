import docsearch from '@aliyun-sls/docsearch-js/dist/umd';

import './app.css';
import '@docsearch/css';

docsearch({
  container: '#docsearch',
  indexName: 'docsearch',
  appId: 'R2IYF7ETH7',
  apiKey: '599cec31baffa4868cae4e79f180729b',
  openSearchUrl:
    'https://sls-doc-search-sls-doc-search-otdlhfahpe.cn-hangzhou.fcapp.run',
});
