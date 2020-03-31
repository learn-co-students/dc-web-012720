## Imperative Programming
- Explicitly tell your program every step it needs to execute
- In vanilla JS, find the relevant DOM elements
- Programmatically create, update, or remove DOM elements

## Declarative Programming
- Tells the program 'what' the webpage should be/should look like
- The 'how' is abstracted

### Component Hierarchy
```
App
	|- Navbar
	|- PaintingDetails
	|- PaintingsContainer
	 			|- Painting
					 ...

```
### Component Tree
```
		 Appppppppppppppppp (*function*)
	 	/       |          \
          Navbar  PaintingDetails PaintingsContainer
		 		         /   \
		        	Painting   Painting
```

This app is going to need a state of  activePainting
# PaintingDetails needs to 'read' the state of activePainting
# Painting needs to 'update' the state of activePainting

## State
- Represents things that change about the DOM
- State is similar to props, but it is private and fully managed by the class component (can't be functional)

## Where to Put State?
- A comment ancestor between all components that 'touch' on this state
	- data can only flow from parent to child, not sibling components
- Set up the state object using this.state in the constructor
	- or outside the constructor

## Informational Flow
- Parent communicates to child by passing props
- How does child communicate with parent?
	- State Changing Callback!!
- Don't modify state directly, use this.setState({})
  - works asynchronously

## Virtual DOM
- When does the DOM get re-rendered?

## Conditional Rendering



#### When <some event> happens?
- I want to change the DOM by manipulating state
 - and state changes will propagate as props to update all components




`<div class="ui card">
	<div>
		<img src="https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg">
	</div>
	<p>Portrait of a Carthusian by Petrus Christus</p>
	<p>Height: 11.5 x Width: 8.5</p>
</div>`
