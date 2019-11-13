export class ServiceViewModel{
    public FormName?: string;
    public FormDescription?: string;
    public FormTag?: string;
    public FormURL?: string;
    public FormProtocol?: string;
    public FormHost?: string;
    public FormPort?: string;
    public FormPath?: string;
    public FormRetries?: string = '5';
    public FormConnect?: string = '60000';
    public FormWrite?: string = '60000';
    public FormRead?: string = '60000';
}