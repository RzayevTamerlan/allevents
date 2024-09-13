'use client';

import Link from "next/link";
import {Dropdown, Space} from "antd";
import {useState} from "react";

const LanguageSelect = ({locale}) => {
  const [current, setCurrent] = useState(locale);

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
  console.log(current);
  return (
    <Dropdown
      menu={{
        items: languages,
      }}
      placement="bottom"
      arrow
    >
      <Space className='cursor-pointer' onClick={() => setCurrent((prev) => !prev)}>
        {locale.toUpperCase()}
      </Space>
    </Dropdown>
  );
};

export default LanguageSelect;