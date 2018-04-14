import { injectable, inject } from 'inversify';
import { Vue } from 'vue/types/vue';
import { ComponentOptions } from 'vue/types/options';
import SfcCompiler from '@/core/compilers/sfc';
import Network from '@/core/Network';
import IDENTIFIERS from '@/core/Identifiers';

@injectable()
class SfcLoader implements Loader<ComponentOptions<Vue>, SfcCompiler> {
  @inject(IDENTIFIERS.NETWORK) private network: Network;
  @inject(IDENTIFIERS.SFC_COMPILER) private compiler: SfcCompiler;

  public async load(url: string): Promise<ComponentOptions<Vue>> {
    const source: string = await this.network.request(url);

    return Promise.resolve({
      template: source,
    });
  }
}

export default SfcLoader;