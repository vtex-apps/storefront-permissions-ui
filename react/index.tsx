/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import React, { useState } from 'react'
import type { InjectedIntlProps } from 'react-intl'
import { FormattedMessage, injectIntl } from 'react-intl'
import { useQuery } from 'react-apollo'
import { Layout, PageBlock, PageHeader} from 'vtex.styleguide'

import GET_CONFIG from './queries/getAppSettings.gql'

const AdminB2bWaffle: FC<InjectedIntlProps> = (props) => {

  const [state, setState] = useState<any>({
    missingConfig: true,
  })

  const { loading } = useQuery(GET_CONFIG, {
    onCompleted: (res: any) => {
      setState({
        ...state,
        missingConfig: res.getAppSettings,
      })
    },
  })


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
