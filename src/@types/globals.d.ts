declare const hljs: {
  highlightAuto: (code: string) => { value: string };
  highlightAll: () => void;
};
declare function require(context: string): {
  keys(): string[];
  (id: string): any;
};

declare module "*.ts"; // 确保支持 .ts 文件
