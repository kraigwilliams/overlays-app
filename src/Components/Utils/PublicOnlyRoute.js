import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../Services/token-service'

/*PublicOnlyRoute shows routes that are only visible to unauthenticated logged out users.
*/

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/topics'} />
          : <Component {...componentProps} />
        
      )}
    />
  )
}