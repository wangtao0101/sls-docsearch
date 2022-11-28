import type { DocSearchProps as DocSearchComponentProps } from '@aliyun-sls/docsearch-react';
import { DocSearch, version } from '@aliyun-sls/docsearch-react';
import React, { render } from 'preact/compat';

function getHTMLElement(
  value: HTMLElement | string,
  environment: DocSearchProps['environment'] = window
): HTMLElement {
  if (typeof value === 'string') {
    return environment.document.querySelector<HTMLElement>(value)!;
  }

  return value;
}

interface DocSearchProps extends DocSearchComponentProps {
  container: HTMLElement | string;
  environment?: typeof window;
}

export function docsearch(props: DocSearchProps) {
  render(
    <DocSearch
      {...props}
      transformSearchClient={(searchClient) => {
        searchClient.addAlgoliaAgent('docsearch.js', version);

        return props.transformSearchClient
          ? props.transformSearchClient(searchClient)
          : searchClient;
      }}
    />,
    getHTMLElement(props.container, props.environment)
  );
}
