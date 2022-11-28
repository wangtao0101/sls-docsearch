import React from 'react';
import { DocSearch } from '@aliyun-sls/docsearch-react';

import './app.css';
import '@docsearch/css';

function App() {
  return (
    <div>
      <h1>DocSearch v3 - React</h1>
      <DocSearch
        indexName="docsearch"
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        openSearchUrl='https://sls-doc-search-sls-doc-search-otdlhfahpe.cn-hangzhou.fcapp.run'
      />
    </div>
  );
}

export default App;
