export const calculateTotalWeight = (children) => {
    return children.reduce((sum, child) => sum + Number(child.weight || 0), 0);
};