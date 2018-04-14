# vue-sfc-loader
> vue sfc loader for browser

## Features

+ Able to handle component importing other components.
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
  .then(componentOptions => {
    new Vue({
      render: h => h(componentOptions);
    });
  });
```

## License

&copy; [BinRui Guan](mailto:differui@gmail.com)
