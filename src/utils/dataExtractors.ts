
interface Entitlement {
    metadata: {
        created: string,
        updated: string,
        createdBy: string,
        updatedBy: string,
    }
    name: string,
    description: string
}

export const extractEntitlements = (response: any) => {
    const entitlementsList: Entitlement[] = [];

    const list = response.getEntitlementsList();

    for (const entitlement of list) {
        entitlementsList.push(entitlement.toObject());
    }

    return entitlementsList.map(entitlement => {
        const {metadata: {created, updated, createdBy, updatedBy}, name, description} = entitlement;
        delete entitlement.metadata;
        return {
            ...entitlement,
            name: name || 'NO NAME',
            description: description || 'NO DESCRIPTION',
            created,
            updated,
            createdBy,
            updatedBy
        };
    });
};