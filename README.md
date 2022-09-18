# Toy-ui

> 模仿 element-plus

## Bootstrap project
With command
```bash
$ yarn bs
```
the project will install all dependencies and run `lerna bootstrap` to initialize the project

## Storybook preview
With command
```bash
$ yarn sb
```
the project will launch `@storybook` client for you to preview all existing component

## Generate new component
With command
```bash
$ yarn gen component-name
```

Note the `component-name` must be in `kebab-case`, combining words by replacing each space with a dash.

## Commit template
With command
```bash
yarn cz
```

Example
```
[TYPE](SCOPE):DESCRIPTION#[ISSUE]
# example feat(button):add type 'button' for form usage #1234
```

只限於學習
