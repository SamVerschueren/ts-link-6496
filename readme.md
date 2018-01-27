# ts-link

Reproduction case for TypeScript issue [#6496](https://github.com/Microsoft/TypeScript/issues/6496)

## Description

This repository contains two modules, `mod-a` and `mod-b`. Use `yarn` to install the dependencies of both modules. If you open `mod-a/package.json`, you will notice that module A depends on module B through a link.

1. Compile `mod-b` with `yarn build`
2. Compile `mod-a` with `yarn build`

Compiling `mod-a` will fail with the following error

```
src/index.ts(7,15): error TS2345: Argument of type 'UnaryFunction<Observable<string>, Observable<string>>' is not assignable to parameter of type 'UnaryFunction<Observable<string>, Observable<string>>'.
  Types of parameters 'source' and 'source' are incompatible.
    Type 'Observable<string>' is not assignable to type 'Observable<string>'. Two different types with this name exist, but they are unrelated.
      Property 'buffer' is missing in type 'Observable<string>'.
src/index.ts(7,47): error TS7006: Parameter 'result' implicitly has an 'any' type.
```
