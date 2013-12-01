run: node_modules components
	@NODE_PATH=lib ./bin/mmo-set

node_modules: package.json
	@npm install

components:
	@component install

clean:
	@rm -rf components

.PHONY: run clean
