


// export default function IndexPage() {
//   return (
//     <div>
//       <h1 className={styles.title}>Page index</h1>
//     </div>
//   );
// }
import ProLayout from '@ant-design/pro-layout';
import { useState } from 'react';
import { Button } from 'antd';
import styles from './index.less';

export default () => {
  const [count, setCount ] = useState(0)
  return (
    <ProLayout
      title={`${count}`}
      route={{
        routes: [],
      }}
      menu={{ defaultOpenAll: true }}
      footerRender={() => <h1>footer</h1>}
    >
      <div className={styles.container}>{children}<Button onClick={() => setCount(count + 1)}>加</Button></div>
    </ProLayout>
    // <div className={styles.container}>xxxxx</div>
  )
}