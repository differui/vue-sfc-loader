abstract class Loader<T, C extends Compiler<T>> {
  public abstract load(url: string): Promise<T>;
}