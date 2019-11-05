import { AggregatorViewModel } from '../models/base.model';
export declare class AggregatorService {
    protected emitters: AggregatorViewModel[];
    publish<T>(key: string, value?: T): void;
    subscribe<T>(key: string, callback: (response: T) => void): void;
    private register;
}
