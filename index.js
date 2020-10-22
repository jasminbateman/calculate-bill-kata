const calculateBill = (price, vat, tip) => {
    let amount;
    const errorMessage = 'error';

    if( typeof(price) === 'number' ) {
        amount = price + (price * vat / 100) + tip;
    } else {
        return errorMessage;
    }

    if( typeof(vat) === 'number' ) {
    } else {
        return errorMessage;
    }

    if( typeof(tip) === 'number' ) {
    } else {
        return errorMessage
    }
    
    return "£" + amount;
};

module.exports = calculateBill;

