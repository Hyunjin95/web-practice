declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development';
    PORT: number;
    DB_URL: string;
  }
}
