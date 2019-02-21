import React from 'react'
import TabList from 'containers/TabList';
import TodoList from 'containers/TodoList';
import Section from 'components/Section';
function Desktop() {
  return (
    <Section>
        <TabList />
        <TodoList />
    </Section>
  )
}

export default Desktop
