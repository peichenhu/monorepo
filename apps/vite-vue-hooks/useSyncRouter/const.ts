export type DeepPartial<T> = {
	[K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type DeepRequired<T> = {
	[K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};

// 默认选项
export type Options = {
	alias: {
		propSeparator: string;
		typeSeparator: string;
	};
	log: boolean;
};

export const defaultOptions: DeepRequired<Options> = {
	log: false,
	alias: {
		propSeparator: '.',
		typeSeparator: '@'
	}
};

export const TYPES_REFERENCE = ['Object', 'Array'];

export const TYPES_BASE = ['Null', 'Undefined', 'Number', 'String', 'Boolean', 'Date'];

// 数据操作枚举，仅支持前后端通用的 JSON 数据类型
export type TypesHandles = {
	[k: string]: {
		init(): any;
		toString(data?: any): string;
		toRaw(str?: string): any;
	};
};

export const TYPES_HANDLES: TypesHandles = {
	['Object']: {
		init: () => new Object(),
		toRaw: () => new Object(),
		toString: (data) => String(data)
	},
	['Array']: {
		init: () => [],
		toRaw: () => [],
		toString: (data) => String(data)
	},
	['Date']: {
		init: () => new Date(),
		toRaw: (str: string) => new Date(Number(str)),
		toString: (data: Date) => String(data.getTime())
	},
	['Boolean']: {
		init: () => new Boolean(),
		toRaw: (str: string) => str === 'true',
		toString: (data: boolean) => String(data)
	},
	['Null']: {
		init: () => null,
		toRaw: () => null,
		toString: () => 'null'
	},
	['Undefined']: {
		init: () => undefined,
		toRaw: () => undefined,
		toString: () => 'undefined'
	},
	['String']: {
		init: () => new String(),
		toRaw: (str: string) => str,
		toString: (str: string) => str
	},
	['Number']: {
		init: () => new Number(),
		toRaw: (str: string) => Number(str),
		toString: (data: number) => String(data)
	}
};
