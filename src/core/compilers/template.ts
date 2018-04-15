import { injectable } from 'inversify';
import { compileToFunctions } from 'vue-template-compiler';

@injectable()
class VueTemplateCompiler implements Compiler<any> {
  public compile(source: string): Promise<any> {
    const rtn = compileToFunctions(source);

    console.log(rtn);
    return Promise.resolve(rtn);
  }
}

export default VueTemplateCompiler;