import { BaseClass } from "../utils/class/base-class.util";
import { isMember } from "../utils/class/member.decorator";

export class Blog extends BaseClass {

    @isMember()
    id: number;

    @isMember()
    title: string;

    @isMember()
    author: string;

    @isMember()
    description: number;

    @isMember()
    content: string;

    @isMember()
    createdAt: Date;

    @isMember()
    isPublished: boolean

    constructor(data: any) {
        super(data);
        if (!this.createdAt) {
            this.createdAt = new Date();
        }
        if (!this.isPublished) {
            this.isPublished = false;
        }
    }
};