[![Build Status](https://travis-ci.org/ken107/scope-functions.svg?branch=master)](https://travis-ci.org/ken107/scope-functions)

### Usage

```typescript
import "scope-functions";

let myObj = {a:1}.also(console.log);

let myNumber = {a:1}.let(x => x.a);
```
