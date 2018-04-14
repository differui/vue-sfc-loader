import { Token, RootNode, CompilerOptions } from 'sfc-parser/src/types';

declare module "sfc-parser2" {
  export function tokenize(source: string): Token[];
  export function parse(source: string): RootNode;
  export function compile(source: string, opts?: CompilerOptions): Token[] | RootNode;
}