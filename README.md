## A simple set game for now.

I'd love to see this get up to MMO status.

To play:

```bash
grunt serve
```

Then navigate to localhost:3000/game

## Front end to-dos:

- add number dimension to each card and logic
- refactor into controller files that make sense - done.
- unit tests for factories
- add grunt for server, tests, build, auto-refresh - done.
- refactor css to use a preprocessor
- coffeeScript?
- ...design?
- handle multiple players
- handle asking for more cards - done.

## Back end to-dos:

- node server - done.
- socket.io instance
- create unique sessions
- users? not sure how involved this should be

## eventually

- build smart logic (that is aware of sets on the board, and penalizes people for asking for more cards when they are available)
- modularize the game logic completely into a library that can be used anywhere JS is avail (including ios)
- etc.
