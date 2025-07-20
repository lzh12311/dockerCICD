import * as React from "react";
import * as Dom from "react-router-dom";

type NodeProps = {
  /**
   * 页面标题
   */
  title: string;
  /**
   * 路由路径
   */
  path: string;
  /**
   * 懒加载的组件
   */
  Component: React.LazyExoticComponent<React.ComponentType<any>>;
};

const Node: React.FC<NodeProps> = (props) => {
  const location = Dom.useLocation();

  // 更新页面标题
  React.useEffect(() => {
    if (location.pathname === props.path) {
      document.title = props.title;
    }
  }, [location, props.path, props.title]);

  // 构建路由节点
  const build = (): React.ReactElement => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
        <React.StrictMode>
          <props.Component />
        </React.StrictMode>
      </React.Suspense>
    );
  };

  return build();
};

export default Node;