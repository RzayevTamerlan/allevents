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

  console.log('render', locale);
  return (
    <Dropdown
      menu={{
        items: languages,
      }}
      placement="bottom"
      arrow
    >
      <Space className='cursor-pointer'>
        {locale.toUpperCase()}
      </Space>
    </Dropdown>
  );
};

export default LanguageSelect;