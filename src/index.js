import React from 'react'
import {createRoot} from 'react-dom/client'
import {RecoilRoot} from 'recoil'
import App from './app'



const Container = document.getElementById('root')
const Root = createRoot(Container)
Root.render(
    <RecoilRoot>
      <App/>
    </RecoilRoot>
)
