# Kancha

Kancha is a React Native UI library for building decentralised identity wallet apps for iOS & Android.

---

### Components

- [Container](#container)
- [Card](#card)

---

## Container

`Container` is the most fundamental building block in Kancha and should be used anywhere you would use a `View`. In most cases the built-in React Native `View` component is used in conjunction with some some simple layout styles like flexbox casuing a mess of styles. Using a `Container` these can just be added as props for declarative layouts that are easy to read.

## Card

A `Card` is build n top of `Container`. It inherits all of it's properties and has a border radius, border and shadow set by default.
