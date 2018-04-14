# vue-sfc-loader
> vue sfc loader for browser

## Features

+ Able to handle component importing other components.
<!-- + Able to detect circular dependency. -->
+ Support CSS preprocessor [SSSA](https://github.com/differui/sssa).
<!-- + Support scoped css. -->

## Install

```bash
npm install vue-sfc-loader
```

## Usage

```javascript
import sfcLoader form 'vue-sfc-loader';

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
