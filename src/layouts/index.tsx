import React from 'react';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import type { LayoutProps } from './data.d';
import styles from './index.less';

export default ({ children }: LayoutProps) => {
  return (
    <section className={styles.cliContainer}>
      <div className={styles.cliSider}>
        <div className={styles.header}>
          <h4>应用管理器</h4>
          <Button type="text" title="新增版本" icon={<PlusCircleOutlined />} />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
