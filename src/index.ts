import 'reflect-metadata';
import container from '@/inversify.config';
import IDENTIFIERS from '@/core/Identifiers';
import SfcLoader from '@/core/loaders/sfc';

const sfcLoader = container.get<SfcLoader>(IDENTIFIERS.SFC_LOADER);

sfcLoader
  .load('./test/fixtures/example.vue')
  .then(compoentOptions => {
    console.log(compoentOptions);
    Object.assign(compoentOptions, {
      data() {
        return {
          title: 'Vue SFC loader for browser',
        };
      },
    });
    new window['Vue']({
      render: h => h(compoentOptions),
    }).$mount('#app');
  })
  .catch(err => {
    debugger;
    console.log(err);
  });