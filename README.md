bring-a-ping
============

a half pointless module that prints a string back to the command line

used to test basic docker functionality in other modules test suites

## install

node:

```bash
$ npm install bring-a-ping -g
```

docker:

```bash
$ docker pull binocarlos/bring-a-ping
```

## usage

node:

```
$ bring-a-ping
ping
```

docker:

```
$ docker run binocarlos/bring-a-ping
ping
```

You can change the string and loop over it:

```
$ bring-a-ping --string apples --timeout 2000
apples
apples
...
```

## options

```
Usage: bring-a-ping [arg...]

 -s, --string=ping          what string to ping
 -t, --timeout=1000         loop and ping every X milliseconds
```

## why?

Because I needed a throwaway docker image that is lightweight and throwaway.

This means in tests I can `docker pull` then `docker rmi --no-prune` and it dont take much time.

## license

MIT