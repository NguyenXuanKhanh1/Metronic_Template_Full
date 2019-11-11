import { MockData, Audit } from '../models';
export declare class FileViewModel extends Audit {
    id?: string;
    name?: string;
    src?: string;
    type?: string;
    size?: number;
    constructor(init?: Partial<FileViewModel>);
}
export declare class FileRequest extends MockData<FileResponse> {
    items: FileViewModel[];
    others?: FileViewModel[];
    createdBy: string;
    constructor(init?: Partial<FileRequest>);
}
export declare class FileResponse {
    code?: string;
    status?: boolean;
    message?: string;
    totalRecords?: number;
    items: FileViewModel[];
    constructor(init?: Partial<FileResponse>);
}
