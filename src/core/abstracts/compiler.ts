abstract class Compiler<T> {
  public abstract compile(source: string): Promise<T>;
}