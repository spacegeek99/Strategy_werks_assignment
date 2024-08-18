import { Avatar, List, Spin } from "antd";
import VirtualList from "rc-virtual-list";
import "./List.css";
import {useListTable} from "../../hooks/useListTable";
import { ContainerHeight } from "../../constants";
import React from "react";

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const Table: React.FC = () => {
  const {onScroll, prevList,  loading}=useListTable()

  return (
    <div className="list-wrapper" data-testId ="table">
      {prevList.length>0&&<List>
        <VirtualList
          data={prevList}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item: UserItem) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        </VirtualList>
      </List>}
      <div data-testId="loading">
      {loading && <Spin/>}
      </div>
    </div>
  );
};

export default Table;
