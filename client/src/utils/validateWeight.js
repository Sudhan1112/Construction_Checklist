export const validateWeight = (newWeight, siblings, currentId) => {
    const otherItemsWeight = siblings.filter(item => item.id !== currentId).reduce((sum, item) => sum + Number(item.weight || 0), 0);

    return otherItemsWeight + Number(newWeight) <= 100;
}