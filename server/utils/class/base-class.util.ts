import { getMemberProperties } from './member.decorator';

// base class to populate the class using constructor
export class BaseClass {
    constructor(data: any) {
        const properties = getMemberProperties(this);
        for (const key in properties) {
            if (data[key]) {
                Object.assign(this, { [key]: data[key] });
            }
        }
    }
}