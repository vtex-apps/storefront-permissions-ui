/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import React from 'react'
import { injectIntl } from 'react-intl'
import { useRuntime } from 'vtex.render-runtime'
import { StorefrontPermissions } from 'vtex.storefront-permissions'

const UserEdit: FC = () => {
  const { navigate, route } = useRuntime()

  const redirect = () => {
    navigate({
      page: 'admin.app.storefront-permissions.users-list',
      fetchPage: true,
    })
  }

  return (
    <>
      <StorefrontPermissions
        id={route.params.id}
        showName={true}
        showEmail={true}
        showCancel={true}
        onCancel={redirect}
        onSave={redirect}
      />
    </>
  )
}

export default injectIntl(UserEdit)
