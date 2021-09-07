import React from 'react'
import type { ElementType } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { useQuery } from 'react-apollo'
import getPermissions from './queries/permissions.gql'

interface Props {
  roles: String[]
  AllowedContent?: ElementType
  DisallowedContent?: ElementType
}

function CheckPermission({
  roles = [],
  AllowedContent,
  DisallowedContent,
}: Props) {
  const { data, called, error, loading } = useQuery(getPermissions, {
    ssr: false,
    skip: !roles.length
  })

  console.log('getPermissions =>', {data, called, error, loading})

  if (!roles.length || !data) {
    return null
  }

  if(called && loading || error) {
    if(error !== undefined) {console.error('CheckPermission error:', error)}
    return null
  } else {


    let hasPermission = roles?.length ? roles.indexOf(data?.checkUserPermission?.role?.slug) !== -1 : false

    if (hasPermission) {
      return AllowedContent ? (
        <AllowedContent />
      ) : (
        <ExtensionPoint id="allowed-content" />
      )
    }

    return DisallowedContent ? (
      <DisallowedContent />
    ) : (
      <ExtensionPoint id="disallowed-content" />
    )
  }
}

export default CheckPermission
