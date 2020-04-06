# React Component Lifecycle
- For class components that extend React.Component

## Available Methods
- http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- https://reactjs.org/docs/react-component.html

## Task Lister
App (class component)
 |- Form
 |- TaskList
      |-Task (class component)
        ...


## Lifecycle Methods only for class components
1. Read tasks from an api
2. Add tasks
3. Delete tasks

- When some event happens, I want to make a fetch call,
   then update state in order to update the DOM

1. When the page loads, I want to make a GET fetch, and update the state of taskList(not formText)
2. When I submit the form, I want to make a POST fetch call, then update state of taskList to be exact what it use to be plus one new task
3. When I click on X button, I want to make a DELETE fetch, then I want to update state 

### Creation
- `componentDidMount()` - means that component was rendered on the REAL DOM
 - fetch
 - add extra event listeners
 - set up timers
 - things that require the DOM

#### Setting Initial State using Props

### Update
- `render()` -- means that the component was render on the VIRTUAL DOM
 - has a return value
 - don't update state here
- `componentDidUpdate()`
 - fetch maybe?

### Deletion
 - `componentWillUnmount()`
  - called right before element is removed from DOM
  - clean up things from componentDidMount
