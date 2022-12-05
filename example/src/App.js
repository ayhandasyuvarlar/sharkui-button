import React from 'react'

import { Button} from 'sharkui-button'
import 'sharkui-button/dist/index.css'

const App = () => {
  return <Button text="Button"  color={'primary'} handlerClick={console.log('hello world')}/>
}

export default App
