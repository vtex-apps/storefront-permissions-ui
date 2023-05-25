import React from 'react'
import type { ElementType } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { useQuery } from 'react-apollo'

import getPermissions from './queries/permissions.gql'

interface Props {
  roles: string[]
  AllowedContent?: ElementType
  DisallowedContent?: ElementType
  LoadingContent?: ElementType
}

function CheckPermission({
  roles = [],
  AllowedContent,
  DisallowedContent,
  LoadingContent,
}: Props) {
  const { data, called, error, loading } = useQuery(getPermissions, {
    ssr: false,
    skip: !roles.length,
  })

  if (error) {
    console.error('CheckPermission error:', error)

    return null
  }

  if (called && loading) {
    return LoadingContent ? (
      <LoadingContent />
    ) : (
      <ExtensionPoint id="loading-content" />
    )
  }

  if (!roles.length || !data) {
    return null
  }

  const hasPermission = roles?.length
    ? roles.indexOf(data?.checkUserPermission?.role?.slug) !== -1
    : false

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

export default CheckPermission
