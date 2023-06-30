import style from "./LeftMenu.module.css";
import { Link } from "react-router-dom";
import { SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuProps['items'] = [
  getItem('Navigation Tree', 'sub1', <SettingOutlined />, [
    getItem(<Link to={'/'}>Chat</Link>, '1'),
    getItem(<Link to={'/profile'}>My profile</Link>, '2'),
    getItem(<Link to={'/photo'}>Photos</Link>, '3'),
    getItem(<Link to={'/alluser'}>All users</Link>, '4'),
  ])];
export const LeftMenu:React.FC = () => {
  
  return (
    <div className={style.wrapper}>
      <Menu
      style={{
        width: 245,
        position:"sticky",
        top: 20
      }}
      mode="inline"
      items={items}
    />
    </div>
  );
};
