# sharkui-button

> sharkui-button

[![NPM](https://img.shields.io/npm/v/sharkui-button.svg)](https://www.npmjs.com/package/sharkui-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save sharkui-button
```

## Usage

```jsx
import React from 'react'

import { Button } from 'sharkui-button'
import 'sharkui-button/dist/index.css'

const App = () => {
  return (
    <Button
      text='Button'
      color={'primary'}
      handlerClick={console.log('hello world')}
    />
  )
}

export default App

```

## License

MIT © [ayhandasyuvarlar](https://github.com/ayhandasyuvarlar)
