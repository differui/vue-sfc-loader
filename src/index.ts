import 'reflect-metadata';
import container from '@/inversify.config';
import SfcLoader from '@/core/loaders/sfc';
import IDENTIFIERS from '@/core/Identifiers';

const sfcLoader = container.get<SfcLoader>(IDENTIFIERS.SFC_LOADER);

sfcLoader
  .load('./test/fixtures/example.vue')
  .then(result => console.log(result));