// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class Call implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public module: string;

    public method: string;

    public parentCallId?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Call entity without an ID");
        await store.set('Call', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Call entity without an ID");
        await store.remove('Call', id.toString());
    }

    static async get(id:string): Promise<Call | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Call entity without an ID");
        const record = await store.get('Call', id.toString());
        if (record){
            return Call.create(record);
        }else{
            return;
        }
    }


    static async getByParentCallId(parentCallId: string): Promise<Call[] | undefined>{
      
      const records = await store.getByField('Call', 'parentCallId', parentCallId);
      return records.map(record => Call.create(record));
      
    }


    static create(record: Partial<Omit<Call, FunctionPropertyNames<Call>>> & Entity): Call {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Call(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
