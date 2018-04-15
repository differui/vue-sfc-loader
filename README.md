# vue-sfc-loader
> vue sfc loader for browser

## Features

+ [TODO] Able to handle component importing other components.
+ [TODO] Able to detect circular dependency.
+ Support CSS preprocessor [SSSA](https://github.com/differui/sssa).
+ [TODO] Support scoped css.

## Install

```bash
npm install vue-sfc-loader
```

## Usage

```javascript
import sfcLoader from 'vue-sfc-loader';

sfcLoader
  .load('./exmaple.vue')
  .then(Example => {
    new Vue({
      render: h => h(Example);
    });
  });
```

## License

MIT &copy; [BinRui Guan](mailto:differui@gmail.com)
