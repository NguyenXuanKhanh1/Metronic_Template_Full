export class ServiceViewModel{
    public name?: string;
    public description?: string;
    public tags?: string;
    public url?: string;
    public protocol?: string;
    public host?: string;
    public port?: number;
    public path?: string;
    public retries?: number;
    public connect_timeout?: number;
    public write_timeout?: number;
    public read_timeout?: number;
}