import { injectable } from 'inversify';
import { compile as compileSssa } from 'sssa';

@injectable()
class SssaCompiler implements Compiler<string> {
  public compile(source: string): Promise<string> {
    return Promise.resolve(compileSssa(source, {}));
  }
}

export default SssaCompiler;