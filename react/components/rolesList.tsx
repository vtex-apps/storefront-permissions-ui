/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import React, { useState } from 'react'
import type { WrappedComponentProps } from 'react-intl'
import { injectIntl, defineMessages } from 'react-intl'
import { useQuery } from 'react-apollo'
import { useRuntime } from 'vtex.render-runtime'
import { Table, Card } from 'vtex.styleguide'

import QUERY_LIST_ROLES from '../queries/ListRoles.gql'

const messages = defineMessages({
  name: {
    id: 'admin/storefront-permissions.tab.roles.name.label',
    defaultMessage: 'Name',
  },
  slug: {
    id: 'admin/storefront-permissions.tab.roles.category.label',
    defaultMessage: 'Category',
  },
  new: {
    id: 'admin/storefront-permissions.tab.new.button',
    defaultMessage: 'New',
  },
  delete: {
    id: 'admin/storefront-permissions.button.delete',
    defaultMessage: 'Delete',
  },
  helpTitle: {
    id: 'admin/storefront-permissions.help.title',
    defaultMessage: 'How it works',
  },
  helpText1: {
    id: 'admin/storefront-permissions.help.text1',
    defaultMessage: 'Role Names can be renamed, but categories are fixed.',
  },
  helpText2: {
    id: 'admin/storefront-permissions.help.text2',
    defaultMessage: 'There are three categories available:',
  },
  category1: {
    id: 'admin/storefront-permissions.help.category1',
    defaultMessage: 'Store Admin',
  },
  category1Text1: {
    id: 'admin/storefront-permissions.help.category1.text1',
    defaultMessage: 'Full access',
  },
  category2: {
    id: 'admin/storefront-permissions.help.category2',
    defaultMessage: 'Sales',
  },
  category2Text1: {
    id: 'admin/storefront-permissions.help.category2.text1',
    defaultMessage: 'Can manage quotations, sales, and users from the its Organization.',
  },
  category2Text2: {
    id: 'admin/storefront-permissions.help.category2.text2',
    defaultMessage: 'It can have different access levels.',
  },
  category2Text3: {
    id: 'admin/storefront-permissions.help.category2.text3',
    defaultMessage: 'Can belong to one or many organizations.',
  },
  category2Text4: {
    id: 'admin/storefront-permissions.help.category2.text4',
    defaultMessage: 'Sales users can only manage Sales roles.',
  },
  category2Text5: {
    id: 'admin/storefront-permissions.help.category2.text5',
    defaultMessage: 'Sales user hierarchy: sales-admin > sales-manager > sales-representative',
  },
  category3: {
    id: 'admin/storefront-permissions.help.category3',
    defaultMessage: 'Customers',
  },
  category3Text1: {
    id: 'admin/storefront-permissions.help.category3.text1',
    defaultMessage: 'Have access and can manage its own organization.',
  },
  category3Text2: {
    id: 'admin/storefront-permissions.help.category3.text2',
    defaultMessage: 'Customers users can only manage users under the Customers roles.',
  },
  category3Text3: {
    id: 'admin/storefront-permissions.help.category3.text3',
    defaultMessage: 'Customers users hierarchy: customer-amin > customer-approver > customer-buyer',
  },
})

const Roles: FC<any & WrappedComponentProps> = ({ intl }: any) => {
  const [state, setState] = useState({
    items: [],
  })

  const { loading, data } = useQuery(QUERY_LIST_ROLES)

  const { navigate, route } = useRuntime()

  const { params } = route

  const { items } = state

  const customSchema = {
    properties: {
      name: {
        title: intl.formatMessage(messages.name),
      },
      slug: {
        title: intl.formatMessage(messages.slug),
      }
    },
  }

  if (data?.listRoles && !state.items.length) {
    const newItems: any = data?.listRoles

    if (
      params?.id &&
      !newItems.filter((item: any) => {
        return item.id === params.id
      }).length
    ) {
      newItems.push(params)
    }

    setState({
      ...state,
      items: newItems,
    })
  }

  return (
    <div className="w-100 pt6">
      <Table
        fullWidth
        loading={loading}
        schema={customSchema}
        items={items}
        onRowClick={({ rowData: { id } }: any) => {
          navigate({
            page: 'admin.app.storefront-permissions.roles-edit',
            params: {
              id,
            },
          })
        }}
      />
      <div className='mt6'>
        <Card>
          <h3>{intl.formatMessage(messages.helpTitle)}</h3>
          <p>
            {intl.formatMessage(messages.helpText1)}
          </p>
          <p>
          {intl.formatMessage(messages.helpText2)}
            <ul>
              <li><strong>{intl.formatMessage(messages.category1)}</strong>: {intl.formatMessage(messages.category1Text1)}</li>
              <li><strong>{intl.formatMessage(messages.category2)}</strong>:
                <ul>
                  <li>{intl.formatMessage(messages.category2Text1)}</li>
                  <li>{intl.formatMessage(messages.category2Text2)}</li>
                  <li>{intl.formatMessage(messages.category2Text3)}</li>
                  <li>{intl.formatMessage(messages.category2Text4)}</li>
                  <li>{intl.formatMessage(messages.category2Text5)}</li>
                </ul>
              </li>
              <li><strong>{intl.formatMessage(messages.category3)}</strong>:
                <ul>
                  <li>{intl.formatMessage(messages.category3Text1)}</li>
                  <li>{intl.formatMessage(messages.category3Text2)}</li>
                  <li>{intl.formatMessage(messages.category3Text3)}</li>
                </ul>
              </li>
            </ul>
          </p>
        </Card>
      </div>
    </div>
  )
}

export default injectIntl(Roles)
