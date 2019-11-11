import { Observable } from 'rxjs';
export declare class ValidationProvider {
    constructor();
    required: (value: any) => Observable<boolean>;
    email: (email: string) => Observable<boolean>;
    phone: (phone: string) => Observable<boolean>;
    private isRequired;
    private isValidEmail;
    private isValidPhone;
}
