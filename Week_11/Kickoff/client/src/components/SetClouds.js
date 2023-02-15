import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { uiContext } from '../contexts/UIProvider'
import ThemedLink from './ThemedLink'

const SetClouds = () => {
  const { theme, toggleClouds } = useContext(uiContext)
  return (
    <>
      <p>
        If you were to look at the code in the <code>ContextPage</code> component, you will
        see no state of any type. You will also not see any <code>useState</code> hooks or
        even any props in <em>THIS</em> component (<code>SetClouds</code>). All that is here is{' '}
        <code>theme</code> and <code>toggleClouds</code> being destructured out of the value
        returned by the <code>useContext</code> hook. Click the button below, and you will see...
      </p>
      <Button variant="info" onClick={toggleClouds}>Make it Cloudy</Button>
      <p>
        Nothing. You will see nothing... Yet... But check that header out. Yes, up there.
        Now, look on the right-hand side. What's that? A switch? Yup! Every time you switch it,
        the whole page changes in some way, because you're changing the value of <code>theme</code>{' '}
        defined in the <code>UIProvider</code>.
      </p>
      <p>
        Note also that the box below is changing significantly when the theme is toggled between light
        and dark mode:
      </p>
      <div className={`theme-box ${theme}`}></div>
      <p>
        Remember that Reducers page? Maybe go <ThemedLink to="/reducers">check that out</ThemedLink>...
      </p>
    </>
  )
}

export default SetClouds