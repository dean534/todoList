import React from "react";
import { connect } from "react-redux";
import List from "components/List";
import Tag from "components/Tag";

import { changeFilter } from "actions/filter";

function TabList({ changeFilter, filter }) {
  const list = [
    { title: "全部", en: "all" },
    { title: "未完成", en: "yet" },
    { title: "已完成", en: "completed" }
  ];
  return (
    <List flex>
      {list.map(tab => (
        <Tag
          key={tab.en}
          onClick={e => changeFilter(tab.en)}
          {...tab}
          filter={filter}
        />
      ))}
    </List>
  );
}

const mapStateToProps = state => ({ filter: state.filter });
const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabList);
