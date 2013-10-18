## A simple set game for now.

I'd love to see this get up to MMO status.

To play:

```bash
cd app/
python -m SimpleHTTPServer
```

Then open up localhost on port 8000.

## Front end to-dos:

- add number dimension to each card and logic
- refactor into controller files that make sense
- unit tests for factories
- add grunt for server, tests, build, auto-refresh
- refactor css to use a preprocessor
- coffeeScript?
- ...design?
- handle multiple players
- handle asking for more cards

## Back end to-dos:

- node server and socket.io instance
- create unique sessions
- users? not sure how involved this should be

## eventually

- build smart logic (that is aware of sets on the board, and penalizes people for asking for more cards when they are available)
- modularize the game logic completely into a library that can be used anywhere JS is avail (including ios)
- etc.
