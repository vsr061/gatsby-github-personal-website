import React from 'react'
import { ThemeContextProvider } from "./src/theme-context"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
require("prismjs/themes/prism.css")

deckDeckGoHighlightElement();

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
);
