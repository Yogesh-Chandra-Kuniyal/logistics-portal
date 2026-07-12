const generateAWB = () => {
    const random = Math.floor(100000 + Math.random() * 900000);
    return `AWB${Date.now()}${random}`;
};

export default generateAWB;