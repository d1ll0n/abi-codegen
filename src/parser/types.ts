export type StructFieldType = 'ElementaryTypeName' | 'UserDefinedTypeName' | 'ArrayTypeName';

export type Length = {
  type: 'NumberLiteral',
  number: number,
}

export type TypeName = {
  type: StructFieldType;
  baseTypeName?: TypeName;
  name?: string;
  namePath?: string;
  length?: Length | null;
}

export type StructField = {
  name: string;
  typeName: TypeName;
}

export type DefinedType = EnumType | StructType;

export type EnumType = {
  type: 'EnumDefinition';
  name: string;
  namePath: string;
  fields: Array<string>;
}

export type StructType = {
  type: 'StructDefinition';
  name: string;
  namePath: string;
  fields: Array<StructField>;
}