'use client';

import Link from "next/link";
import {Dropdown, Space} from "antd";

const LanguageSelect = ({locale}) => {
  const languages = [
    {
      key: 1,
      label: (
        <Link className='text-base' href="/en">
          EN
        </Link>
      ),
      locale: 'en'
    },
    {
      key: 2,
      label: (
        <Link className='text-base' href="/ru">
          RU
        </Link>
      ),
      locale: 'ru'
    },
    {
      key: 3,
      label: (
        <Link className='text-base' href="/az">
          AZ
        </Link>
      ),
      locale: 'az'
    }
  ];

  return (
    <Dropdown
      menu={{
        items: languages,
      }}
      placement="bottom"
      arrow
    >
      <button className='text-base font-semibold' onClick={(e) => e.preventDefault()}>
        <Space>
          {locale.toUpperCase()}
        </Space>
      </button>
    </Dropdown>
  );
};

export default LanguageSelect;