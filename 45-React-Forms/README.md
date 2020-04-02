What new state to add???
- textField: ""

## State should always be minimal, but complete
 - if you can derive some data, then you don't need to put it in state


## Controlled Forms and Event Callback handlers
- State represent things on your DOM that can change
- Forms are things on the DOM that can change



App (*function*)
	|- Navbar
  |- Searchbar
	|- PaintingDetails
	|- PaintingsContainer
	 			|- Painting
           ...

A good practice is to have all forms/inputs control state
 - and in turn, the state should control the form!
 - no more document.querySelector to get values because data is always in the state!


 ## On Your Own
 - practice working with other input types (textarea, select, checkbox, radio button)
 - https://reactjs.org/docs/forms.html


### Mod 3 Thinking:
 - When <some event> happens, I want to manipulate the DOM <how>?

### Mod 4 Thinking:
 - When <some event> happens, I want to update state in order to manipulate the DOM

event => update state => change the DOM for you







## Upcoming Lab Review - Animal Lab (Combining It All)





















`<div className="right menu">
  <div className="item">
    <input className="ui search" placeholder="Search..." />
  </div>
</div>`
