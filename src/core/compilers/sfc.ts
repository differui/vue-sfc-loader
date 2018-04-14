import { injectable } from 'inversify';
import Vue from 'vue';
import { VueConfiguration } from 'vue/types/vue';
import { ComponentOptions } from 'vue/types/options';

@injectable()
class SfcCompiler implements Compiler<ComponentOptions<Vue>> {
  public compile(source: string): Promise<ComponentOptions<Vue>> {
    return Promise.resolve({});
  }
}

export default SfcCompiler;
