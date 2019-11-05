import { Observable } from 'rxjs';
export declare class MockService {
    verify<T>(callback: Observable<T>, response?: T): Observable<T>;
    private useMock;
}
