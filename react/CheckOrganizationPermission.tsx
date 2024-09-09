import React from 'react'
import type { ElementType } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import { useQuery } from 'react-apollo'

import getOrganizationPermissions from './queries/getOrganizationPermissions.gql'

type OrganizationRole = 'createQuote'

interface Props {
  roles: OrganizationRole[]
  AllowedContent?: ElementType
  DisallowedContent?: ElementType
  LoadingContent?: ElementType
}

function CheckOrganizationPermission({
  roles = [],
  AllowedContent,
  DisallowedContent,
  LoadingContent,
}: Props) {
  const { data, called, error, loading } = useQuery(
    getOrganizationPermissions,
    {
      ssr: false,
      skip: !roles.length,
      onCompleted(insideData) {
        if (insideData?.getOrganizationByIdStorefront?.permissions) {
          sessionStorage.setItem(
            'checkout.createQuote',
            JSON.stringify(
              insideData?.getOrganizationByIdStorefront?.permissions.createQuote
            )
          )
        }
      },
    }
  )

  if (error) {
    console.error('CheckOrganizationPermission error:', error)

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

  const hasPermission = roles.every(
    (key) => data.getOrganizationByIdStorefront.permissions[key] === true
  )

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

export default CheckOrganizationPermission
