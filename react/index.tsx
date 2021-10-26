/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import React, { useState } from 'react'
import type { InjectedIntlProps } from 'react-intl'
import { FormattedMessage, injectIntl } from 'react-intl'
import { useQuery } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'
import { Layout, PageBlock, PageHeader, Tabs, Tab } from 'vtex.styleguide'

import GET_CONFIG from './queries/getAppSettings.gql'

const AdminB2bWaffle: FC<InjectedIntlProps> = (props) => {
  const { navigate, route } = useRuntime()

  console.log('route', route)
  const [activeTab, setActiveTab] = useState('admin.app.storefront-permissions.roles-list')
  const [state, setState] = useState<any>({
    missingConfig: true,
  })

  const setActiveSection = (section: string) => () => {
    const path = `admin.app.storefront-permissions.${section}-list`

    setActiveTab(path)
    navigate({ page: path })
  }

  const { loading } = useQuery(GET_CONFIG, {
    onCompleted: (res: any) => {
      setState({
        ...state,
        missingConfig: res.getAppSettings,
      })
    },
  })

  const isActive = (currTab: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const [_, current] = activeTab.split('admin.app.storefront-permissions')
    const [section] = current.replace('.', '').split('-')
    console.log('isActive', currTab, currTab === (section || 'roles'))
    return currTab === (section || 'roles')
  }

  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="admin/storefront-permissions.title" />}
          subtitle={
            <FormattedMessage id="admin/storefront-permissions.description" />
          }
        />
      }
    >
      <PageBlock>
        <>
          {props.children}
        </>
      </PageBlock>
    </Layout>
  )
}

export default injectIntl(AdminB2bWaffle)
