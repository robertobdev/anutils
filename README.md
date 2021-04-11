# Anutils

![Deploy Library](https://github.com/robertobdev/anutils/workflows/Deploy%20Library/badge.svg)
![Deploy Example](https://github.com/robertobdev/anutils/workflows/Deploy%20Example%20App/badge.svg)
![Test and Lint](https://github.com/robertobdev/anutils/workflows/Test%20and%20Lint/badge.svg)
[![codecov](https://codecov.io/gh/robertobdev/anutils/branch/main/graph/badge.svg?token=HJ95O258W5)](https://codecov.io/gh/robertobdev/anutils)
![npm](https://img.shields.io/npm/dw/anutils)
![npm](https://img.shields.io/npm/v/anutils)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/robertobdev/anutils/compare)


Anutils helps Angular developers code faster.

### Installation

Anutils requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies

```bash
$ npm i anutils
```

[See our Demo](http://anutils.rb42.com.br)

> //TODO Add demo print


### Modules availables

- Directive Module
```typescript
import { CommonModule } from '@angular/common';
import { AnutilsDirectivesModule } from 'anutils/directives';

@NgModule({
  imports: [CommonModule, AnutilsDirectivesModule],
  bootstrap: [App],
  declarations: [App],
})
class AppModule {}
```
