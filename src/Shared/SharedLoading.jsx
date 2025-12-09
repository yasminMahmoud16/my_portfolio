import { useContext } from 'react'
import { ThemeContext } from "../Context/contextCreation/Them.JS";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
export default function SharedLoading() {
      const { theme } = useContext(ThemeContext);
    
      const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 48,
        color: theme === "dark" ? "#f0c0ff" : "#0b6bcb",
      }}
      spin
    />
  );
    return (
      <>
        <div className=" flex items-center justify-center min-h-screen w-full ">
          <Spin
            indicator={antIcon}
            tip="Loading..."
            tipStyle={{ color: theme === "dark" ? "#f0c0ff" : "#0b6bcb" }}
          />
        </div>
      </>
    );
}
