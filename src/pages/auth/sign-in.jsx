import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import clientUrls from "../../config/url-config";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-4">
      <div className="p-6 w-full sm:max-w-sm bg-active/20 m-6 rounded-xl border-active/20 border">
        <h1 className="text-active font-medium text-xl mb-6">
          Sign in your account
        </h1>
        <Form layout="vertical" onFinish={(values) => console.log(values)}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: "email", message: "please enter valid email" },
              { required: true, message: "email should be required" },
            ]}
          >
            <Input placeholder="Enter email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "password should be required" },
              { min: 6, message: "password should be at least 6 characters" },
              { min: 18, message: "password should be at most 18 characters" },
            ]}
          >
            <Input.Password placeholder="Enter password " />
          </Form.Item>
          <Button
            className="px-6 rounded-full w-full ring-0"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>

          <div className="flex items-center justify-center pt-3">
            <Link
              to={clientUrls().auth.signUp}
              className="text-foreground hover:text-muted-foreground transition cursor-pointer"
            >
              Don't have an acount?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
