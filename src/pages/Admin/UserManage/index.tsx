import  { useRef } from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { searchUsers } from "@/services/ant-design-pro/api";
import {Image} from "antd";


import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';




const columns: ProColumns<API.CurrentUser>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: 'UserName',
    dataIndex: 'username',
    copyable: true,
  },
  {
    title: 'UserAccount',
    dataIndex: 'userAccount',
    copyable: true,
  },
  {
    title: 'Avatar',
    dataIndex: 'avatarUrl',
    render: (_, record) => (
      <div>
        <Image src={record.avatarUrl} width={100} />
      </div>
    ),
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    copyable: true,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    copyable: true,
  },
  {
    title: 'Status',
    dataIndex: 'userStatus',
  },
  {
    title: 'StudentID',
    dataIndex: 'planetCode',
  },
  {
    title: 'Role',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
      0: { text: 'user', status: 'Default' },
      1: {
        text: 'admin',
        status: 'Success',
      },
    },
  },
  {
    title: 'Create Time',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },
  {
    title: 'Action',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        Edit
      </a>,
      <a href={record.avatarUrl} target="_blank" rel="noopener noreferrer" key="view">
        View
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: 'Copy' },
          { key: 'delete', name: 'Delete' },
        ]}
      />,
    ],
  },
];



export default () => {
  //
  const actionRef = useRef<ActionType>();

  return (
    <ConfigProvider locale={enUS}>
      <ProTable<API.CurrentUser>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params = {}, sort, filter) => {
          console.log(sort, filter);
          const userList = await searchUsers();
          return {
            data: userList
          }
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          // Due to the configuration of transform, the submitted participation is different from the defined one and needs to be transformed here
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
        }}
        dateFormatter="string"
        headerTitle="Management Forms"

      />
    </ConfigProvider>
  );
};

