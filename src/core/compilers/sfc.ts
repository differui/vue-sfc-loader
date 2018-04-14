import { injectable, inject } from 'inversify';
import { parse } from 'sfc-parser';
import Vue from 'vue';
import { VueConfiguration } from 'vue/types/vue';
import { ComponentOptions } from 'vue/types/options';
import SssaCompiler from '@/core/compilers/sssa';
import IDENTIFIERS from '@/core/Identifiers';

@injectable()
class SfcCompiler implements Compiler<ComponentOptions<Vue>> {
  @inject(IDENTIFIERS.SSSA_COMPILER) sssaCompiler: SssaCompiler;

  public async compile(source: string): Promise<ComponentOptions<Vue>> {
    const ast = parse(source);
    const promises = ast.children
      .filter(b => b.name === 'style')
      .map(s => {
        const lang = s.attrs.find(a => a.key === 'lang');

        if (lang) {
          switch (lang.value) {
            case 'sssa': return this.sssaCompiler.compile(s.content);

            // TODO:
            // add more css preprocessors
            // case 'sass' : return this.sassCompiler.compile(s.content);
            // case 'less' : return this.lessCompiler.compile(s.content);
            // case 'stylus' : return this.stylusCompiler.compile(s.content);
            default:
          }
        }
        return s.content;
      });
    const styles = await Promise.all(promises);
    const script = ast.children.find(b => b.name === 'script');
    const template = ast.children.find(b => b.name === 'template');

    return Promise.resolve({
      beforeCreate() {

        // TODO:
        // use global insert css helper
        const stlyeNode = document.createElement('style');

        stlyeNode.innerHTML = styles.join('\n');
        document.head.appendChild(stlyeNode);
      },
      template: template.content,
    });
  }
}

export default SfcCompiler;
