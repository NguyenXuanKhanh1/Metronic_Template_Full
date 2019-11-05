import { ObjectChange } from '../models/base.model';
export declare class UtilityService {
    getField(valueRef: string, lowerCase?: boolean): string;
    toPascalCase(text: string, lowerCase?: boolean): string;
    compareObjects(source: any, target: any): ObjectChange[];
}
