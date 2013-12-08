## A simple set game for now.

I'd love to see this get up to MMO status.

To play:

```bash
grunt serve
```

Then navigate to localhost:3000/game.

You might need an `npm install`, i've seen it a few times, something to do with jade.

## Front end to-dos:

- add number dimension to each card and logic
- unit tests for factories - some.
- refactor css to use a preprocessor - less or styl, please
- ...design?
- handle multiple players

## Back end to-dos:

- socket.io instance
- create unique sessions
- users
- recording sessions, sets, etc.

## eventually

- modularize the game logic completely into a library that can be used anywhere JS is avail (including ios)
- etc.

## Done:

- refactor into controller files that make sense
- add grunt for server, tests, build, auto-refresh
- handle asking for more cards
- node server
- build smart logic (aware of winning sets on the board, penalizes score for asking for more cards when they are available)
- playable x number of cards game - displays sets, score, time on gameOver