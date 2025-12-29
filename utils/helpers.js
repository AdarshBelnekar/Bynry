function getThreshold(productType) {
    if (productType === 'fast_moving') return 50;
    return 20;
}

function getAvgDailySales(productId) {
    return 1; // mock value
}

module.exports = { getThreshold, getAvgDailySales };
