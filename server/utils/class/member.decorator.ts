import 'reflect-metadata';
const metadataKey = Symbol('isMember');

export function isMember(): (target: object, propertyKey: string) => void {
    return registerProperty;
}

function registerProperty(target: object, propertyKey: string): void {
    const t = Reflect.getMetadata("design:type", target, propertyKey);
    
    let properties: Array<[string, string]> = Reflect.getMetadata(metadataKey, target);

    if (properties) {
        properties.push([propertyKey, t.name]);
    } else {
        properties = [[propertyKey, t.name]];
        Reflect.defineMetadata(metadataKey, properties, target);
    }
}

export function getMemberProperties(origin: object): object {
    const properties: Array<[string, string]> = Reflect.getMetadata(metadataKey, origin);
    const result = Object.fromEntries(properties);
    return result;
}
