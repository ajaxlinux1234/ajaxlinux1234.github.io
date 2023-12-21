/**
 * im登录页面
 */
import styles from '@imCmp/imLogin/index.less';
import React, { useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
export default function IMLogin() {
  const [isRegister, setIsRegister] = useState(false);
  const loginRef = useRef(null);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const confirmPwdValidator = (_: any, confirmPwd: string) => {
    const pwd = (loginRef.current as any).getFieldValue('pwd');
    if (!confirmPwd) {
      return Promise.reject(new Error('请输入密码！'));
    }
    if (pwd === confirmPwd && pwd) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('两次输入密码不一致！'));
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };
  return (
    <div className={styles['im-login']}>
      <div className={styles['im-login-inner']}>
        <Form
          ref={loginRef}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请填写用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="pwd"
            rules={[{ required: true, message: '请填写密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          {isRegister && (
            <Form.Item<FieldType>
              label="确认密码"
              name="confirmPwd"
              rules={[{ required: true, validator: confirmPwdValidator }]}
            >
              <Input.Password />
            </Form.Item>
          )}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button ghost htmlType="submit">
              {isRegister ? '注册' : '登录'}
            </Button>
            <Button type="link" onClick={toggleRegister}>
              {isRegister ? '登录' : '注册'}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
