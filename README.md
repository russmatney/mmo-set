## A simple set game for now.

I'd love to see this get up to MMO status.

To play:

```bash
grunt serve
```

Then navigate to localhost:3000/game.

You might need an `npm install`, i've seen a missing dependency a few times, but that clears it right up ;)

## To-dos:

- tutorial/walkthrough option for noobs

- general flow control
- create acct
- how fast can you finish x cards mode - setting options
- how many sets in x seconds mode - setting options
- play online in either mode

- css for card.count property
- refactor css to use a preprocessor - less or styl, please
- ...design? it looks a right mess at the moment
- animations for transitions, selecting cards, finding sets, adding cards, etc.

- users - all sets, all scores, all stats!
- recording games, sets, etc.

- handle multiple players via socket.io
- create and share sessions
- online features: some kind of animation around finding a set, or maybe notification that someone else "called" it
- "calling" it and quick countdown - punishment if wrong/not clicked on time.
- high scores/leaderboards
- oauth (passport.js?)

## Done:

- refactor into controller files that make sense
- add grunt for server, tests, build, auto-refresh
- handle asking for more cards
- node server
- build smart logic (aware of winning sets on the board, penalizes score for asking for more cards when they are available)
- playable x number of cards game - displays sets, score, time on gameOver
- add number dimension to each card and logic