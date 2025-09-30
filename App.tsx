import { useState, useEffect } from 'react'
import { getUniversalConnector } from './config' // previous config file
import { UniversalConnector } from '@reown/appkit-universal-connector'

export function App() {
  const [universalConnector, setUniversalConnector] = useState<UniversalConnector>()
  const [session, setSession] = useState<any>()

  
  // Initialize the Universal Connector on component mount
  useEffect(() => {
    getUniversalConnector().then(setUniversalConnector)
  }, [])

  // Set the session state in case it changes
  useEffect(() => {
    setSession(universalConnector?.provider.session)
  }, [universalConnector?.provider.session])
