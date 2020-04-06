# You've learn everything you need to build any React App
- React Hooks (a way to add state and lifecycle methods to functional components)
- Redux (an alternative state management)

# Thinking in React

https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy
Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow (writing your callbacks to update State)


## State Brainstorm
- detailsPokemon: {} -> StatsDisplay
- team: [] -> TeamContainer
- allPokemon: []  -> Wild Pokemon Container  

### Let's make an app from scratch

what API? - pokeapi
what generation - start with gen 1, expand to all pokemon
backend persistance? - no
what data do you want see? base stats, sprite
- filter (searchbar)
no dupes (can't have the same species twice in a team)
 - once pokemon is added to team, just keep in down at the bottom
team limit of 6
- no pokemon stats at the begining


As a user...

X. I can click a pokemon card to see the stats for that pokemon
X. I can see all 151 pokemon on load of the page

 I can add pokemon to my team by double clicking
 I can remove pokemon from my team by double clicking


1. When double click on pokemon card, update the state of ?? =>  DOM 

### CSS Helpers
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
```

```
.details {
  display: inline-block;
  width: 70%;
  background-color: #FAFAD2;
  padding: 10px 30px 10px 30px;
  margin: 10px 10px;
}

.pokemon {
  display: inline-block;
  width: 12%;
  background-color: #FFD700;
  padding: 30px 0px 30px 0px;
  margin: 10px 10px;
}

.search {
  font-size: 1.5rem;
  width: 50%;
  border: 3px solid #fecd2f;
  color: #2d72fc;
}

.row {
  display: block;
}

.block {
  width: 30%;
  display: inline-block;
}
```

### Static components
```
<img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>

<div className="card details">
  <div>
    <div className="row">PIKACHU</div>
    <div className="row">
      <div><img alt="" src="" /></div>
      <div className="block">hp: 10</div>
      <div className="block">speed: 10</div>
      <div className="block">attack: 10</div>
      <div className="block">defense: 10</div>
      <div className="block">sp-attack: 10</div>
      <div className="block">sp-defense: 10</div>
    </div>
  </div>
</div>
```

## Announcement about Labs
* Best way to learn react is by building mini projects
  - Animal Shelter
      * Props, State, Events
  - Hogwarts
      * Props, State, Events
  - Async React Mini Project (Gif Searcher)
      * Lifecycle methods and fetching
  - Container Components Lab (New York Times App)
      * Lifecycle methods and fetching
  - Practice Challenges (Pokemon Searcher, Sushi Saga, React Stocks, React Pizza)
      * Thinking in React
  - build your own `create-react-app`
