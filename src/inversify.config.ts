import { Container } from 'inversify';
import SfcCompiler from '@/core/compilers/SFC';
import IDENTIFIERS from '@/core/Identifiers';
import SfcLoader from '@/core/loaders/sfc';
import Network from '@/core/Network';

const container = new Container();

container.bind<SfcCompiler>(IDENTIFIERS.SFC_COMPILER).to(SfcCompiler);
container.bind<SfcLoader>(IDENTIFIERS.SFC_LOADER).to(SfcLoader);
container.bind<Network>(IDENTIFIERS.NETWORK).to(Network);

export default container;