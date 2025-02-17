export interface AppConfigProps {
  apiRootRest?: string;
}
export abstract class AppConfig {
  public static Env: AppConfigProps = {};

  public static setEnv(envData: AppConfigProps): AppConfigProps {
    return this.Env;
  }
}
